// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Router extends APIResource {
  /**
   * Survey Response
   */
  createSurveyResponse(
    params: RouterCreateSurveyResponseParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post(
      '/v2/pzn/surveyResponse',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ 'x-token': xToken }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Token Model Select
   */
  selectModel(params: RouterSelectModelParams, options?: RequestOptions): APIPromise<unknown> {
    const { type, ...body } = params;
    return this._client.post('/v2/modelRouter/modelSelect', { query: { type }, body, ...options });
  }

  /**
   * preference_id: if specified, update the topic + topic embedding entries in db
   *
   * language: either "english" or "multilingual". If "english", use
   * "embed-english-v3.0" embedding model If "multilingual", use
   * "embed-multilingual-v3.0" embedding model.
   *
   * llm_providers: a JSONified string in the form '[{ "provider": "openai", "model":
   * "gpt-3.5"}, { "provider": "openai", "model": "gpt-4"}]' which you can load as
   * JSON
   *
   * prompt_column: column in the dataset_file that corresponds to the prompt each
   * LLM is evaluated on
   *
   * dataset_file: will be a csv containing:
   *
   * 1. prompt_column is the column containing the prompt used to call the LLM
   * 2. A column for each <provider>/<model>/score (as passed in llm_providers param)
   *    indicating the score achieved by the LLM
   * 3. A column for each <provider>/<model>/response (as passed in llm_providers
   *    param) indicating the response given by the LLM
   *
   * maximize: whether score higher is better. If False, then apply negative sign to
   * all scores as the LLMTopicMaximalMarginalRelevance class assumes higher score is
   * better
   *
   * Run BERTopic algo on Modal (run 10 times to get the best result) If
   * preference_id is specified, update existing topic + embeddings If no
   * preference_id, create a new preference and store topic + topic embeddings in db
   *
   * Store each prompt as an entry in the LLMPipeline table Create a result entry in
   * LLMPipelineResults for each model in llm_providers Each result entry will also
   * store the LLM response (db migration script pending)
   */
  trainCustomRouter(body: RouterTrainCustomRouterParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(
      '/v2/pzn/trainCustomRouter',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type RouterCreateSurveyResponseResponse = unknown;

export type RouterSelectModelResponse = unknown;

export type RouterTrainCustomRouterResponse = unknown;

export interface RouterCreateSurveyResponseParams {
  /**
   * Body param:
   */
  constraint_priorities: string;

  /**
   * Body param:
   */
  email: string;

  /**
   * Body param:
   */
  llm_providers: string;

  /**
   * Body param:
   */
  use_case_desc: string;

  /**
   * Body param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;

  /**
   * Body param:
   */
  additional_preferences?: string | null;

  /**
   * Body param:
   */
  dataset_file?: Uploadable | null;

  /**
   * Body param:
   */
  name?: string | null;

  /**
   * Body param:
   */
  prompt_file?: Uploadable | null;

  /**
   * Body param:
   */
  prompts?: string | null;
}

export interface RouterSelectModelParams {
  /**
   * Body param:
   */
  llm_providers: Array<RouterSelectModelParams.RequestProvider | RouterSelectModelParams.OpenRouterProvider>;

  /**
   * Body param:
   */
  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

  /**
   * Query param:
   */
  type?: string | null;

  /**
   * Body param:
   */
  hash_content?: boolean;

  /**
   * Body param:
   */
  max_model_depth?: number | null;

  /**
   * Body param:
   */
  metric?: string;

  /**
   * Body param:
   */
  preference_id?: string | null;

  /**
   * Body param:
   */
  previous_session?: string | null;

  /**
   * Body param:
   */
  tools?: Array<{ [key: string]: unknown }> | null;

  /**
   * Body param:
   */
  tradeoff?: string | null;
}

export namespace RouterSelectModelParams {
  export interface RequestProvider {
    model: string;

    provider: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }

  export interface OpenRouterProvider {
    model: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }
}

export interface RouterTrainCustomRouterParams {
  dataset_file: Uploadable;

  language: string;

  llm_providers: string;

  maximize: boolean;

  prompt_column: string;

  override?: boolean | null;

  preference_id?: string | null;
}

export declare namespace Router {
  export {
    type RouterCreateSurveyResponseResponse as RouterCreateSurveyResponseResponse,
    type RouterSelectModelResponse as RouterSelectModelResponse,
    type RouterTrainCustomRouterResponse as RouterTrainCustomRouterResponse,
    type RouterCreateSurveyResponseParams as RouterCreateSurveyResponseParams,
    type RouterSelectModelParams as RouterSelectModelParams,
    type RouterTrainCustomRouterParams as RouterTrainCustomRouterParams,
  };
}
