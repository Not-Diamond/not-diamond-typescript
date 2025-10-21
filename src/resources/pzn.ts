// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Pzn extends APIResource {
  /**
   * Survey Response
   */
  createSurveyResponse(params: PznCreateSurveyResponseParams, options?: RequestOptions): APIPromise<unknown> {
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
  trainCustomRouter(body: PznTrainCustomRouterParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(
      '/v2/pzn/trainCustomRouter',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type PznCreateSurveyResponseResponse = unknown;

export type PznTrainCustomRouterResponse = unknown;

export interface PznCreateSurveyResponseParams {
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

export interface PznTrainCustomRouterParams {
  dataset_file: Uploadable;

  language: string;

  llm_providers: string;

  maximize: boolean;

  prompt_column: string;

  override?: boolean | null;

  preference_id?: string | null;
}

export declare namespace Pzn {
  export {
    type PznCreateSurveyResponseResponse as PznCreateSurveyResponseResponse,
    type PznTrainCustomRouterResponse as PznTrainCustomRouterResponse,
    type PznCreateSurveyResponseParams as PznCreateSurveyResponseParams,
    type PznTrainCustomRouterParams as PznTrainCustomRouterParams,
  };
}
