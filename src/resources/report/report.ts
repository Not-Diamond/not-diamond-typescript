// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MetricsAPI from './metrics';
import {
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

  provider: ReportEvaluateHallucinationParams.Provider;

  response: string;

  cost?: number | null;

  latency?: number | null;
}

export namespace ReportEvaluateHallucinationParams {
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

Report.Metrics = Metrics;
Report.Usage = Usage;

export declare namespace Report {
  export {
    type ReportEvaluateHallucinationResponse as ReportEvaluateHallucinationResponse,
    type ReportEvaluateHallucinationParams as ReportEvaluateHallucinationParams,
  };

  export {
    Metrics as Metrics,
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
