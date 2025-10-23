// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class LlmUsage extends APIResource {
  /**
   * Get LLM usage records for the authenticated user
   */
  retrieve(
    query: LlmUsageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LlmUsageRetrieveResponse> {
    return this._client.get('/v1/llm-usage', { query, ...options });
  }

  /**
   * Get daily LLM usage data aggregated by cost or calls for PA usage dashboard
   */
  retrieveDaily(
    query: LlmUsageRetrieveDailyParams,
    options?: RequestOptions,
  ): APIPromise<LlmUsageRetrieveDailyResponse> {
    return this._client.get('/v1/llm-usage/daily', { query, ...options });
  }

  /**
   * Get monthly LLM usage aggregated data for the last N months
   *
   * Returns usage data for the trailing N complete or partial months ending with the
   * current month. For example, if called in November 2024 with months=6, returns
   * data for June-November 2024.
   */
  retrieveMonthly(
    query: LlmUsageRetrieveMonthlyParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LlmUsageRetrieveMonthlyResponse> {
    return this._client.get('/v1/llm-usage/monthly', { query, ...options });
  }

  /**
   * Get a summary of LLM usage costs for the authenticated user
   */
  retrieveSummary(
    query: LlmUsageRetrieveSummaryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LlmUsageRetrieveSummaryResponse> {
    return this._client.get('/v1/llm-usage/summary', { query, ...options });
  }
}

export type LlmUsageRetrieveResponse = Array<LlmUsageRetrieveResponse.LlmUsageRetrieveResponseItem>;

export namespace LlmUsageRetrieveResponse {
  export interface LlmUsageRetrieveResponseItem {
    id: string;

    adaptation_run_id: string;

    input_cost: number;

    input_tokens: number;

    model: string;

    organization_id: string;

    output_cost: number;

    output_tokens: number;

    provider: string;

    task_type: string;

    timestamp: number;

    total_cost: number;

    user_id: string;
  }
}

export type LlmUsageRetrieveDailyResponse = Array<number>;

export type LlmUsageRetrieveMonthlyResponse = Array<{ [key: string]: unknown }>;

export interface LlmUsageRetrieveSummaryResponse {
  by_model: { [key: string]: unknown };

  by_provider: { [key: string]: unknown };

  total_calls: number;

  total_cost: number;

  total_input_tokens: number;

  total_output_tokens: number;
}

export interface LlmUsageRetrieveParams {
  /**
   * End timestamp (Unix time)
   */
  end_time?: number | null;

  /**
   * Maximum number of records to return
   */
  limit?: number;

  /**
   * Start timestamp (Unix time)
   */
  start_time?: number | null;
}

export interface LlmUsageRetrieveDailyParams {
  /**
   * End date in YYYY-MM-DD format
   */
  end_date: string;

  /**
   * Start date in YYYY-MM-DD format
   */
  start_date: string;

  /**
   * Metric to aggregate: 'cost' or 'calls'
   */
  metric?: string;
}

export interface LlmUsageRetrieveMonthlyParams {
  /**
   * Number of months to retrieve (max 12)
   */
  months?: number;
}

export interface LlmUsageRetrieveSummaryParams {
  /**
   * End timestamp (Unix time)
   */
  end_time?: number | null;

  /**
   * Start timestamp (Unix time)
   */
  start_time?: number | null;
}

export declare namespace LlmUsage {
  export {
    type LlmUsageRetrieveResponse as LlmUsageRetrieveResponse,
    type LlmUsageRetrieveDailyResponse as LlmUsageRetrieveDailyResponse,
    type LlmUsageRetrieveMonthlyResponse as LlmUsageRetrieveMonthlyResponse,
    type LlmUsageRetrieveSummaryResponse as LlmUsageRetrieveSummaryResponse,
    type LlmUsageRetrieveParams as LlmUsageRetrieveParams,
    type LlmUsageRetrieveDailyParams as LlmUsageRetrieveDailyParams,
    type LlmUsageRetrieveMonthlyParams as LlmUsageRetrieveMonthlyParams,
    type LlmUsageRetrieveSummaryParams as LlmUsageRetrieveSummaryParams,
  };
}
