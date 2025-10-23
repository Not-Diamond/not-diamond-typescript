// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ModelRouter extends APIResource {
  /**
   * Simple health check endpoint with OTEL tracing
   */
  healthCheck(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v2/modelRouter/health', options);
  }

  /**
   * Openhands Model Select
   */
  openHands(body: ModelRouterOpenHandsParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/modelRouter/openHandsRouter', { body, ...options });
  }

  /**
   * Token Model Select
   */
  selectModel(params: ModelRouterSelectModelParams, options?: RequestOptions): APIPromise<unknown> {
    const { type, ...body } = params;
    return this._client.post('/v2/modelRouter/modelSelect', { query: { type }, body, ...options });
  }
}

export type ModelRouterHealthCheckResponse = unknown;

export type ModelRouterOpenHandsResponse = unknown;

export type ModelRouterSelectModelResponse = unknown;

export interface ModelRouterOpenHandsParams {
  llm_providers: Array<
    ModelRouterOpenHandsParams.RequestProvider | ModelRouterOpenHandsParams.OpenRouterProvider
  >;

  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

  hash_content?: boolean;

  max_model_depth?: number | null;

  metric?: string;

  preference_id?: string | null;

  previous_session?: string | null;

  tools?: Array<{ [key: string]: unknown }> | null;

  tradeoff?: string | null;
}

export namespace ModelRouterOpenHandsParams {
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

export interface ModelRouterSelectModelParams {
  /**
   * Body param:
   */
  llm_providers: Array<
    ModelRouterSelectModelParams.RequestProvider | ModelRouterSelectModelParams.OpenRouterProvider
  >;

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

export namespace ModelRouterSelectModelParams {
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

export declare namespace ModelRouter {
  export {
    type ModelRouterHealthCheckResponse as ModelRouterHealthCheckResponse,
    type ModelRouterOpenHandsResponse as ModelRouterOpenHandsResponse,
    type ModelRouterSelectModelResponse as ModelRouterSelectModelResponse,
    type ModelRouterOpenHandsParams as ModelRouterOpenHandsParams,
    type ModelRouterSelectModelParams as ModelRouterSelectModelParams,
  };
}
