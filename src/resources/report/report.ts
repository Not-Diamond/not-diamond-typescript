// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MetricsAPI from './metrics';
import { MetricSubmitFeedbackParams, MetricSubmitFeedbackResponse, Metrics } from './metrics';

export class Report extends APIResource {
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
}

Report.Metrics = Metrics;

export declare namespace Report {
  export {
    Metrics as Metrics,
    type MetricSubmitFeedbackResponse as MetricSubmitFeedbackResponse,
    type MetricSubmitFeedbackParams as MetricSubmitFeedbackParams,
  };
}
