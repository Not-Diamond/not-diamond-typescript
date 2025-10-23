// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PromptAdaptationAPI from './prompt-adaptation';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PromptAdaptation extends APIResource {
  /**
   * Adapt Prompt
   */
  adapt(
    body: PromptAdaptationAdaptParams,
    options?: RequestOptions,
  ): APIPromise<PromptAdaptationAdaptResponse> {
    return this._client.post('/v2/prompt/adapt', { body, ...options });
  }

  /**
   * Get Adapt Results
   */
  getAdaptResults(adaptationRunID: string, options?: RequestOptions): APIPromise<AdaptationRunResults> {
    return this._client.get(path`/v2/prompt/adaptResults/${adaptationRunID}`, options);
  }

  /**
   * Get Adapt Run Results
   */
  getAdaptRunResults(
    adaptationRunID: string,
    params: PromptAdaptationGetAdaptRunResultsParams,
    options?: RequestOptions,
  ): APIPromise<AdaptationRunResults> {
    const { user_id, 'x-token': xToken } = params;
    return this._client.get(path`/v2/prompt/frontendAdaptRunResults/${user_id}/${adaptationRunID}`, {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Get Adapt Runs
   */
  getAdaptRuns(
    userID: string,
    params: PromptAdaptationGetAdaptRunsParams,
    options?: RequestOptions,
  ): APIPromise<PromptAdaptationGetAdaptRunsResponse> {
    const { 'x-token': xToken } = params;
    return this._client.get(path`/v2/prompt/frontendAdaptRuns/${userID}`, {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Get Adapt Status
   */
  getAdaptStatus(
    adaptationRunID: string,
    options?: RequestOptions,
  ): APIPromise<PromptAdaptationGetAdaptStatusResponse> {
    return this._client.get(path`/v2/prompt/adaptStatus/${adaptationRunID}`, options);
  }

  /**
   * Get LLM costs for a specific adaptation run
   */
  retrieveCosts(
    adaptationRunID: string,
    options?: RequestOptions,
  ): APIPromise<PromptAdaptationRetrieveCostsResponse> {
    return this._client.get(path`/v1/adaptation-runs/${adaptationRunID}/costs`, options);
  }
}

export interface AdaptationRunResults {
  id: string;

  created_at: string;

  job_status: JobStatus;

  origin_model: AdaptationRunResults.OriginModel;

  target_models: Array<AdaptationRunResults.TargetModel>;

  updated_at: string | null;

  evaluation_config?: string | null;

  evaluation_metric?: string | null;
}

export namespace AdaptationRunResults {
  export interface OriginModel {
    cost: number | null;

    evals: { [key: string]: unknown } | null;

    model_name: string;

    result_status: PromptAdaptationAPI.JobStatus | null;

    score: number | null;

    system_prompt: string | null;

    user_message_template: string | null;
  }

  export interface TargetModel {
    cost: number | null;

    model_name: string;

    post_optimization_evals: { [key: string]: unknown } | null;

    post_optimization_score: number | null;

    pre_optimization_evals: { [key: string]: unknown } | null;

    pre_optimization_score: number | null;

    result_status: PromptAdaptationAPI.JobStatus | null;

    system_prompt: string | null;

    user_message_template: string | null;

    user_message_template_fields: Array<string> | null;
  }
}

export type JobStatus = 'created' | 'queued' | 'processing' | 'completed' | 'failed';

export interface PromptAdaptationAdaptResponse {
  adaptation_run_id: string;
}

export type PromptAdaptationGetAdaptRunsResponse = Array<AdaptationRunResults>;

export interface PromptAdaptationGetAdaptStatusResponse {
  adaptation_run_id: string;

  status: JobStatus;

  queue_position?: number | null;
}

export interface PromptAdaptationRetrieveCostsResponse {
  adaptation_run_id: string;

  total_cost: number;

  usage_records: Array<PromptAdaptationRetrieveCostsResponse.UsageRecord>;
}

export namespace PromptAdaptationRetrieveCostsResponse {
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

export interface PromptAdaptationAdaptParams {
  fields: Array<string>;

  origin_model: PromptAdaptationAdaptParams.OriginModel;

  system_prompt: string;

  target_models: Array<PromptAdaptationAdaptParams.TargetModel>;

  template: string;

  evaluation_config?: string | null;

  evaluation_metric?: string | null;

  goldens?: Array<PromptAdaptationAdaptParams.Golden> | null;

  origin_model_evaluation_score?: number | null;

  test_goldens?: Array<PromptAdaptationAdaptParams.TestGolden> | null;

  train_goldens?: Array<PromptAdaptationAdaptParams.TrainGolden> | null;
}

export namespace PromptAdaptationAdaptParams {
  export interface OriginModel {
    model: string;

    provider: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }

  export interface TargetModel {
    model: string;

    provider: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }

  export interface Golden {
    fields: { [key: string]: string };

    answer?: string | null;
  }

  export interface TestGolden {
    fields: { [key: string]: string };

    answer?: string | null;
  }

  export interface TrainGolden {
    fields: { [key: string]: string };

    answer?: string | null;
  }
}

export interface PromptAdaptationGetAdaptRunResultsParams {
  /**
   * Path param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;
}

export interface PromptAdaptationGetAdaptRunsParams {
  'x-token': string;
}

export declare namespace PromptAdaptation {
  export {
    type AdaptationRunResults as AdaptationRunResults,
    type JobStatus as JobStatus,
    type PromptAdaptationAdaptResponse as PromptAdaptationAdaptResponse,
    type PromptAdaptationGetAdaptRunsResponse as PromptAdaptationGetAdaptRunsResponse,
    type PromptAdaptationGetAdaptStatusResponse as PromptAdaptationGetAdaptStatusResponse,
    type PromptAdaptationRetrieveCostsResponse as PromptAdaptationRetrieveCostsResponse,
    type PromptAdaptationAdaptParams as PromptAdaptationAdaptParams,
    type PromptAdaptationGetAdaptRunResultsParams as PromptAdaptationGetAdaptRunResultsParams,
    type PromptAdaptationGetAdaptRunsParams as PromptAdaptationGetAdaptRunsParams,
  };
}
