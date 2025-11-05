// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource modelRouter', () => {
  // Prism tests are disabled
  test.skip('openHandsSelect: only required params', async () => {
    const responsePromise = client.modelRouter.openHandsSelect({ body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('openHandsSelect: required and optional params', async () => {
    const response = await client.modelRouter.openHandsSelect({ body: {} });
  });

  // Prism tests are disabled
  test.skip('selectModel: only required params', async () => {
    const responsePromise = client.modelRouter.selectModel({
      body: {
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Explain quantum computing in simple terms' },
        ],
        llm_providers: [
          { provider: 'openai', model: 'gpt-4o' },
          { provider: 'anthropic', model: 'claude-sonnet-4-5-20250929' },
          { provider: 'google', model: 'gemini-1.5-pro' },
        ],
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

  // Prism tests are disabled
  test.skip('selectModel: required and optional params', async () => {
    const response = await client.modelRouter.selectModel({
      body: {
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Explain quantum computing in simple terms' },
        ],
        llm_providers: [
          { provider: 'openai', model: 'gpt-4o' },
          { provider: 'anthropic', model: 'claude-sonnet-4-5-20250929' },
          { provider: 'google', model: 'gemini-1.5-pro' },
        ],
      },
      type: 'type',
    });
  });
});
