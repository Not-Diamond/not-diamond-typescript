// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * List all supported text generation models with optional filtering.
   *
   * including pricing, context length, latency, and OpenRouter availability.
   *
   * **Note:** Image generation models are excluded from this endpoint.
   *
   * **Examples:**
   *
   * - Get all models: `/v2/models`
   * - OpenRouter only: `/v2/models?openrouter_only=true`
   * - Specific provider: `/v2/models?provider=openai`
   * - Multiple providers: `/v2/models?provider=openai&provider=anthropic`
   *
   * **Query Parameters:**
   *
   * - **provider**: Filter by provider name(s). Can specify multiple times for
   *   multiple providers (e.g., `?provider=openai&provider=anthropic`)
   * - **openrouter_only**: Return only models that have OpenRouter support (default:
   *   false)
   *
   * **Returns:**
   *
   * - **models**: List of active text generation model objects with metadata
   * - **total**: Total number of active models returned
   * - **deprecated_models**: List of deprecated text generation model objects with
   *   metadata (respects the same filters as active models)
   *
   * **Caching:**
   *
   * - Response is cacheable for 1 hour (model list rarely changes)
   */
  list(
    query: ModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelListResponse> {
    return this._client.get('/v2/models', { query, ...options });
  }
}

/**
 * Response for models list endpoint.
 */
export interface ModelListResponse {
  deprecated_models: Array<ModelListResponse.DeprecatedModel>;

  models: Array<ModelListResponse.Model>;

  total: number;
}

export namespace ModelListResponse {
  /**
   * Response model for a single LLM provider.
   */
  export interface DeprecatedModel {
    context_length: number;

    input_price: number;

    model: string;

    output_price: number;

    provider: string;

    openrouter_model?: string | null;
  }

  /**
   * Response model for a single LLM provider.
   */
  export interface Model {
    context_length: number;

    input_price: number;

    model: string;

    output_price: number;

    provider: string;

    openrouter_model?: string | null;
  }
}

export interface ModelListParams {
  /**
   * Return only OpenRouter-supported models
   */
  openrouter_only?: boolean;

  /**
   * Filter by provider name(s). Can specify multiple providers (e.g., 'openai',
   * 'anthropic')
   */
  provider?: Array<string> | null;
}

export declare namespace Models {
  export { type ModelListResponse as ModelListResponse, type ModelListParams as ModelListParams };
}
