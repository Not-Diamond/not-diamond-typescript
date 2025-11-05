// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'notdiamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource modelRouter', () => {
  test('openHandsSelect: only required params', async () => {
    const responsePromise = client.modelRouter.openHandsSelect({
      llm_providers: [
        { model: 'gpt-4o', provider: 'openai' },
        { model: 'claude-sonnet-4-5-20250929', provider: 'anthropic' },
        { model: 'gemini-1.5-pro', provider: 'google' },
      ],
      messages: [
        { content: 'You are a helpful assistant.', role: 'system' },
        { content: 'Explain quantum computing', role: 'user' },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('openHandsSelect: required and optional params', async () => {
    const response = await client.modelRouter.openHandsSelect({
      llm_providers: [
        {
          model: 'gpt-4o',
          provider: 'openai',
          context_length: 0,
          input_price: 0,
          is_custom: true,
          latency: 0,
          output_price: 0,
        },
        {
          model: 'claude-sonnet-4-5-20250929',
          provider: 'anthropic',
          context_length: 0,
          input_price: 0,
          is_custom: true,
          latency: 0,
          output_price: 0,
        },
        {
          model: 'gemini-1.5-pro',
          provider: 'google',
          context_length: 0,
          input_price: 0,
          is_custom: true,
          latency: 0,
          output_price: 0,
        },
      ],
      messages: [
        { content: 'You are a helpful assistant.', role: 'system' },
        { content: 'Explain quantum computing', role: 'user' },
      ],
      hash_content: true,
      max_model_depth: 0,
      metric: 'metric',
      preference_id: 'preference_id',
      previous_session: 'previous_session',
      tools: [{ foo: 'bar' }],
      tradeoff: 'cost',
    });
  });

  test('selectModel: only required params', async () => {
    const responsePromise = client.modelRouter.selectModel({
      llm_providers: [
        { model: 'gpt-4o', provider: 'openai' },
        { model: 'claude-sonnet-4-5-20250929', provider: 'anthropic' },
        { model: 'gemini-1.5-pro', provider: 'google' },
      ],
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Explain quantum computing in simple terms' },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('selectModel: required and optional params', async () => {
    const response = await client.modelRouter.selectModel({
      llm_providers: [
        {
          model: 'gpt-4o',
          provider: 'openai',
          context_length: 0,
          input_price: 0,
          is_custom: true,
          latency: 0,
          output_price: 0,
        },
        {
          model: 'claude-sonnet-4-5-20250929',
          provider: 'anthropic',
          context_length: 0,
          input_price: 0,
          is_custom: true,
          latency: 0,
          output_price: 0,
        },
        {
          model: 'gemini-1.5-pro',
          provider: 'google',
          context_length: 0,
          input_price: 0,
          is_custom: true,
          latency: 0,
          output_price: 0,
        },
      ],
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Explain quantum computing in simple terms' },
      ],
      type: 'type',
      hash_content: true,
      max_model_depth: 0,
      metric: 'metric',
      preference_id: 'preference_id',
      previous_session: 'previous_session',
      tools: [{ foo: 'bar' }],
      tradeoff: 'cost',
    });
  });
});
