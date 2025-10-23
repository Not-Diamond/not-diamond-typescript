// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Report extends APIResource {
  /**
   * Frontend Report Regenerated
   */
  regenerateReport(body: ReportRegenerateReportParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/chat/report/regenerated', { body, ...options });
  }

  /**
   * Report Thumbs
   */
  reportThumbs(body: ReportReportThumbsParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/chat/report/thumbsUpDown', { body, ...options });
  }
}

export type ReportRegenerateReportResponse = unknown;

export type ReportReportThumbsResponse = unknown;

export interface ReportRegenerateReportParams {
  provider: ReportRegenerateReportParams.Provider;

  regenerated: boolean;

  session_id: string;

  user_id?: string | null;
}

export namespace ReportRegenerateReportParams {
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

export interface ReportReportThumbsParams {
  provider: ReportReportThumbsParams.Provider;

  session_id: string;

  thumbs: number;

  user_id?: string | null;
}

export namespace ReportReportThumbsParams {
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
    type ReportRegenerateReportResponse as ReportRegenerateReportResponse,
    type ReportReportThumbsResponse as ReportReportThumbsResponse,
    type ReportRegenerateReportParams as ReportRegenerateReportParams,
    type ReportReportThumbsParams as ReportReportThumbsParams,
  };
}
