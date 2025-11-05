// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'notdiamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource report', () => {
  test('submitFeedback: only required params', async () => {
    const responsePromise = client.report.submitFeedback({
      body: {
        session_id: '550e8400-e29b-41d4-a716-446655440000',
        provider: { provider: 'openai', model: 'gpt-4o' },
        feedback: { accuracy: 1 },
      },
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
    const response = await client.report.submitFeedback({
      body: {
        session_id: '550e8400-e29b-41d4-a716-446655440000',
        provider: { provider: 'openai', model: 'gpt-4o' },
        feedback: { accuracy: 1 },
      },
    });
  });
});
