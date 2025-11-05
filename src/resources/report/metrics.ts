// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Metrics extends APIResource {
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
   * const response = await client.report.metrics.submitFeedback(
   *   {
   *     body: {
   *       session_id: '550e8400-e29b-41d4-a716-446655440000',
   *       provider: { provider: 'openai', model: 'gpt-4o' },
   *       feedback: { accuracy: 1 },
   *     },
   *   },
   * );
   * ```
   */
  submitFeedback(
    params: MetricSubmitFeedbackParams,
    options?: RequestOptions,
  ): APIPromise<MetricSubmitFeedbackResponse> {
    const { body } = params;
    return this._client.post('/v2/report/metrics/feedback', { body: body, ...options });
  }
}

/**
 * Response from feedback submission endpoint.
 */
export interface MetricSubmitFeedbackResponse {
  /**
   * The processed feedback
   */
  feedback: { [key: string]: unknown };

  /**
   * The session ID for which feedback was submitted
   */
  session_id: string;
}

export interface MetricSubmitFeedbackParams {
  body: unknown;
}

export declare namespace Metrics {
  export {
    type MetricSubmitFeedbackResponse as MetricSubmitFeedbackResponse,
    type MetricSubmitFeedbackParams as MetricSubmitFeedbackParams,
  };
}
