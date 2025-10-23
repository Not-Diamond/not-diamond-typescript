// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource preferences', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.preferences.create({ user_id: 'user_id', 'x-token': 'x-token' });
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
    const response = await client.preferences.create({
      user_id: 'user_id',
      'x-token': 'x-token',
      name: 'name',
      samples: [{ foo: 'bar' }],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.preferences.retrieve('preference_id', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.preferences.retrieve('preference_id', {
      user_id: 'user_id',
      'x-token': 'x-token',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.preferences.update({
      preference_id: 'preference_id',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.preferences.update({
      preference_id: 'preference_id',
      user_id: 'user_id',
      'x-token': 'x-token',
      name: 'name',
      preference_weights: { foo: 'bar' },
      samples: [{ foo: 'bar' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.preferences.delete({
      preference_id: 'preference_id',
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
    const response = await client.preferences.delete({
      preference_id: 'preference_id',
      user_id: 'user_id',
      'x-token': 'x-token',
    });
  });

  // Prism tests are disabled
  test.skip('createUserPreference', async () => {
    const responsePromise = client.preferences.createUserPreference({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteUserPreference', async () => {
    const responsePromise = client.preferences.deleteUserPreference('preference_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveUserPreference: only required params', async () => {
    const responsePromise = client.preferences.retrieveUserPreference('user_id', { 'x-token': 'x-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveUserPreference: required and optional params', async () => {
    const response = await client.preferences.retrieveUserPreference('user_id', { 'x-token': 'x-token' });
  });

  // Prism tests are disabled
  test.skip('updateUserPreference: only required params', async () => {
    const responsePromise = client.preferences.updateUserPreference({ preference_id: 'preference_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateUserPreference: required and optional params', async () => {
    const response = await client.preferences.updateUserPreference({
      preference_id: 'preference_id',
      name: 'name',
    });
  });
});
