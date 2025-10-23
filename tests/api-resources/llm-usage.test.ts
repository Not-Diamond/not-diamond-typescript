// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource llmUsage', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.llmUsage.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.llmUsage.retrieve(
        { end_time: 0, limit: 0, start_time: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NotDiamond.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveDaily: only required params', async () => {
    const responsePromise = client.llmUsage.retrieveDaily({ end_date: 'end_date', start_date: 'start_date' });
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
    const response = await client.llmUsage.retrieveDaily({
      end_date: 'end_date',
      start_date: 'start_date',
      metric: 'metric',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveMonthly', async () => {
    const responsePromise = client.llmUsage.retrieveMonthly();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveMonthly: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.llmUsage.retrieveMonthly({ months: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NotDiamond.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveSummary', async () => {
    const responsePromise = client.llmUsage.retrieveSummary();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSummary: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.llmUsage.retrieveSummary({ end_time: 0, start_time: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NotDiamond.NotFoundError);
  });
});
