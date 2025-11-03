// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PromptAdaptationAPI from './prompt-adaptation';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PromptAdaptation extends APIResource {
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
   * const response = await client.promptAdaptation.adapt({
   *   fields: ['question'],
   *   system_prompt: 'You are a helpful assistant that answers questions accurately.',
   *   target_models: [
   *     { provider: 'anthropic', model: 'claude-sonnet-4-5-20250929' },
   *     { provider: 'google', model: 'gemini-1.5-pro' },
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
  adapt(
    body: PromptAdaptationAdaptParams,
    options?: RequestOptions,
  ): APIPromise<PromptAdaptationAdaptResponse> {
    return this._client.post('/v2/prompt/adapt', { body, ...options });
  }

  /**
   * Retrieve the complete results of a prompt adaptation run, including optimized
   * prompts for all target models.
   *
   * This endpoint returns the adapted prompts and evaluation metrics for each target
   * model in your adaptation request. Call this endpoint after the adaptation status
   * is 'completed' to get your optimized prompts.
   *
   * **Response Structure:**
   *
   * - **origin_model**: Baseline performance of your original prompt on the origin
   *   model
   *   - Includes: system_prompt, user_message_template, score, evaluation metrics,
   *     cost
   * - **target_models**: Array of results for each target model
   *   - Includes: optimized system_prompt, user_message_template, template_fields
   *   - pre_optimization_score: Performance before adaptation
   *   - post_optimization_score: Performance after adaptation
   *   - Evaluation metrics and cost information
   *
   * **Using Adapted Prompts:**
   *
   * 1. Extract the `system_prompt` and `user_message_template` from each target
   *    model result
   * 2. Use `user_message_template_fields` to know which fields to substitute
   * 3. Apply the optimized prompts when calling the respective target models
   * 4. Compare pre/post optimization scores to see improvement
   *
   * **Evaluation Scores:**
   *
   * - Scores range from 0-10 (higher is better)
   * - Compare origin_model score with target_models pre_optimization_score for
   *   baseline
   * - Compare pre_optimization_score with post_optimization_score to see improvement
   *   from adaptation
   * - Typical improvements range from 5-30% on evaluation metrics
   *
   * **Status Handling:**
   *
   * - If adaptation is still processing, target model results will have
   *   `result_status: "processing"`
   * - Only completed target models will have system_prompt and template values
   * - Failed target models will have `result_status: "failed"` with null values
   *
   * **Cost Information:**
   *
   * - Each model result includes cost in USD for the adaptation process
   * - Costs vary based on model pricing and number of evaluation examples
   * - Typical range: $0.10 - $2.00 per target model
   *
   * **Best Practices:**
   *
   * 1. Wait for status 'completed' before calling this endpoint
   * 2. Check result_status for each target model
   * 3. Validate that post_optimization_score > pre_optimization_score
   * 4. Save optimized prompts for production use
   * 5. A/B test adapted prompts against originals in production
   *
   * @example
   * ```ts
   * const adaptationRunResults =
   *   await client.promptAdaptation.getAdaptResults(
   *     'adaptation_run_id',
   *   );
   * ```
   */
  getAdaptResults(adaptationRunID: string, options?: RequestOptions): APIPromise<AdaptationRunResults> {
    return this._client.get(path`/v2/prompt/adaptResults/${adaptationRunID}`, options);
  }

  /**
   * Get Adapt Run Results
   *
   * @example
   * ```ts
   * const adaptationRunResults =
   *   await client.promptAdaptation.getAdaptRunResults(
   *     'adaptation_run_id',
   *     { user_id: 'user_id', 'x-token': 'x-token' },
   *   );
   * ```
   */
  getAdaptRunResults(
    adaptationRunID: string,
    params: PromptAdaptationGetAdaptRunResultsParams,
    options?: RequestOptions,
  ): APIPromise<AdaptationRunResults> {
    const { user_id, 'x-token': xToken } = params;
    return this._client.get(path`/v2/prompt/frontendAdaptRunResults/${user_id}/${adaptationRunID}`, {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Get Adapt Runs
   *
   * @example
   * ```ts
   * const adaptationRunResults =
   *   await client.promptAdaptation.getAdaptRuns('user_id', {
   *     'x-token': 'x-token',
   *   });
   * ```
   */
  getAdaptRuns(
    userID: string,
    params: PromptAdaptationGetAdaptRunsParams,
    options?: RequestOptions,
  ): APIPromise<PromptAdaptationGetAdaptRunsResponse> {
    const { 'x-token': xToken } = params;
    return this._client.get(path`/v2/prompt/frontendAdaptRuns/${userID}`, {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Check the status of a prompt adaptation run.
   *
   * Use this endpoint to poll the status of your adaptation request. Processing is
   * asynchronous, so you'll need to check periodically until the status indicates
   * completion.
   *
   * **Status Values:**
   *
   * - `created`: Initial state, not yet processing
   * - `queued`: Waiting for processing capacity (check queue_position)
   * - `processing`: Currently optimizing prompts
   * - `completed`: All target models have been processed successfully
   * - `failed`: One or more target models failed to process
   *
   * **Polling Recommendations:**
   *
   * - Poll every 30-60 seconds during processing
   * - Check queue_position if status is 'queued' to estimate wait time
   * - Stop polling once status is 'completed' or 'failed'
   * - Use GET /v2/prompt/adaptResults to retrieve results after completion
   *
   * **Queue Position:**
   *
   * - Only present when status is 'queued'
   * - Lower numbers mean earlier processing (position 1 is next)
   * - Typical wait time: 1-5 minutes per position
   *
   * **Note:** This endpoint only returns status information. To get the actual
   * adapted prompts and evaluation results, use GET /v2/prompt/adaptResults once
   * status is 'completed'.
   *
   * @example
   * ```ts
   * const response =
   *   await client.promptAdaptation.getAdaptStatus(
   *     'adaptation_run_id',
   *   );
   * ```
   */
  getAdaptStatus(
    adaptationRunID: string,
    options?: RequestOptions,
  ): APIPromise<PromptAdaptationGetAdaptStatusResponse> {
    return this._client.get(path`/v2/prompt/adaptStatus/${adaptationRunID}`, options);
  }

  /**
   * Get LLM costs for a specific adaptation run
   *
   * @example
   * ```ts
   * const response =
   *   await client.promptAdaptation.retrieveCosts(
   *     'adaptation_run_id',
   *   );
   * ```
   */
  retrieveCosts(
    adaptationRunID: string,
    options?: RequestOptions,
  ): APIPromise<PromptAdaptationRetrieveCostsResponse> {
    return this._client.get(path`/v1/adaptation-runs/${adaptationRunID}/costs`, options);
  }
}

/**
 * Complete results for a prompt adaptation run including all target models.
 */
export interface AdaptationRunResults {
  /**
   * Unique ID for this adaptation run
   */
  id: string;

  /**
   * Timestamp when this adaptation run was created
   */
  created_at: string;

  /**
   * Overall status of the adaptation run
   */
  job_status: JobStatus;

  /**
   * Results for each target model with optimized prompts
   */
  target_models: Array<AdaptationRunResults.TargetModel>;

  /**
   * Timestamp of last update to this adaptation run
   */
  updated_at: string | null;

  evaluation_config?: string | null;

  evaluation_metric?: string | null;

  /**
   * Metrics for the LLM requests made during the adaptation run
   */
  llm_request_metrics?: { [key: string]: number };

  /**
   * Results for the origin model (baseline performance)
   */
  origin_model?: AdaptationRunResults.OriginModel | null;
}

export namespace AdaptationRunResults {
  /**
   * Results for a single target model adaptation.
   */
  export interface TargetModel {
    cost: number | null;

    model_name: string;

    post_optimization_evals: { [key: string]: unknown } | null;

    post_optimization_score: number | null;

    pre_optimization_evals: { [key: string]: unknown } | null;

    pre_optimization_score: number | null;

    /**
     * Status of this specific target model adaptation
     */
    result_status: PromptAdaptationAPI.JobStatus | null;

    /**
     * Optimized system prompt for this target model
     */
    system_prompt: string | null;

    task_type: string | null;

    /**
     * Optimized user message template for this target model
     */
    user_message_template: string | null;

    /**
     * Field names used in the optimized template
     */
    user_message_template_fields: Array<string> | null;
  }

  /**
   * Results for the origin model (baseline performance)
   */
  export interface OriginModel {
    cost: number | null;

    evals: { [key: string]: unknown } | null;

    model_name: string | null;

    result_status: PromptAdaptationAPI.JobStatus | null;

    score: number | null;

    system_prompt: string | null;

    user_message_template: string | null;
  }
}

export type JobStatus = 'created' | 'queued' | 'processing' | 'completed' | 'failed';

/**
 * Response from prompt adaptation request.
 */
export interface PromptAdaptationAdaptResponse {
  /**
   * Unique ID for this adaptation run. Use this to check status and retrieve results
   */
  adaptation_run_id: string;
}

export type PromptAdaptationGetAdaptRunsResponse = Array<AdaptationRunResults>;

/**
 * Status response for a prompt adaptation run.
 */
export interface PromptAdaptationGetAdaptStatusResponse {
  /**
   * Unique ID for this adaptation run. Use this to check status and retrieve results
   */
  adaptation_run_id: string;

  /**
   * Current status of the adaptation run (created, queued, processing, completed, or
   * failed)
   */
  status: JobStatus;

  /**
   * Position in queue if status is 'queued'. Lower numbers mean earlier processing
   */
  queue_position?: number | null;
}

export interface PromptAdaptationRetrieveCostsResponse {
  adaptation_run_id: string;

  total_cost: number;

  usage_records: Array<PromptAdaptationRetrieveCostsResponse.UsageRecord>;
}

export namespace PromptAdaptationRetrieveCostsResponse {
  export interface UsageRecord {
    id: string;

    adaptation_run_id: string;

    input_cost: number;

    input_tokens: number;

    model: string;

    organization_id: string;

    output_cost: number;

    output_tokens: number;

    provider: string;

    task_type: string;

    timestamp: number;

    total_cost: number;

    user_id: string;
  }
}

export interface PromptAdaptationAdaptParams {
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
   * subscription tier
   */
  target_models: Array<PromptAdaptationAdaptParams.TargetModel>;

  /**
   * User message template with placeholders for fields. Use curly braces for field
   * substitution
   */
  template: string;

  evaluation_config?: string | null;

  evaluation_metric?: string | null;

  /**
   * Training examples (legacy parameter). Use train_goldens and test_goldens for
   * better control
   */
  goldens?: Array<PromptAdaptationAdaptParams.Golden> | null;

  /**
   * Model for specifying an LLM provider in API requests.
   */
  origin_model?: PromptAdaptationAdaptParams.OriginModel | null;

  /**
   * Optional baseline score for the origin model
   */
  origin_model_evaluation_score?: number | null;

  /**
   * Test examples for evaluation. Required if train_goldens is provided
   */
  test_goldens?: Array<PromptAdaptationAdaptParams.TestGolden> | null;

  /**
   * Training examples for prompt optimization. Minimum 25 examples required
   */
  train_goldens?: Array<PromptAdaptationAdaptParams.TrainGolden> | null;
}

export namespace PromptAdaptationAdaptParams {
  /**
   * Model for specifying an LLM provider in API requests.
   */
  export interface TargetModel {
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
   * A training or test example for prompt adaptation.
   */
  export interface Golden {
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
  export interface OriginModel {
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
   * A training or test example for prompt adaptation.
   */
  export interface TestGolden {
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
   * A training or test example for prompt adaptation.
   */
  export interface TrainGolden {
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
}

export interface PromptAdaptationGetAdaptRunResultsParams {
  /**
   * Path param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;
}

export interface PromptAdaptationGetAdaptRunsParams {
  'x-token': string;
}

export declare namespace PromptAdaptation {
  export {
    type AdaptationRunResults as AdaptationRunResults,
    type JobStatus as JobStatus,
    type PromptAdaptationAdaptResponse as PromptAdaptationAdaptResponse,
    type PromptAdaptationGetAdaptRunsResponse as PromptAdaptationGetAdaptRunsResponse,
    type PromptAdaptationGetAdaptStatusResponse as PromptAdaptationGetAdaptStatusResponse,
    type PromptAdaptationRetrieveCostsResponse as PromptAdaptationRetrieveCostsResponse,
    type PromptAdaptationAdaptParams as PromptAdaptationAdaptParams,
    type PromptAdaptationGetAdaptRunResultsParams as PromptAdaptationGetAdaptRunResultsParams,
    type PromptAdaptationGetAdaptRunsParams as PromptAdaptationGetAdaptRunsParams,
  };
}
