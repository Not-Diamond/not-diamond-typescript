// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond, { toFile } from 'notdiamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pzn', () => {
  test('trainCustomRouter: only required params', async () => {
    const responsePromise = client.pzn.trainCustomRouter({
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

  test('trainCustomRouter: required and optional params', async () => {
    const response = await client.pzn.trainCustomRouter({
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
