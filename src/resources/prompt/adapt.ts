// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Adapt extends APIResource {
  /**
   * Adapt your prompt from one LLM to work optimally across different target LLMs.
   *
   * This endpoint automatically optimizes your prompt (system prompt + user message
   * template) to achieve better performance when switching between different
   * language models. Each model has unique characteristics, and what works well for
   * GPT-4 might not work as well for Claude or Gemini.
   *
   * **How Prompt Adaptation Works:**
   *
   * 1. You provide your current prompt optimized for an origin model
   * 2. You specify target models you want to adapt to
   * 3. You provide evaluation examples (golden records) with expected answers
   * 4. The system runs optimization to find the best prompt for each target model
   * 5. You receive adapted prompts that perform well on your target models
   *
   * **Evaluation Metrics:** Choose either a standard metric or provide custom
   * evaluation:
   *
   * - **Standard metrics**: LLMaaJ:SQL, LLMaaJ:Sem_Sim_1/3/10 (semantic similarity),
   *   JSON_Match
   * - **Custom evaluation**: Provide evaluation_config with your own LLM judge,
   *   prompt, and cutoff
   *
   * **Dataset Requirements:**
   *
   * - Minimum 25 examples in train_goldens (more examples = better adaptation)
   * - Each example must have fields matching your template placeholders
   * - Supervised evaluation requires 'answer' field in each golden record
   * - Unsupervised evaluation can work without answers
   *
   * **Training Time:**
   *
   * - Processing is asynchronous and typically takes 10-30 minutes
   * - Time depends on: number of target models, dataset size, model availability
   * - Use the returned adaptation_run_id to check status and retrieve results
   *
   * **Subscription Tiers:**
   *
   * - Free: 1 target model
   * - Starter: 3 target models
   * - Startup: 5 target models
   * - Enterprise: 10 target models
   *
   * **Best Practices:**
   *
   * 1. Use diverse, representative examples from your production workload
   * 2. Include examples for best results (25 minimum)
   * 3. Ensure consistent evaluation across all examples
   * 4. Test both train_goldens and test_goldens split for validation
   * 5. Use the same model versions you'll use in production
   *
   * **Example Workflow:**
   *
   * ```
   * 1. POST /v2/prompt/adapt - Submit adaptation request
   * 2. GET /v2/prompt/adaptStatus/{id} - Poll status until completed
   * 3. GET /v2/prompt/adaptResults/{id} - Retrieve optimized prompts
   * 4. Use optimized prompts in production with target models
   * ```
   *
   * **Related Documentation:** See
   * https://docs.notdiamond.ai/docs/adapting-prompts-to-new-models for detailed
   * guide.
   *
   * @example
   * ```ts
   * const adapt = await client.prompt.adapt.create({
   *   fields: ['question'],
   *   system_prompt: 'You are a helpful assistant that answers questions accurately.',
   *   target_models: [
   *     { provider: 'anthropic', model: 'claude-sonnet-4-5-20250929' },
   *     { provider: 'google', model: 'gemini-2.5-flash' },
   *   ],
   *   template: 'Question: {question}\nAnswer:',
   *   evaluation_metric: 'LLMaaJ:Sem_Sim_3',
   *   origin_model: { provider: 'openai', model: 'gpt-4o' },
   *   test_goldens: [
   *     {
   *       fields: { ... },
   *       answer: '9',
   *     },
   *     {
   *       fields: { ... },
   *       answer: 'Pacific Ocean',
   *     },
   *   ],
   *   train_goldens: [
   *     {
   *       fields: { ... },
   *       answer: '4',
   *     },
   *     {
   *       fields: { ... },
   *       answer: 'Paris',
   *     },
   *     {
   *       fields: { ... },
   *       answer: 'William Shakespeare',
   *     },
   *     {
   *       fields: { ... },
   *       answer: 'Water',
   *     },
   *     {
   *       fields: { ... },
   *       answer: '7',
   *     },
   *   ],
   * });
   * ```
   */
  create(body: AdaptCreateParams, options?: RequestOptions): APIPromise<AdaptCreateResponse> {
    return this._client.post('/v2/prompt/adapt', { body, ...options });
  }

  /**
   * Get LLM usage costs for a specific prompt adaptation run.
   *
   * This endpoint returns the total cost and detailed usage records for all LLM
   * requests made during a prompt adaptation run. Use this to track costs associated
   * with optimizing prompts for different target models.
   *
   * **Cost Breakdown:**
   *
   * - Total cost across all models used in the adaptation
   * - Individual usage records with provider, model, tokens, and costs
   * - Timestamps for each LLM request
   * - Task type (e.g., optimization, evaluation)
   *
   * **Access Control:**
   *
   * - Only accessible by the user who created the adaptation run
   * - Requires prompt adaptation access
   *
   * @example
   * ```ts
   * const response = await client.prompt.adapt.getCosts(
   *   'adaptation_run_id',
   * );
   * ```
   */
  getCosts(adaptationRunID: string, options?: RequestOptions): APIPromise<AdaptGetCostsResponse> {
    return this._client.get(path`/v2/prompt/adapt/${adaptationRunID}/costs`, options);
  }
}

/**
 * A training or test example for prompt adaptation.
 */
