// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Metrics extends APIResource {
  /**
   * Report Feedback
   */
  reportFeedback(body: MetricReportFeedbackParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/report/metrics/feedback', { body, ...options });
  }

  /**
   * Frontend Arena Choice
   */
  reportFrontendArenaChoice(
    params: MetricReportFrontendArenaChoiceParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post('/v2/report/metrics/frontendArenaChoice', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Frontend Report Regenerated
   */
  reportFrontendRegenerated(
    params: MetricReportFrontendRegeneratedParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post('/v2/report/metrics/frontendRegenerated', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Frontend Report Thumbs
   */
  reportFrontendThumbs(
    params: MetricReportFrontendThumbsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post('/v2/report/metrics/frontendThumbsUpDown', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Report Latency
   */
  reportLatency(body: MetricReportLatencyParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/report/metrics/latency', { body, ...options });
  }
}

export type MetricReportFeedbackResponse = unknown;

export type MetricReportFrontendArenaChoiceResponse = unknown;

export type MetricReportFrontendRegeneratedResponse = unknown;

export type MetricReportFrontendThumbsResponse = unknown;

export type MetricReportLatencyResponse = unknown;

export interface MetricReportFeedbackParams {
  feedback: { [key: string]: unknown };

  provider: MetricReportFeedbackParams.Provider;

  session_id: string;
}

export namespace MetricReportFeedbackParams {
  export interface Provider {
    model: string;

    provider: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }
}

export interface MetricReportFrontendArenaChoiceParams {
  /**
   * Body param:
   */
  preferred_provider: MetricReportFrontendArenaChoiceParams.PreferredProvider;

  /**
   * Body param:
   */
  rejected_provider: MetricReportFrontendArenaChoiceParams.RejectedProvider;

  /**
   * Body param:
   */
  session_id: string;

  /**
   * Header param:
   */
  'x-token': string;

  /**
   * Body param:
   */
  user_id?: string | null;
}

export namespace MetricReportFrontendArenaChoiceParams {
  export interface PreferredProvider {
    model: string;

    provider: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }

  export interface RejectedProvider {
    model: string;

    provider: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }
}

export interface MetricReportFrontendRegeneratedParams {
  /**
   * Body param:
   */
  provider: MetricReportFrontendRegeneratedParams.Provider;

  /**
   * Body param:
   */
  regenerated: boolean;

  /**
   * Body param:
   */
  session_id: string;

  /**
   * Header param:
   */
  'x-token': string;

  /**
   * Body param:
   */
  user_id?: string | null;
}

export namespace MetricReportFrontendRegeneratedParams {
  export interface Provider {
    model: string;

    provider: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }
}

export interface MetricReportFrontendThumbsParams {
  /**
   * Body param:
   */
  provider: MetricReportFrontendThumbsParams.Provider;

  /**
   * Body param:
   */
  session_id: string;

  /**
   * Body param:
   */
  thumbs: number;

  /**
   * Header param:
   */
  'x-token': string;

  /**
   * Body param:
   */
  user_id?: string | null;
}

export namespace MetricReportFrontendThumbsParams {
  export interface Provider {
    model: string;

    provider: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }
}

export interface MetricReportLatencyParams {
  feedback: { [key: string]: unknown };

  provider: MetricReportLatencyParams.Provider;

  session_id: string;
}

export namespace MetricReportLatencyParams {
  export interface Provider {
    model: string;

    provider: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }
}

export declare namespace Metrics {
  export {
    type MetricReportFeedbackResponse as MetricReportFeedbackResponse,
    type MetricReportFrontendArenaChoiceResponse as MetricReportFrontendArenaChoiceResponse,
    type MetricReportFrontendRegeneratedResponse as MetricReportFrontendRegeneratedResponse,
    type MetricReportFrontendThumbsResponse as MetricReportFrontendThumbsResponse,
    type MetricReportLatencyResponse as MetricReportLatencyResponse,
    type MetricReportFeedbackParams as MetricReportFeedbackParams,
    type MetricReportFrontendArenaChoiceParams as MetricReportFrontendArenaChoiceParams,
    type MetricReportFrontendRegeneratedParams as MetricReportFrontendRegeneratedParams,
    type MetricReportFrontendThumbsParams as MetricReportFrontendThumbsParams,
    type MetricReportLatencyParams as MetricReportLatencyParams,
  };
}
