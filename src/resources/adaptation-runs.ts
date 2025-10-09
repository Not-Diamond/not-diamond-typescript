// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LlmUsageAPI from './llm-usage';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AdaptationRuns extends APIResource {
  /**
   * Get LLM costs for a specific adaptation run
   */
  retrieveCosts(
    adaptationRunID: string,
    options?: RequestOptions,
  ): APIPromise<AdaptationRunRetrieveCostsResponse> {
    return this._client.get(path`/v1/adaptation-runs/${adaptationRunID}/costs`, options);
  }
}

export interface AdaptationRunRetrieveCostsResponse {
  adaptation_run_id: string;

  total_cost: number;

  usage_records: Array<LlmUsageAPI.LlmUsage>;
}

export declare namespace AdaptationRuns {
  export { type AdaptationRunRetrieveCostsResponse as AdaptationRunRetrieveCostsResponse };
}
