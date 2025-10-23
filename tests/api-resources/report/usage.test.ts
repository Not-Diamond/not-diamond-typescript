// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usage', () => {
  // Prism tests are disabled
  test.skip('reportLlmCosts: only required params', async () => {
    const responsePromise = client.report.usage.reportLlmCosts({ 'x-token': 'x-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reportLlmCosts: required and optional params', async () => {
    const response = await client.report.usage.reportLlmCosts({ 'x-token': 'x-token' });
  });

  // Prism tests are disabled
  test.skip('reportUsage: only required params', async () => {
    const responsePromise = client.report.usage.reportUsage({ 'x-token': 'x-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reportUsage: required and optional params', async () => {
    const response = await client.report.usage.reportUsage({ 'x-token': 'x-token' });
  });

  // Prism tests are disabled
  test.skip('testLlmReporting: only required params', async () => {
    const responsePromise = client.report.usage.testLlmReporting({ 'x-token': 'x-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('testLlmReporting: required and optional params', async () => {
    const response = await client.report.usage.testLlmReporting({ 'x-token': 'x-token' });
  });
});
