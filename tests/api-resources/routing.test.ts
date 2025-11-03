// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond, { toFile } from 'notdiamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routing', () => {
  // Prism tests are disabled
  test.skip('createSurveyResponse: only required params', async () => {
    const responsePromise = client.routing.createSurveyResponse({
      constraint_priorities: 'constraint_priorities',
      email: 'email',
      llm_providers: 'llm_providers',
      use_case_desc: 'use_case_desc',
      user_id: 'user_id',
      'x-token': 'x-token',
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
  test.skip('createSurveyResponse: required and optional params', async () => {
    const response = await client.routing.createSurveyResponse({
      constraint_priorities: 'constraint_priorities',
      email: 'email',
      llm_providers: 'llm_providers',
      use_case_desc: 'use_case_desc',
      user_id: 'user_id',
      'x-token': 'x-token',
      additional_preferences: 'additional_preferences',
      dataset_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      name: 'name',
      prompt_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      prompts: 'prompts',
    });
  });

  // Prism tests are disabled
  test.skip('selectModel: only required params', async () => {
    const responsePromise = client.routing.selectModel({
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

  // Prism tests are disabled
  test.skip('selectModel: required and optional params', async () => {
    const response = await client.routing.selectModel({
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

  // Prism tests are disabled
  test.skip('trainCustomRouter: only required params', async () => {
    const responsePromise = client.routing.trainCustomRouter({
      dataset_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      language: 'english',
      llm_providers:
        '[{"provider": "openai", "model": "gpt-4o"}, {"provider": "anthropic", "model": "claude-sonnet-4-5-20250929"}]',
      maximize: true,
      prompt_column: 'prompt',
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
  test.skip('trainCustomRouter: required and optional params', async () => {
    const response = await client.routing.trainCustomRouter({
      dataset_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      language: 'english',
      llm_providers:
        '[{"provider": "openai", "model": "gpt-4o"}, {"provider": "anthropic", "model": "claude-sonnet-4-5-20250929"}]',
      maximize: true,
      prompt_column: 'prompt',
      override: true,
      preference_id: 'preference_id',
    });
  });
});
