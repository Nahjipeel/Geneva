import { app, type HttpRequest, type HttpResponseInit, type InvocationContext } from '@azure/functions';

const requiredFields = ['name', 'phone', 'vehicle', 'service', 'description', 'preferredContact'] as const;
type EstimatePayload = Record<(typeof requiredFields)[number], unknown> & { email?: unknown };

function errorResponse(code: 'VALIDATION_ERROR', message: string, details: string[]): HttpResponseInit {
  return { status: 422, jsonBody: { error: { code, message, details } } };
}

async function submitEstimate(request: HttpRequest, _context: InvocationContext): Promise<HttpResponseInit> {
  const payload = await request.json().catch(() => null) as EstimatePayload | null;
  if (!payload) return errorResponse('VALIDATION_ERROR', 'The request body must be valid JSON.', ['body']);
  const missing = requiredFields.filter((field) => typeof payload[field] !== 'string' || !payload[field].trim());
  if (missing.length > 0) return errorResponse('VALIDATION_ERROR', 'Complete the required estimate details.', missing);
  return { status: 201, jsonBody: { submitted: true, reference: `GBS-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}` } };
}

app.http('submitEstimate', { methods: ['POST'], authLevel: 'anonymous', route: 'estimate', handler: submitEstimate });
