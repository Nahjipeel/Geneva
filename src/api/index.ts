export type EstimateRequest = { name: string; phone: string; email: string; vehicle: string; service: string; description: string; preferredContact: string };
export type EstimateResponse = { submitted: true; reference: string };
export interface ApiClient { submitEstimate(request: EstimateRequest): Promise<EstimateResponse>; }

const liveClient: ApiClient = {
  async submitEstimate(request) {
    const response = await fetch('/api/estimate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
    if (!response.ok) throw new Error(`Estimate submission failed with status ${response.status}`);
    return response.json() as Promise<EstimateResponse>;
  }
};

export const api: ApiClient = liveClient;