export interface GoldenRecord {
  /**
   * Dictionary mapping field names to their values. Keys must match the fields
   * specified in the template
   */
  fields: { [key: string]: string };

  /**
   * Expected answer for supervised evaluation. Required for supervised metrics,
   * optional for unsupervised
   */
  answer?: string | null;
}

/**
 * Model for specifying an LLM provider in API requests.
 */
export interface RequestProvider {
  /**
   * Model name (e.g., 'gpt-4o', 'claude-sonnet-4-5-20250929')
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

/**
 * Response model for POST /v2/prompt/adapt endpoint.
 *
 * Returned immediately after submitting a prompt adaptation request. The
 * adaptation process runs asynchronously, so use the returned adaptation_run_id to
 * track progress and retrieve results when complete.
 *
 * **Next steps:**
 *
 * 1. Store the adaptation_run_id
 * 2. Poll GET /v2/prompt/adaptStatus/{adaptation_run_id} to check progress
 * 3. When status is 'completed', retrieve optimized prompts from GET
 *    /v2/prompt/adaptResults/{adaptation_run_id}
 * 4. Use the optimized prompts with your target models
 */
export interface AdaptCreateResponse {
  /**
   * Unique identifier for this adaptation run. Use this to poll status and retrieve
   * optimized prompts when complete
   */
  adaptation_run_id: string;
}

/**
 * Response model for GET /v2/prompt/adapt/{adaptation_run_id}/costs endpoint.
 *
 * Contains the total LLM costs and detailed usage records for a prompt adaptation
 * run. Use this to track costs associated with optimizing prompts for different
 * target models.
 */
export interface AdaptGetCostsResponse {
  /**
   * Unique identifier for the adaptation run
   */
  adaptation_run_id: string;

  /**
   * Total cost in USD across all LLM requests in this adaptation run
   */
  total_cost: number;

  /**
   * Detailed usage records for each LLM request made during the adaptation
   */
  usage_records: Array<AdaptGetCostsResponse.UsageRecord>;
}

export namespace AdaptGetCostsResponse {
  /**
   * Individual LLM usage record with token counts and cost breakdown.
   *
   * Returned by GET /llm-usage endpoint and included in AdaptationRunCostResponse.
   * Each record represents a single LLM API call with detailed usage metrics.
   */
  export interface UsageRecord {
    /**
     * Unique identifier for this usage record
     */
    id: string;

    /**
     * Adaptation run ID this usage is associated with
     */
    adaptation_run_id: string;

    /**
     * Cost of input tokens in USD
     */
    input_cost: number;

    /**
     * Number of input tokens consumed
     */
    input_tokens: number;

    /**
     * Model name (e.g., 'gpt-4', 'claude-3-opus-20240229')
     */
    model: string;

    /**
     * Organization ID associated with the request
     */
    organization_id: string;

    /**
     * Cost of output tokens in USD
     */
    output_cost: number;

    /**
     * Number of output tokens generated
     */
    output_tokens: number;

    /**
     * LLM provider (e.g., 'openai', 'anthropic', 'google')
     */
    provider: string;

    /**
     * Type of task (e.g., 'optimization', 'evaluation')
     */
    task_type: string;

    /**
     * Unix timestamp when the request was made
     */
    timestamp: number;

    /**
     * Total cost (input + output) in USD
     */
    total_cost: number;

    /**
     * User ID who made the request
     */
    user_id: string;
  }
}

export interface AdaptCreateParams {
  /**
   * List of field names that will be substituted into the template. Must match keys
   * in golden records
   */
  fields: Array<string>;

  /**
   * System prompt to use with the origin model. This sets the context and role for
   * the LLM
   */
  system_prompt: string;

  /**
   * List of models to adapt the prompt for. Maximum count depends on your
   * subscription tier (Free: 1, Starter: 3, Startup: 5, Enterprise: 10)
   */
  target_models: Array<RequestProvider>;

  /**
   * User message template with placeholders for fields. Use curly braces for field
   * substitution
   */
  template: string;

  evaluation_config?: string | null;

  evaluation_metric?: string | null;

  /**
   * Training examples (legacy parameter). Use train_goldens and test_goldens for
   * better control. Minimum 25 examples
   */
  goldens?: Array<GoldenRecord> | null;

  /**
   * Model for specifying an LLM provider in API requests.
   */
  origin_model?: RequestProvider | null;

  /**
   * Optional baseline score for the origin model. If provided, can skip origin model
   * evaluation
   */
  origin_model_evaluation_score?: number | null;

  /**
   * Test examples for evaluation. Required if train_goldens is provided. Used to
   * measure final performance on held-out data
   */
  test_goldens?: Array<GoldenRecord> | null;

  /**
   * Training examples for prompt optimization. Minimum 25 examples required. Cannot
   * be used with 'goldens' parameter
   */
  train_goldens?: Array<GoldenRecord> | null;
}

export declare namespace Adapt {
  export {
    type GoldenRecord as GoldenRecord,
    type RequestProvider as RequestProvider,
    type AdaptCreateResponse as AdaptCreateResponse,
    type AdaptGetCostsResponse as AdaptGetCostsResponse,
    type AdaptCreateParams as AdaptCreateParams,
  };
}
