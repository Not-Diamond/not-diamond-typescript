// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PromptAdaptationAPI from './prompt-adaptation';
import { APIPromise } from '../core/api-promise';
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
}

/**
 * Response model for GET /v2/prompt/adaptResults/{adaptation_run_id} endpoint.
 *
 * Contains the complete results of a prompt adaptation run, including optimized
 * prompts and evaluation metrics for all target models. Use this to retrieve your
 * adapted prompts after the adaptation status is 'completed'.
 *
 * The response includes:
 *
 * - Baseline performance of your original prompt on the origin model
 * - Optimized prompts for each target model with pre/post optimization scores
 * - Evaluation metrics and cost information for each model
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
   * Overall status of the adaptation run (queued, running, completed, failed)
   */
  job_status: JobStatus;

  /**
   * Results for each target model with optimized prompts and improvement scores
   */
  target_models: Array<AdaptationRunResults.TargetModel>;

  /**
   * Timestamp of last update to this adaptation run
   */
  updated_at: string | null;

  evaluation_config?: string | null;

  evaluation_metric?: string | null;

  /**
   * Metrics for the LLM requests made during the adaptation run (e.g.,
   * total_requests, avg_latency)
   */
  llm_request_metrics?: { [key: string]: number };

  /**
   * Baseline results for the origin model in prompt adaptation.
   *
   * Part of AdaptationRunResultsResponse. Contains the performance metrics and
   * prompt configuration for your original prompt on the origin model. This serves
   * as the baseline to compare against optimized prompts for target models.
   *
   * **Fields include:**
   *
   * - Original system prompt and user message template
   * - Baseline performance score and evaluation metrics
   * - Cost of running the baseline evaluation
   * - Job status for the origin model evaluation
   */
  origin_model?: AdaptationRunResults.OriginModel | null;
}

export namespace AdaptationRunResults {
  /**
   * Optimized prompt results for a single target model in prompt adaptation.
   *
   * Part of AdaptationRunResultsResponse. Contains the optimized system prompt and
   * user message template for a specific target model, along with performance scores
   * before and after optimization. Use these optimized prompts with the target model
   * to achieve better performance than the original prompt.
   *
   * **Key metrics:**
   *
   * - **pre_optimization_score**: Performance with original prompt on this target
   *   model
   * - **post_optimization_score**: Performance with optimized prompt on this target
   *   model
   * - **Score improvement**: post - pre shows how much optimization helped
   *
   * **Usage:**
   *
   * 1. Extract the optimized system_prompt and user_message_template
   * 2. Replace placeholders in user_message_template using fields from your data
   * 3. Use these prompts when calling this target model
   * 4. Compare pre/post scores to see improvement gained
   */
  export interface TargetModel {
    cost: number | null;

    model_name: string;

    post_optimization_evals: { [key: string]: unknown } | null;

    post_optimization_score: number | null;

    pre_optimization_evals: { [key: string]: unknown } | null;

    pre_optimization_score: number | null;

    task_type: string | null;

    /**
     * Status enum for asynchronous jobs (prompt adaptation, custom router training,
     * etc.).
     *
     * Represents the current state of a long-running operation:
     *
     * - **created**: Job has been initialized but not yet queued
     * - **queued**: Job is waiting in the queue to be processed
     * - **processing**: Job is currently being executed
     * - **completed**: Job finished successfully and results are available
     * - **failed**: Job encountered an error and did not complete
     */
    result_status?: PromptAdaptationAPI.JobStatus | null;

    /**
     * Optimized system prompt for this target model. Use this as the system message in
     * your LLM calls
     */
    system_prompt?: string | null;

    /**
     * Optimized user message template with placeholders. Substitute fields using your
     * data before calling the LLM
     */
    user_message_template?: string | null;

    /**
     * List of field names to substitute in the template (e.g., ['question',
     * 'context']). These match the curly-brace placeholders in user_message_template
     */
    user_message_template_fields?: Array<string> | null;
  }

  /**
   * Baseline results for the origin model in prompt adaptation.
   *
   * Part of AdaptationRunResultsResponse. Contains the performance metrics and
   * prompt configuration for your original prompt on the origin model. This serves
   * as the baseline to compare against optimized prompts for target models.
   *
   * **Fields include:**
   *
   * - Original system prompt and user message template
   * - Baseline performance score and evaluation metrics
   * - Cost of running the baseline evaluation
   * - Job status for the origin model evaluation
   */
  export interface OriginModel {
    cost: number | null;

