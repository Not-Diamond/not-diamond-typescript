// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NotDiamond from 'not-diamond';

const client = new NotDiamond({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metrics', () => {
  // Prism tests are disabled
  test.skip('reportFeedback: only required params', async () => {
    const responsePromise = client.report.metrics.reportFeedback({
      feedback: { foo: 'bar' },
      provider: { model: 'model', provider: 'provider' },
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
  test.skip('reportFeedback: required and optional params', async () => {
    const response = await client.report.metrics.reportFeedback({
      feedback: { foo: 'bar' },
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
    });
  });

  // Prism tests are disabled
  test.skip('reportFrontendArenaChoice: only required params', async () => {
    const responsePromise = client.report.metrics.reportFrontendArenaChoice({
      preferred_provider: { model: 'model', provider: 'provider' },
      rejected_provider: { model: 'model', provider: 'provider' },
      session_id: 'session_id',
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
  test.skip('reportFrontendArenaChoice: required and optional params', async () => {
    const response = await client.report.metrics.reportFrontendArenaChoice({
      preferred_provider: {
        model: 'model',
        provider: 'provider',
        context_length: 0,
        input_price: 0,
        is_custom: true,
        latency: 0,
        output_price: 0,
      },
      rejected_provider: {
        model: 'model',
        provider: 'provider',
        context_length: 0,
        input_price: 0,
        is_custom: true,
        latency: 0,
        output_price: 0,
      },
      session_id: 'session_id',
      'x-token': 'x-token',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('reportFrontendRegenerated: only required params', async () => {
    const responsePromise = client.report.metrics.reportFrontendRegenerated({
      provider: { model: 'model', provider: 'provider' },
      regenerated: true,
      session_id: 'session_id',
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
  test.skip('reportFrontendRegenerated: required and optional params', async () => {
    const response = await client.report.metrics.reportFrontendRegenerated({
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
      'x-token': 'x-token',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('reportFrontendThumbs: only required params', async () => {
    const responsePromise = client.report.metrics.reportFrontendThumbs({
      provider: { model: 'model', provider: 'provider' },
      session_id: 'session_id',
      thumbs: 0,
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
  test.skip('reportFrontendThumbs: required and optional params', async () => {
    const response = await client.report.metrics.reportFrontendThumbs({
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
      'x-token': 'x-token',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('reportLatency: only required params', async () => {
    const responsePromise = client.report.metrics.reportLatency({
      feedback: { foo: 'bar' },
      provider: { model: 'model', provider: 'provider' },
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
  test.skip('reportLatency: required and optional params', async () => {
    const response = await client.report.metrics.reportLatency({
      feedback: { foo: 'bar' },
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
    });
  });
});
