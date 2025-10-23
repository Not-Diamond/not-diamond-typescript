// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prompt', () => {
  // Prism tests are disabled
  test.skip('adapt: only required params', async () => {
    const responsePromise = client.prompt.adapt({
      fields: ['string'],
      origin_model: { model: 'model', provider: 'provider' },
      system_prompt: 'system_prompt',
      target_models: [{ model: 'model', provider: 'provider' }],
      template: 'template',
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
  test.skip('adapt: required and optional params', async () => {
    const response = await client.prompt.adapt({
      fields: ['string'],
      origin_model: {
        model: 'model',
        provider: 'provider',
        context_length: 0,
        input_price: 0,
        is_custom: true,
        latency: 0,
        output_price: 0,
      },
      system_prompt: 'system_prompt',
      target_models: [
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
      template: 'template',
      evaluation_config: 'evaluation_config',
      evaluation_metric: 'evaluation_metric',
      goldens: [{ fields: { foo: 'string' }, answer: 'answer' }],
      origin_model_evaluation_score: 0,
      test_goldens: [{ fields: { foo: 'string' }, answer: 'answer' }],
      train_goldens: [{ fields: { foo: 'string' }, answer: 'answer' }],
    });
  });

  // Prism tests are disabled
  test.skip('estimateAdaptLlmRequests: only required params', async () => {
    const responsePromise = client.prompt.estimateAdaptLlmRequests({
      target_models: [{ model: 'model', provider: 'provider' }],
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
  test.skip('estimateAdaptLlmRequests: required and optional params', async () => {
    const response = await client.prompt.estimateAdaptLlmRequests({
      target_models: [
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
      num_goldens: 1,
      num_test_goldens: 1,
      num_train_goldens: 1,
      origin_model: {
        model: 'model',
        provider: 'provider',
        context_length: 0,
        input_price: 0,
        is_custom: true,
        latency: 0,
        output_price: 0,
      },
    });
  });

  // Prism tests are disabled
  test.skip('getAdaptResults', async () => {
    const responsePromise = client.prompt.getAdaptResults('adaptation_run_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getAdaptRunResults: only required params', async () => {
    const responsePromise = client.prompt.getAdaptRunResults('adaptation_run_id', {
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
  test.skip('getAdaptRunResults: required and optional params', async () => {
    const response = await client.prompt.getAdaptRunResults('adaptation_run_id', {
      user_id: 'user_id',
      'x-token': 'x-token',
    });
  });

  // Prism tests are disabled
  test.skip('getAdaptRuns: only required params', async () => {
    const responsePromise = client.prompt.getAdaptRuns('user_id', { 'x-token': 'x-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getAdaptRuns: required and optional params', async () => {
    const response = await client.prompt.getAdaptRuns('user_id', { 'x-token': 'x-token' });
  });

  // Prism tests are disabled
  test.skip('getAdaptStatus', async () => {
    const responsePromise = client.prompt.getAdaptStatus('adaptation_run_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
