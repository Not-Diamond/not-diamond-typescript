// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MetricsAPI from './metrics';
import {
  ArenaFeedback,
  FeedbackReport,
  MetricReportFeedbackParams,
  MetricReportFeedbackResponse,
  MetricReportFrontendArenaChoiceParams,
  MetricReportFrontendArenaChoiceResponse,
  MetricReportFrontendRegeneratedParams,
  MetricReportFrontendRegeneratedResponse,
  MetricReportFrontendThumbsParams,
  MetricReportFrontendThumbsResponse,
  MetricReportLatencyParams,
  MetricReportLatencyResponse,
  Metrics,
  RegenerationFeedback,
  RequestProvider,
  ThumbsUpDownFeedback,
} from './metrics';
import * as UsageAPI from './usage';
import {
  Usage,
  UsageReportLlmCostsParams,
  UsageReportLlmCostsResponse,
  UsageReportUsageParams,
  UsageReportUsageResponse,
  UsageTestLlmReportingParams,
  UsageTestLlmReportingResponse,
} from './usage';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Report extends APIResource {
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);

  /**
   * Evaluate Hallucination
   */
  evaluateHallucination(
    body: ReportEvaluateHallucinationParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post('/v2/report/hallucination', { body, ...options });
  }
}

export type ReportEvaluateHallucinationResponse = unknown;

export interface ReportEvaluateHallucinationParams {
  context: string;

  prompt: string;

  provider: MetricsAPI.RequestProvider;

  response: string;

  cost?: number | null;

  latency?: number | null;
}

Report.Metrics = Metrics;
Report.Usage = Usage;

export declare namespace Report {
  export {
    type ReportEvaluateHallucinationResponse as ReportEvaluateHallucinationResponse,
    type ReportEvaluateHallucinationParams as ReportEvaluateHallucinationParams,
  };

  export {
    Metrics as Metrics,
    type ArenaFeedback as ArenaFeedback,
    type FeedbackReport as FeedbackReport,
    type RegenerationFeedback as RegenerationFeedback,
    type RequestProvider as RequestProvider,
    type ThumbsUpDownFeedback as ThumbsUpDownFeedback,
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

  export {
    Usage as Usage,
    type UsageReportLlmCostsResponse as UsageReportLlmCostsResponse,
    type UsageReportUsageResponse as UsageReportUsageResponse,
    type UsageTestLlmReportingResponse as UsageTestLlmReportingResponse,
    type UsageReportLlmCostsParams as UsageReportLlmCostsParams,
    type UsageReportUsageParams as UsageReportUsageParams,
    type UsageTestLlmReportingParams as UsageTestLlmReportingParams,
  };
}
