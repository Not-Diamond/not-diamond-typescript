// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
  preferred_provider: ArenaCreateChoiceParams.PreferredProvider;

  rejected_provider: ArenaCreateChoiceParams.RejectedProvider;

  session_id: string;

  user_id?: string | null;
}

export namespace ArenaCreateChoiceParams {
  export interface PreferredProvider {
    model: string;

    provider: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }

  export interface RejectedProvider {
    model: string;

    provider: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }
}

export interface ArenaCreateModelsParams {
  llm_providers: Array<ArenaCreateModelsParams.RequestProvider | ArenaCreateModelsParams.OpenRouterProvider>;

  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

  hash_content?: boolean;

  max_model_depth?: number | null;

  metric?: string;

  preference_id?: string | null;

  previous_session?: string | null;

  tools?: Array<{ [key: string]: unknown }> | null;

  tradeoff?: string | null;
}

export namespace ArenaCreateModelsParams {
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

export declare namespace Arena {
  export {
    type ArenaCreateChoiceResponse as ArenaCreateChoiceResponse,
    type ArenaCreateModelsResponse as ArenaCreateModelsResponse,
    type ArenaCreateChoiceParams as ArenaCreateChoiceParams,
    type ArenaCreateModelsParams as ArenaCreateModelsParams,
  };
}
