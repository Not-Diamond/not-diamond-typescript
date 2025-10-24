// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Report extends APIResource {
  /**
   * Evaluate Hallucination
   */
  evaluateHallucination(
    body: ReportEvaluateHallucinationParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post('/v2/report/hallucination', { body, ...options });
  }
}

export type ReportEvaluateHallucinationResponse = unknown;

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

export declare namespace Report {
  export {
    type ReportEvaluateHallucinationResponse as ReportEvaluateHallucinationResponse,
    type ReportEvaluateHallucinationParams as ReportEvaluateHallucinationParams,
  };
}
