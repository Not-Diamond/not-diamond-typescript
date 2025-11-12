// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Notdiamond from 'notdiamond';

const client = new Notdiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metrics', () => {
  test('submitFeedback: only required params', async () => {
    const responsePromise = client.report.metrics.submitFeedback({
      feedback: { accuracy: 'bar' },
      provider: { model: 'gpt-4o', provider: 'openai' },
      session_id: '550e8400-e29b-41d4-a716-446655440000',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submitFeedback: required and optional params', async () => {
    const response = await client.report.metrics.submitFeedback({
      feedback: { accuracy: 'bar' },
      provider: {
        model: 'gpt-4o',
        provider: 'openai',
        context_length: 0,
        input_price: 0,
        is_custom: true,
        latency: 0,
        output_price: 0,
      },
      session_id: '550e8400-e29b-41d4-a716-446655440000',
    });
  });
});
