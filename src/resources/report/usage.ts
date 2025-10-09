// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Usage extends APIResource {
  /**
   * Report LLM costs to Stripe for billing (actual dollar amounts, not counts)
   */
  reportLlmCosts(params: UsageReportLlmCostsParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'x-token': xToken } = params;
    return this._client.post('/v2/report/usage/reportLLMCosts', {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Report Usage To Stripe
   */
  reportUsage(params: UsageReportUsageParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'x-token': xToken } = params;
    return this._client.post('/v2/report/usage/reportUsage', {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Test endpoint to check LLM cost reporting status
   */
  testLlmReporting(params: UsageTestLlmReportingParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'x-token': xToken } = params;
    return this._client.get('/v2/report/usage/testLLMReporting', {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }
}

export type UsageReportLlmCostsResponse = unknown;

export type UsageReportUsageResponse = unknown;

export type UsageTestLlmReportingResponse = unknown;

export interface UsageReportLlmCostsParams {
  'x-token': string;
}

export interface UsageReportUsageParams {
  'x-token': string;
}

export interface UsageTestLlmReportingParams {
  'x-token': string;
}

export declare namespace Usage {
  export {
    type UsageReportLlmCostsResponse as UsageReportLlmCostsResponse,
    type UsageReportUsageResponse as UsageReportUsageResponse,
    type UsageTestLlmReportingResponse as UsageTestLlmReportingResponse,
    type UsageReportLlmCostsParams as UsageReportLlmCostsParams,
    type UsageReportUsageParams as UsageReportUsageParams,
    type UsageTestLlmReportingParams as UsageTestLlmReportingParams,
  };
}
