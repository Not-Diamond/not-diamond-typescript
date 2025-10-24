// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Report extends APIResource {
  /**
   * Evaluate Hallucination
   *
   * @example
   * ```ts
   * const response = await client.report.evaluateHallucination({
   *   context: 'context',
   *   prompt: 'prompt',
   *   provider: { model: 'gpt-4o', provider: 'openai' },
   *   response: 'response',
   * });
   * ```
   */
  evaluateHallucination(
    body: ReportEvaluateHallucinationParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post('/v2/report/hallucination', { body, ...options });
  }

  /**
   * Report Latency
   *
   * @example
   * ```ts
   * const response = await client.report.latency({
   *   feedback: { accuracy: 'bar' },
   *   provider: { model: 'gpt-4o', provider: 'openai' },
   *   session_id: 'session_id',
   * });
   * ```
   */
  latency(body: ReportLatencyParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/report/metrics/latency', { body, ...options });
  }

  /**
   * Submit feedback on a routing decision to improve future recommendations.
   *
   * This endpoint allows you to provide feedback on whether the router selected the
   * right model for your query. Your feedback is used to:
   *
   * 1. Personalize routing decisions for your preference_id
   * 2. Improve the overall routing quality
   * 3. Train and refine custom routers
   *
   * **Feedback Format:**
   *
   * - `accuracy: 1` - Thumbs up (the model performed well)
   * - `accuracy: 0` - Thumbs down (the model did not perform well)
   *
   * **Requirements:**
   *
   * - You must have used a preference_id in the original model_select() call
   * - The session_id must be valid and belong to your account
   * - The provider must match one of the providers returned by model_select()
   *
   * **How Feedback Works:** When you submit thumbs down, the router will:
   *
   * - Decrease the ranking of the selected model for similar queries
   * - Consider alternative models more favorably
   *
   * When you submit thumbs up, the router will:
   *
   * - Increase the ranking of the selected model for similar queries
   * - Prioritize this model for similar future requests
   *
   * **Note:** Feedback requires a valid preference_id. Create one via POST
   * /v2/preferences/userPreferenceCreate
   *
   * @example
   * ```ts
   * const response = await client.report.submitFeedback({
   *   feedback: { accuracy: 1 },
   *   provider: { provider: 'openai', model: 'gpt-4o' },
   *   session_id: '550e8400-e29b-41d4-a716-446655440000',
   * });
   * ```
   */
  submitFeedback(
    body: ReportSubmitFeedbackParams,
    options?: RequestOptions,
  ): APIPromise<ReportSubmitFeedbackResponse> {
    return this._client.post('/v2/report/metrics/feedback', { body, ...options });
  }
}

export type ReportEvaluateHallucinationResponse = unknown;

export type ReportLatencyResponse = unknown;

/**
 * Response from feedback submission endpoint.
 */
export interface ReportSubmitFeedbackResponse {
  /**
   * The processed feedback
   */
  feedback: { [key: string]: unknown };

  /**
   * The session ID for which feedback was submitted
   */
  session_id: string;
}

export interface ReportEvaluateHallucinationParams {
  context: string;

  prompt: string;

  /**
   * Model for specifying an LLM provider in API requests.
   */
  provider: ReportEvaluateHallucinationParams.Provider;

  response: string;

  cost?: number | null;

  latency?: number | null;
}

export namespace ReportEvaluateHallucinationParams {
  /**
   * Model for specifying an LLM provider in API requests.
   */
  export interface Provider {
    /**
     * Model name (e.g., 'gpt-4o', 'claude-3-5-sonnet-20241022')
     */
    model: string;

    /**
     * Provider name (e.g., 'openai', 'anthropic', 'google')
     */
    provider: string;

    /**
     * Maximum context length for the model (required for custom models)
     */
    context_length?: number | null;

    /**
     * Input token price per million tokens in USD (required for custom models)
     */
    input_price?: number | null;

    /**
     * Whether this is a custom model not in Not Diamond's supported model list
     */
    is_custom?: boolean;

    /**
     * Average latency in seconds (required for custom models)
     */
    latency?: number | null;

    /**
     * Output token price per million tokens in USD (required for custom models)
     */
    output_price?: number | null;
  }
}

export interface ReportLatencyParams {
  /**
   * Feedback dictionary with 'accuracy' key (0 for thumbs down, 1 for thumbs up)
   */
  feedback: { [key: string]: unknown };

  /**
   * The provider that was selected by the router
   */
  provider: ReportLatencyParams.Provider;

  /**
   * Session ID returned from POST /v2/modelRouter/modelSelect
   */
  session_id: string;
}

export namespace ReportLatencyParams {
  /**
   * The provider that was selected by the router
   */
  export interface Provider {
    /**
     * Model name (e.g., 'gpt-4o', 'claude-3-5-sonnet-20241022')
     */
    model: string;

    /**
     * Provider name (e.g., 'openai', 'anthropic', 'google')
     */
    provider: string;

    /**
     * Maximum context length for the model (required for custom models)
     */
    context_length?: number | null;

    /**
     * Input token price per million tokens in USD (required for custom models)
     */
    input_price?: number | null;

    /**
     * Whether this is a custom model not in Not Diamond's supported model list
     */
    is_custom?: boolean;

    /**
     * Average latency in seconds (required for custom models)
     */
    latency?: number | null;

    /**
     * Output token price per million tokens in USD (required for custom models)
     */
    output_price?: number | null;
  }
}

export interface ReportSubmitFeedbackParams {
  /**
   * Feedback dictionary with 'accuracy' key (0 for thumbs down, 1 for thumbs up)
   */
  feedback: { [key: string]: unknown };

  /**
   * The provider that was selected by the router
   */
  provider: ReportSubmitFeedbackParams.Provider;

  /**
   * Session ID returned from POST /v2/modelRouter/modelSelect
   */
  session_id: string;
}

export namespace ReportSubmitFeedbackParams {
  /**
   * The provider that was selected by the router
   */
  export interface Provider {
    /**
     * Model name (e.g., 'gpt-4o', 'claude-3-5-sonnet-20241022')
     */
    model: string;

    /**
     * Provider name (e.g., 'openai', 'anthropic', 'google')
     */
    provider: string;

    /**
     * Maximum context length for the model (required for custom models)
     */
    context_length?: number | null;

    /**
     * Input token price per million tokens in USD (required for custom models)
     */
    input_price?: number | null;

    /**
     * Whether this is a custom model not in Not Diamond's supported model list
     */
    is_custom?: boolean;

    /**
     * Average latency in seconds (required for custom models)
     */
    latency?: number | null;

    /**
     * Output token price per million tokens in USD (required for custom models)
     */
    output_price?: number | null;
  }
}

export declare namespace Report {
  export {
    type ReportEvaluateHallucinationResponse as ReportEvaluateHallucinationResponse,
    type ReportLatencyResponse as ReportLatencyResponse,
    type ReportSubmitFeedbackResponse as ReportSubmitFeedbackResponse,
    type ReportEvaluateHallucinationParams as ReportEvaluateHallucinationParams,
    type ReportLatencyParams as ReportLatencyParams,
    type ReportSubmitFeedbackParams as ReportSubmitFeedbackParams,
  };
}
