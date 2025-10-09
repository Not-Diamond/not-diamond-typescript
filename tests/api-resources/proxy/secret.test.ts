// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource secret', () => {
  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.proxy.secret.delete('provider', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.proxy.secret.delete('provider', {
      user_id: 'user_id',
      'x-token': 'x-token',
    });
  });

  // Prism tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.proxy.secret.upsert({
      name: 'name',
      provider: 'provider',
      secret: 'secret',
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
  test.skip('upsert: required and optional params', async () => {
    const response = await client.proxy.secret.upsert({
      name: 'name',
      provider: 'provider',
      secret: 'secret',
      user_id: 'user_id',
      'x-token': 'x-token',
    });
  });
});
