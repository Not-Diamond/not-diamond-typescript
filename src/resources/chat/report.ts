// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MetricsAPI from '../report/metrics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Report extends APIResource {
  /**
   * Frontend Report Regenerated
   */
  reportRegenerated(body: ReportReportRegeneratedParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/chat/report/regenerated', { body, ...options });
  }

  /**
   * Report Thumbs
   */
  reportThumbs(body: ReportReportThumbsParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/chat/report/thumbsUpDown', { body, ...options });
  }
}

export type ReportReportRegeneratedResponse = unknown;

export type ReportReportThumbsResponse = unknown;

export interface ReportReportRegeneratedParams {
  provider: MetricsAPI.RequestProvider;

  regenerated: boolean;

  session_id: string;

  user_id?: string | null;
}

export interface ReportReportThumbsParams {
  provider: MetricsAPI.RequestProvider;

  session_id: string;

  thumbs: number;

  user_id?: string | null;
}

export declare namespace Report {
  export {
    type ReportReportRegeneratedResponse as ReportReportRegeneratedResponse,
    type ReportReportThumbsResponse as ReportReportThumbsResponse,
    type ReportReportRegeneratedParams as ReportReportRegeneratedParams,
    type ReportReportThumbsParams as ReportReportThumbsParams,
  };
}
