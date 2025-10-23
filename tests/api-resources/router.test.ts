// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource router', () => {
  // Prism tests are disabled
  test.skip('selectModel: only required params', async () => {
    const responsePromise = client.router.selectModel({
      llm_providers: [{ model: 'model', provider: 'provider' }],
      messages: [{ foo: 'string' }],
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
  test.skip('selectModel: required and optional params', async () => {
    const response = await client.router.selectModel({
      llm_providers: [
        {
          model: 'model',
          provider: 'provider',
          context_length: 0,
          input_price: 0,
          is_custom: true,
          latency: 0,
          output_price: 0,
        },
      ],
      messages: [{ foo: 'string' }],
      type: 'type',
      hash_content: true,
      max_model_depth: 0,
      metric: 'metric',
      preference_id: 'preference_id',
      previous_session: 'previous_session',
      tools: [{ foo: 'bar' }],
      tradeoff: 'tradeoff',
    });
  });
});
