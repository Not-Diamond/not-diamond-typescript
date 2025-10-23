// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class LlmUsage extends APIResource {
  /**
   * Admin endpoint to get daily LLM usage data for dashboard
   *
   * If subscription_date is provided, filters out any usage before that date. This
   * is used to hide pre-upgrade LLM costs when a free tier user upgrades to Starter.
   */
  retrieveDaily(
    params: LlmUsageRetrieveDailyParams,
    options?: RequestOptions,
  ): APIPromise<LlmUsageRetrieveDailyResponse> {
    const { 'x-token': xToken, ...query } = params;
    return this._client.get('/v1/admin/llm-usage/daily', {
      query,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Admin endpoint to get LLM usage summary for dashboard
   */
  retrieveSummary(
    params: LlmUsageRetrieveSummaryParams,
    options?: RequestOptions,
  ): APIPromise<LlmUsageRetrieveSummaryResponse> {
    const { 'x-token': xToken, ...query } = params;
    return this._client.get('/v1/admin/llm-usage/summary', {
      query,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }
}

export type LlmUsageRetrieveDailyResponse = Array<number>;

export interface LlmUsageRetrieveSummaryResponse {
  by_model: { [key: string]: unknown };

  by_provider: { [key: string]: unknown };

  total_calls: number;

  total_cost: number;

  total_input_tokens: number;

  total_output_tokens: number;
}

export interface LlmUsageRetrieveDailyParams {
  /**
   * Query param: End date in YYYY-MM-DD format
   */
  end_date: string;

  /**
   * Query param: Start date in YYYY-MM-DD format
   */
  start_date: string;

  /**
   * Query param: User ID to get usage for
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;

  /**
   * Query param: Metric to aggregate: 'cost' or 'calls'
   */
  metric?: string;

  /**
   * Query param: Subscription date (ISO format) to filter out pre-subscription usage
   */
  subscription_date?: string | null;
}

export interface LlmUsageRetrieveSummaryParams {
  /**
   * Query param: User ID to get usage for
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;

  /**
   * Query param: End timestamp (Unix time)
   */
  end_time?: number | null;

  /**
   * Query param: Start timestamp (Unix time)
   */
  start_time?: number | null;
}

export declare namespace LlmUsage {
  export {
    type LlmUsageRetrieveDailyResponse as LlmUsageRetrieveDailyResponse,
    type LlmUsageRetrieveSummaryResponse as LlmUsageRetrieveSummaryResponse,
    type LlmUsageRetrieveDailyParams as LlmUsageRetrieveDailyParams,
    type LlmUsageRetrieveSummaryParams as LlmUsageRetrieveSummaryParams,
  };
}
