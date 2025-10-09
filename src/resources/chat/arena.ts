// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OptimizerAPI from '../optimizer';
import * as MetricsAPI from '../report/metrics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Arena extends APIResource {
  /**
   * Frontend Arena Choice
   */
  createChoice(body: ArenaCreateChoiceParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/chat/arena/arenaChoice', { body, ...options });
  }

  /**
   * Frontend Arena Models
   */
  createModels(body: ArenaCreateModelsParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/chat/arena/arenaModels', { body, ...options });
  }
}

export type ArenaCreateChoiceResponse = unknown;

export type ArenaCreateModelsResponse = unknown;

export interface ArenaCreateChoiceParams {
  preferred_provider: MetricsAPI.RequestProvider;

  rejected_provider: MetricsAPI.RequestProvider;

  session_id: string;

  user_id?: string | null;
}

export interface ArenaCreateModelsParams {
  llm_providers: Array<MetricsAPI.RequestProvider | OptimizerAPI.OpenRouterProvider>;

  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

  hash_content?: boolean;

  max_model_depth?: number | null;

  metric?: string;

  preference_id?: string | null;

  previous_session?: string | null;

  tools?: Array<{ [key: string]: unknown }> | null;

  tradeoff?: string | null;
}

export declare namespace Arena {
  export {
    type ArenaCreateChoiceResponse as ArenaCreateChoiceResponse,
    type ArenaCreateModelsResponse as ArenaCreateModelsResponse,
    type ArenaCreateChoiceParams as ArenaCreateChoiceParams,
    type ArenaCreateModelsParams as ArenaCreateModelsParams,
  };
}