    evals: { [key: string]: unknown } | null;

    model_name: string | null;

    score: number | null;

    /**
     * Status enum for asynchronous jobs (prompt adaptation, custom router training,
     * etc.).
     *
     * Represents the current state of a long-running operation:
     *
     * - **created**: Job has been initialized but not yet queued
     * - **queued**: Job is waiting in the queue to be processed
     * - **processing**: Job is currently being executed
     * - **completed**: Job finished successfully and results are available
     * - **failed**: Job encountered an error and did not complete
     */
    result_status?: PromptAdaptationAPI.JobStatus | null;

    /**
     * Original system prompt used for the origin model
     */
    system_prompt?: string | null;

    /**
     * Original user message template used for the origin model
     */
    user_message_template?: string | null;
  }
}

/**
 * Status enum for asynchronous jobs (prompt adaptation, custom router training,
 * etc.).
 *
 * Represents the current state of a long-running operation:
 *
 * - **created**: Job has been initialized but not yet queued
 * - **queued**: Job is waiting in the queue to be processed
 * - **processing**: Job is currently being executed
 * - **completed**: Job finished successfully and results are available
 * - **failed**: Job encountered an error and did not complete
 */
export type JobStatus = 'created' | 'queued' | 'processing' | 'completed' | 'failed';

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
export interface PromptAdaptationAdaptResponse {
  /**
   * Unique identifier for this adaptation run. Use this to poll status and retrieve
   * optimized prompts when complete
   */
  adaptation_run_id: string;
}

/**
 * Response model for GET /v2/prompt/adaptStatus/{adaptation_run_id} endpoint.
 *
 * Returns the current status of an asynchronous prompt adaptation job. Poll this
 * endpoint periodically to track progress. When status is 'completed', you can
 * retrieve the optimized prompts using the /adaptResults endpoint.
 *
 * **Status values:**
 *
 * - **created**: Job has been initialized
 * - **queued**: Waiting in queue (check queue_position for your place in line)
 * - **processing**: Currently running optimization
 * - **completed**: Finished successfully, results available via /adaptResults
 * - **failed**: Encountered an error during processing
 *
 * **Polling recommendations:**
 *
 * - Poll every 30-60 seconds while status is incomplete
 * - Stop polling once status is 'completed' or 'failed'
 * - Adaptation typically takes 10-30 minutes total
 */
export interface PromptAdaptationGetAdaptStatusResponse {
  /**
   * Unique identifier for this adaptation run. Use this to poll status and retrieve
   * optimized prompts when complete
   */
  adaptation_run_id: string;

  /**
   * Current status of the adaptation run. Poll until this is 'completed' or 'failed'
   */
  status: JobStatus;

  /**
   * Position in queue when status is 'queued'. Lower numbers process sooner. Null
   * when not queued
   */
  queue_position?: number | null;
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
   * subscription tier (Free: 1, Starter: 3, Startup: 5, Enterprise: 10)
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
   * better control. Minimum 25 examples
   */
  goldens?: Array<PromptAdaptationAdaptParams.Golden> | null;

  /**
   * Model for specifying an LLM provider in API requests.
   */
  origin_model?: PromptAdaptationAdaptParams.OriginModel | null;

  /**
   * Optional baseline score for the origin model. If provided, can skip origin model
   * evaluation
   */
  origin_model_evaluation_score?: number | null;

  /**
   * Test examples for evaluation. Required if train_goldens is provided. Used to
   * measure final performance on held-out data
   */
  test_goldens?: Array<PromptAdaptationAdaptParams.TestGolden> | null;

  /**
   * Training examples for prompt optimization. Minimum 25 examples required. Cannot
   * be used with 'goldens' parameter
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

export declare namespace PromptAdaptation {
  export {
    type AdaptationRunResults as AdaptationRunResults,
    type JobStatus as JobStatus,
    type PromptAdaptationAdaptResponse as PromptAdaptationAdaptResponse,
    type PromptAdaptationGetAdaptStatusResponse as PromptAdaptationGetAdaptStatusResponse,
    type PromptAdaptationAdaptParams as PromptAdaptationAdaptParams,
  };
}
