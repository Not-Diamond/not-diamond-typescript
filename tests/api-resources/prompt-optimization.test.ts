// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'notdiamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource promptOptimization', () => {
  test('getCost', async () => {
    const responsePromise = client.promptOptimization.getCost('optimization_run_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getOptimizationResults', async () => {
    const responsePromise = client.promptOptimization.getOptimizationResults('optimization_run_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getOptimziationStatus', async () => {
    const responsePromise = client.promptOptimization.getOptimziationStatus('optimization_run_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('optimize: only required params', async () => {
    const responsePromise = client.promptOptimization.optimize({
      fields: ['question'],
      system_prompt: 'You are a mathematical assistant that counts digits accurately.',
      target_models: [
        { model: 'claude-sonnet-4-5-20250929', provider: 'anthropic' },
        { model: 'gemini-2.5-flash', provider: 'google' },
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

  test('optimize: required and optional params', async () => {
    const response = await client.promptOptimization.optimize({
      fields: ['question'],
      system_prompt: 'You are a mathematical assistant that counts digits accurately.',
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
          model: 'gemini-2.5-flash',
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
      evaluation_metric: 'LLMaaJ:Sem_Sim_1',
      goldens: [
        {
          fields: { context: 'Basic arithmetic', question: 'What is 2+2?' },
          answer: '4',
        },
      ],
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
      prototype_mode: true,
      test_goldens: [
        {
          fields: { question: 'How many digits are in (9876543210*123456)?' },
          answer: '15',
        },
        {
          fields: { question: 'How many odd digits are in (135*579*246)?' },
          answer: '8',
        },
        {
          fields: { question: "How often does the number '42' appear in the digits of (123456789*42)?" },
          answer: '1',
        },
        {
          fields: { question: 'How many even digits are in (1111*2222*3333)?' },
          answer: '10',
        },
        {
          fields: { question: 'How many 9s are in (999999*888888)?' },
          answer: '11',
        },
      ],
      train_goldens: [
        {
          fields: { question: 'How many digits are in (23874045494*2789392485)?' },
          answer: '20',
        },
        {
          fields: { question: 'How many odd digits are in (999*777*555*333*111)?' },
          answer: '10',
        },
        {
          fields: { question: "How often does the number '17' appear in the digits of (287558*17)?" },
          answer: '0',
        },
        {
          fields: { question: 'How many even digits are in (222*444*666*888)?' },
          answer: '16',
        },
        {
          fields: { question: 'How many 0s are in (1234567890*1357908642)?' },
          answer: '2',
        },
      ],
    });
  });
});
