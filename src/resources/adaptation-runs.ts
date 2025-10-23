// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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

  usage_records: Array<AdaptationRunRetrieveCostsResponse.UsageRecord>;
}

export namespace AdaptationRunRetrieveCostsResponse {
  export interface UsageRecord {
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

export declare namespace AdaptationRuns {
  export { type AdaptationRunRetrieveCostsResponse as AdaptationRunRetrieveCostsResponse };
}
