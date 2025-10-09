// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluations', () => {
  // Prism tests are disabled
  test.skip('updateModelState: only required params', async () => {
    const responsePromise = client.evaluations.updateModelState({
      body: { foo: 'bar' },
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
  test.skip('updateModelState: required and optional params', async () => {
    const response = await client.evaluations.updateModelState({
      body: { foo: 'bar' },
      'x-token': 'x-token',
    });
  });
});
