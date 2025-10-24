// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource report', () => {
  // Prism tests are disabled
  test.skip('evaluateHallucination: only required params', async () => {
    const responsePromise = client.client.report.evaluateHallucination({
      context: 'context',
      prompt: 'prompt',
      provider: { model: 'gpt-4o', provider: 'openai' },
      response: 'response',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('evaluateHallucination: required and optional params', async () => {
    const response = await client.client.report.evaluateHallucination({
      context: 'context',
      prompt: 'prompt',
      provider: {
        model: 'gpt-4o',
        provider: 'openai',
        context_length: 0,
        input_price: 0,
        is_custom: true,
        latency: 0,
        output_price: 0,
      },
      response: 'response',
      cost: 0,
      latency: 0,
    });
  });
});
