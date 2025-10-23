// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource llmUsage', () => {
  // Prism tests are disabled
  test.skip('retrieveDaily: only required params', async () => {
    const responsePromise = client.admin.llmUsage.retrieveDaily({
      end_date: 'end_date',
      start_date: 'start_date',
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
  test.skip('retrieveDaily: required and optional params', async () => {
    const response = await client.admin.llmUsage.retrieveDaily({
      end_date: 'end_date',
      start_date: 'start_date',
      user_id: 'user_id',
      'x-token': 'x-token',
      metric: 'metric',
      subscription_date: 'subscription_date',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveSummary: only required params', async () => {
    const responsePromise = client.admin.llmUsage.retrieveSummary({
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
  test.skip('retrieveSummary: required and optional params', async () => {
    const response = await client.admin.llmUsage.retrieveSummary({
      user_id: 'user_id',
      'x-token': 'x-token',
      end_time: 0,
      start_time: 0,
    });
  });
});
