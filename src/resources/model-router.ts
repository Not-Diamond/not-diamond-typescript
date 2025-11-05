// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ModelRouter extends APIResource {
  /**
   * Openhands Model Select
   *
   * @example
   * ```ts
   * const response = await client.modelRouter.openHandsSelect({
   *   body: {},
   * });
   * ```
   */
  openHandsSelect(params: ModelRouterOpenHandsSelectParams, options?: RequestOptions): APIPromise<unknown> {
    const { body } = params;
    return this._client.post('/v2/modelRouter/openHandsRouter', { body: body, ...options });
  }

  /**
   * Select the optimal LLM to handle your query based on Not Diamond's routing
   * algorithm.
   *
   * This endpoint analyzes your messages and returns the best-suited model from your
   * specified providers. The router considers factors like query complexity, model
   * capabilities, cost, and latency based on your preferences.
   *
   * **Key Features:**
   *
   * - Intelligent routing across multiple LLM providers
   * - Support for custom routers trained on your evaluation data
   * - Optional cost/latency optimization
   * - Function calling support for compatible models
   * - Privacy-preserving content hashing
   *
   * **Usage:**
   *
   * 1. Pass your messages in OpenAI format (array of objects with 'role' and
   *    'content')
   * 2. Specify which LLM providers you want to route between
   * 3. Optionally provide a preference_id for personalized routing
   * 4. Receive a recommended model and session_id
   * 5. Use the session_id to submit feedback and improve routing
   *
   * **Related Endpoints:**
   *
   * - `POST /v2/preferences/userPreferenceCreate` - Create a preference ID for
   *   personalized routing
   * - `POST /v2/report/metrics/feedback` - Submit feedback on routing decisions
   * - `POST /v2/pzn/trainCustomRouter` - Train a custom router on your evaluation
   *   data
   *
   * @example
   * ```ts
   * const response = await client.modelRouter.selectModel({
   *   body: {
   *     messages: [
   *       {
   *         role: 'system',
   *         content: 'You are a helpful assistant.',
   *       },
   *       {
   *         role: 'user',
   *         content:
   *           'Explain quantum computing in simple terms',
   *       },
   *     ],
   *     llm_providers: [
   *       { provider: 'openai', model: 'gpt-4o' },
   *       {
   *         provider: 'anthropic',
   *         model: 'claude-sonnet-4-5-20250929',
   *       },
   *       { provider: 'google', model: 'gemini-1.5-pro' },
   *     ],
   *   },
   * });
   * ```
   */
  selectModel(
    params: ModelRouterSelectModelParams,
    options?: RequestOptions,
  ): APIPromise<ModelRouterSelectModelResponse> {
    const { body, type } = params;
    return this._client.post('/v2/modelRouter/modelSelect', { query: { type }, body: body, ...options });
  }
}

export type ModelRouterOpenHandsSelectResponse = unknown;

/**
 * Response from model selection endpoint.
 */
export interface ModelRouterSelectModelResponse {
  /**
   * List containing the selected provider
   */
  providers: Array<ModelRouterSelectModelResponse.Provider>;

  /**
   * Unique session ID for this routing decision
   */
  session_id: string;
}

export namespace ModelRouterSelectModelResponse {
  /**
   * Selected LLM provider information from model selection endpoints.
   *
   * Part of ModelSelectResponse. Contains the provider and model that Not Diamond's
   * routing algorithm selected as optimal for your query. Use these values to make
   * your LLM API call to the recommended model.
   */
  export interface Provider {
    /**
     * Model identifier for the selected model (e.g., 'gpt-4o',
     * 'claude-3-opus-20240229')
     */
    model: string;

    /**
     * Provider name for the selected model (e.g., 'openai', 'anthropic', 'google')
     */
    provider: string;
  }
}

export interface ModelRouterOpenHandsSelectParams {
  body: unknown;
}

export interface ModelRouterSelectModelParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Query param: Optional format type. Use 'openrouter' to accept and return
   * OpenRouter-format model identifiers
   */
  type?: string | null;
}

export declare namespace ModelRouter {
  export {
    type ModelRouterOpenHandsSelectResponse as ModelRouterOpenHandsSelectResponse,
    type ModelRouterSelectModelResponse as ModelRouterSelectModelResponse,
    type ModelRouterOpenHandsSelectParams as ModelRouterOpenHandsSelectParams,
    type ModelRouterSelectModelParams as ModelRouterSelectModelParams,
  };
}
