// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tt', () => {
  // Prism tests are disabled
  test.skip('translate: only required params', async () => {
    const responsePromise = client.tt.translate({
      llm_providers: [{ model: 'model', provider: 'provider' }],
      messages: [{ foo: 'string' }],
      source_language: 'source_language',
      target_language: 'target_language',
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
  test.skip('translate: required and optional params', async () => {
    const response = await client.tt.translate({
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
      source_language: 'source_language',
      target_language: 'target_language',
    });
  });
});
