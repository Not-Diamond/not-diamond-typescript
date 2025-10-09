// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MetricsAPI from './report/metrics';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Optimizer extends APIResource {
  /**
   * Frontend Arena Models
   */
  getFrontendArenaModels(
    params: OptimizerGetFrontendArenaModelsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post('/v2/optimizer/frontendArenaModels', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Frontend Hash Model Select
   */
  selectFrontendHashModel(
    params: OptimizerSelectFrontendHashModelParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post('/v2/optimizer/frontendHashModelSelect', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Hash Model Select
   */
  selectHashModel(body: OptimizerSelectHashModelParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/optimizer/hashModelSelect', { body, ...options });
  }

  /**
   * Token Model Select
   */
  selectModel(params: OptimizerSelectModelParams, options?: RequestOptions): APIPromise<unknown> {
    const { type, ...body } = params;
    return this._client.post('/v2/optimizer/modelSelect', { query: { type }, body, ...options });
  }

  /**
   * Userid Model Select
   */
  selectUseridModel(params: OptimizerSelectUseridModelParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post('/v2/optimizer/userIDModelSelect', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }
}

export interface FrontendHashOptimizerRequest {
  llm_providers: Array<MetricsAPI.RequestProvider | OpenRouterProvider>;

  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

  user_id: string;

  hash_content?: boolean;

  image_gen?: boolean;

  max_model_depth?: number | null;

  metric?: string;

  preference_id?: string | null;

  previous_session?: string | null;

  tools?: Array<{ [key: string]: unknown }> | null;

  tradeoff?: string | null;
}

export interface OpenRouterProvider {
  model: string;

  context_length?: number | null;

  input_price?: number | null;

  is_custom?: boolean;

  latency?: number | null;

  output_price?: number | null;
}

export interface OptimizerBaseRequest {
  llm_providers: Array<MetricsAPI.RequestProvider | OpenRouterProvider>;

  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

  hash_content?: boolean;

  max_model_depth?: number | null;

  metric?: string;

  preference_id?: string | null;

  previous_session?: string | null;

  tools?: Array<{ [key: string]: unknown }> | null;

  tradeoff?: string | null;
}

export type OptimizerGetFrontendArenaModelsResponse = unknown;

export type OptimizerSelectFrontendHashModelResponse = unknown;

export type OptimizerSelectHashModelResponse = unknown;

export type OptimizerSelectModelResponse = unknown;

export type OptimizerSelectUseridModelResponse = unknown;

export interface OptimizerGetFrontendArenaModelsParams {
  /**
   * Body param:
   */
  llm_providers: Array<MetricsAPI.RequestProvider | OpenRouterProvider>;

  /**
   * Body param:
   */
  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

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
  hash_content?: boolean;

  /**
   * Body param:
   */
  image_gen?: boolean;

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

export interface OptimizerSelectFrontendHashModelParams {
  /**
   * Body param:
   */
  llm_providers: Array<MetricsAPI.RequestProvider | OpenRouterProvider>;

  /**
   * Body param:
   */
  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

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
  hash_content?: boolean;

  /**
   * Body param:
   */
  image_gen?: boolean;

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

export interface OptimizerSelectHashModelParams {
  llm_providers: Array<MetricsAPI.RequestProvider | OpenRouterProvider>;

  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

  hash_content?: boolean;

  max_model_depth?: number | null;

  metric?: string;

  preference_id?: string | null;

  previous_session?: string | null;

  tools?: Array<{ [key: string]: unknown }> | null;

  tradeoff?: string | null;
}

export interface OptimizerSelectModelParams {
  /**
   * Body param:
   */
  llm_providers: Array<MetricsAPI.RequestProvider | OpenRouterProvider>;

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

export interface OptimizerSelectUseridModelParams {
  /**
   * Body param:
   */
  llm_providers: Array<MetricsAPI.RequestProvider | OpenRouterProvider>;

  /**
   * Body param:
   */
  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

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
  hash_content?: boolean;

  /**
   * Body param:
   */
  image_gen?: boolean;

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

export declare namespace Optimizer {
  export {
    type FrontendHashOptimizerRequest as FrontendHashOptimizerRequest,
    type OpenRouterProvider as OpenRouterProvider,
    type OptimizerBaseRequest as OptimizerBaseRequest,
    type OptimizerGetFrontendArenaModelsResponse as OptimizerGetFrontendArenaModelsResponse,
    type OptimizerSelectFrontendHashModelResponse as OptimizerSelectFrontendHashModelResponse,
    type OptimizerSelectHashModelResponse as OptimizerSelectHashModelResponse,
    type OptimizerSelectModelResponse as OptimizerSelectModelResponse,
    type OptimizerSelectUseridModelResponse as OptimizerSelectUseridModelResponse,
    type OptimizerGetFrontendArenaModelsParams as OptimizerGetFrontendArenaModelsParams,
    type OptimizerSelectFrontendHashModelParams as OptimizerSelectFrontendHashModelParams,
    type OptimizerSelectHashModelParams as OptimizerSelectHashModelParams,
    type OptimizerSelectModelParams as OptimizerSelectModelParams,
    type OptimizerSelectUseridModelParams as OptimizerSelectUseridModelParams,
  };
}
