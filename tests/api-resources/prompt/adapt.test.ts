// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource adapt', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.prompt.adapt.create({
      fields: ['question'],
      system_prompt: 'You are a helpful assistant that answers questions accurately.',
      target_models: [
        { model: 'claude-sonnet-4-5-20250929', provider: 'anthropic' },
        { model: 'gemini-1.5-pro', provider: 'google' },
      ],
      template: 'Question: {question}\nAnswer:',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.prompt.adapt.create({
      fields: ['question'],
      system_prompt: 'You are a helpful assistant that answers questions accurately.',
      target_models: [
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
      template: 'Question: {question}\nAnswer:',
      evaluation_config: 'evaluation_config',
      evaluation_metric: 'LLMaaJ:Sem_Sim_3',
      goldens: [{ fields: { context: 'Basic arithmetic', question: 'What is 2+2?' }, answer: '4' }],
      origin_model: {
        model: 'gpt-4o',
        provider: 'openai',
        context_length: 0,
        input_price: 0,
        is_custom: true,
        latency: 0,
        output_price: 0,
      },
      origin_model_evaluation_score: 0,
      test_goldens: [
        { fields: { question: 'What is 3*3?' }, answer: '9' },
        { fields: { question: 'What is the largest ocean?' }, answer: 'Pacific Ocean' },
      ],
      train_goldens: [
        { fields: { question: 'What is 2+2?' }, answer: '4' },
        { fields: { question: 'What is the capital of France?' }, answer: 'Paris' },
        { fields: { question: 'Who wrote Romeo and Juliet?' }, answer: 'William Shakespeare' },
        { fields: { question: 'What is H2O?' }, answer: 'Water' },
        { fields: { question: 'How many continents are there?' }, answer: '7' },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('getCosts', async () => {
    const responsePromise = client.prompt.adapt.getCosts('adaptation_run_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
