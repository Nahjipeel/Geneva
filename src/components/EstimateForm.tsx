import { Button, Field, Input, Option, Select, Textarea } from '@fluentui/react-components';
import { CheckmarkRegular } from '@fluentui/react-icons';
import { useState, type FormEvent } from 'react';
import { api, type EstimateRequest } from '../api';

const initial: EstimateRequest = { name: 'Jordan Miller', phone: '630-555-0147', email: 'jordan.miller@example.com', vehicle: '2018 Subaru Outback', service: 'Collision repair', preferredContact: 'Phone', description: 'Rear bumper and liftgate damage after a parking-lot collision.' };
export function EstimateForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const update = (key: keyof EstimateRequest, value: string) => setForm((current) => ({ ...current, [key]: value }));
  async function submit(event: FormEvent) { event.preventDefault(); setError(null); if (!form.name || !form.phone || !form.vehicle || !form.description) { setError('Please complete the required details before sending.'); return; } try { const response = await api.submitEstimate(form); setSubmitted(response.reference); } catch { setError('We could not send that request. Please call the shop.'); } }
  if (submitted) return <div className="success-panel"><CheckmarkRegular /><h2>Request received</h2><p>We will review the details during shop hours.</p><strong>Reference {submitted}</strong></div>;
  return <form className="estimate-form" onSubmit={submit} noValidate>
    {error && <div className="form-error" role="alert">{error}</div>}
    <Field label="Name" required><Input value={form.name} onChange={(_, data) => update('name', data.value)} /></Field>
    <Field label="Phone" required><Input type="tel" value={form.phone} onChange={(_, data) => update('phone', data.value)} /></Field>
    <Field label="Email"><Input type="email" value={form.email} onChange={(_, data) => update('email', data.value)} /></Field>
    <Field label="Vehicle" required><Input value={form.vehicle} onChange={(_, data) => update('vehicle', data.value)} /></Field>
    <Field label="Service"><Select value={form.service} onChange={(_, data) => update('service', data.value)}><Option>Collision repair</Option><Option>Custom paint</Option><Option>Insurance claim support</Option></Select></Field>
    <Field label="Preferred contact"><Select value={form.preferredContact} onChange={(_, data) => update('preferredContact', data.value)}><Option>Phone</Option><Option>Email</Option></Select></Field>
    <Field label="What needs attention?" required validationState={form.description ? 'none' : 'warning'} validationMessage={!form.description ? 'A short description helps us prepare.' : undefined}><Textarea value={form.description} onChange={(_, data) => update('description', data.value)} /></Field>
    <Button appearance="primary" type="submit">Request an estimate</Button>
  </form>;
}
