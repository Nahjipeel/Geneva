import { fireEvent, render, screen } from '@testing-library/react';
import { EstimateForm } from '../src/components/EstimateForm';

test('submits an estimate and shows its reference', async () => {
	vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(JSON.stringify({ submitted: true, reference: 'GBS-2026-0917' }), { status: 201, headers: { 'Content-Type': 'application/json' } })));
	render(<EstimateForm />);
	fireEvent.click(screen.getByRole('button', { name: /request an estimate/i }));
	expect(await screen.findByText(/GBS-2026-0917/)).toBeInTheDocument();
});
