// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Report extends APIResource {
  /**
   * Report Feedback
   */
  feedback(body: ReportFeedbackParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/report/metrics/feedback', { body, ...options });
  }

  /**
   * Report Latency
   */
  latency(body: ReportLatencyParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/report/metrics/latency', { body, ...options });
  }
}

export type ReportFeedbackResponse = unknown;

export type ReportLatencyResponse = unknown;

export interface ReportFeedbackParams {
  feedback: { [key: string]: unknown };

  provider: ReportFeedbackParams.Provider;

  session_id: string;
}

export namespace ReportFeedbackParams {
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

export interface ReportLatencyParams {
  feedback: { [key: string]: unknown };

  provider: ReportLatencyParams.Provider;

  session_id: string;
}

export namespace ReportLatencyParams {
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

export declare namespace Report {
  export {
    type ReportFeedbackResponse as ReportFeedbackResponse,
    type ReportLatencyResponse as ReportLatencyResponse,
    type ReportFeedbackParams as ReportFeedbackParams,
    type ReportLatencyParams as ReportLatencyParams,
  };
}
