// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond, { toFile } from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pzn', () => {
  // Prism tests are disabled
  test.skip('createSurveyResponse: only required params', async () => {
    const responsePromise = client.pzn.createSurveyResponse({
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
    const response = await client.pzn.createSurveyResponse({
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
  test.skip('trainCustomRouter: only required params', async () => {
    const responsePromise = client.pzn.trainCustomRouter({
      dataset_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      language: 'language',
      llm_providers: 'llm_providers',
      maximize: true,
      prompt_column: 'prompt_column',
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
    const response = await client.pzn.trainCustomRouter({
      dataset_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      language: 'language',
      llm_providers: 'llm_providers',
      maximize: true,
      prompt_column: 'prompt_column',
      override: true,
      preference_id: 'preference_id',
    });
  });
});
