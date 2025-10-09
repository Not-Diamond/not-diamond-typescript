// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource report', () => {
  // Prism tests are disabled
  test.skip('reportRegenerated: only required params', async () => {
    const responsePromise = client.chat.report.reportRegenerated({
      provider: { model: 'model', provider: 'provider' },
      regenerated: true,
      session_id: 'session_id',
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
  test.skip('reportRegenerated: required and optional params', async () => {
    const response = await client.chat.report.reportRegenerated({
      provider: {
        model: 'model',
        provider: 'provider',
        context_length: 0,
        input_price: 0,
        is_custom: true,
        latency: 0,
        output_price: 0,
      },
      regenerated: true,
      session_id: 'session_id',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('reportThumbs: only required params', async () => {
    const responsePromise = client.chat.report.reportThumbs({
      provider: { model: 'model', provider: 'provider' },
      session_id: 'session_id',
      thumbs: 0,
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
  test.skip('reportThumbs: required and optional params', async () => {
    const response = await client.chat.report.reportThumbs({
      provider: {
        model: 'model',
        provider: 'provider',
        context_length: 0,
        input_price: 0,
        is_custom: true,
        latency: 0,
        output_price: 0,
      },
      session_id: 'session_id',
      thumbs: 0,
      user_id: 'user_id',
    });
  });
});
