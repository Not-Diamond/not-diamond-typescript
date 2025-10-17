// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PromptAPI from './prompt';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Prompt extends APIResource {
  /**
   * Adapt Prompt
   */
  adapt(body: PromptAdaptParams, options?: RequestOptions): APIPromise<PromptAdaptResponse> {
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
    params: PromptGetAdaptRunResultsParams,
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
    params: PromptGetAdaptRunsParams,
    options?: RequestOptions,
  ): APIPromise<PromptGetAdaptRunsResponse> {
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
  ): APIPromise<PromptGetAdaptStatusResponse> {
    return this._client.get(path`/v2/prompt/adaptStatus/${adaptationRunID}`, options);
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

    result_status: PromptAPI.JobStatus | null;

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

    result_status: PromptAPI.JobStatus | null;

    system_prompt: string | null;

    user_message_template: string | null;

    user_message_template_fields: Array<string> | null;
  }
}

export type JobStatus = 'created' | 'queued' | 'processing' | 'completed' | 'failed';

export interface PromptAdaptResponse {
  adaptation_run_id: string;
}

export type PromptGetAdaptRunsResponse = Array<AdaptationRunResults>;

export interface PromptGetAdaptStatusResponse {
  adaptation_run_id: string;

  status: JobStatus;

  queue_position?: number | null;
}

export interface PromptAdaptParams {
  fields: Array<string>;

  origin_model: PromptAdaptParams.OriginModel;

  system_prompt: string;

  target_models: Array<PromptAdaptParams.TargetModel>;

  template: string;

  evaluation_config?: string | null;

  evaluation_metric?: string | null;

  goldens?: Array<PromptAdaptParams.Golden> | null;

  origin_model_evaluation_score?: number | null;

  test_goldens?: Array<PromptAdaptParams.TestGolden> | null;

  train_goldens?: Array<PromptAdaptParams.TrainGolden> | null;
}

export namespace PromptAdaptParams {
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

export interface PromptGetAdaptRunResultsParams {
  /**
   * Path param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;
}

export interface PromptGetAdaptRunsParams {
  'x-token': string;
}

export declare namespace Prompt {
  export {
    type AdaptationRunResults as AdaptationRunResults,
    type JobStatus as JobStatus,
    type PromptAdaptResponse as PromptAdaptResponse,
    type PromptGetAdaptRunsResponse as PromptGetAdaptRunsResponse,
    type PromptGetAdaptStatusResponse as PromptGetAdaptStatusResponse,
    type PromptAdaptParams as PromptAdaptParams,
    type PromptGetAdaptRunResultsParams as PromptGetAdaptRunResultsParams,
    type PromptGetAdaptRunsParams as PromptGetAdaptRunsParams,
  };
}
