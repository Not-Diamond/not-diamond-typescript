// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PromptAPI from './prompt';
import * as AdaptAPI from './adapt';
import {
  Adapt,
  AdaptCreateParams,
  AdaptCreateResponse,
  AdaptGetCostsResponse,
  GoldenRecord,
  RequestProvider,
} from './adapt';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Prompt extends APIResource {
  adapt: AdaptAPI.Adapt = new AdaptAPI.Adapt(this._client);

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
   * const response = await client.prompt.getAdaptResults(
   *   'adaptation_run_id',
   * );
   * ```
   */
  getAdaptResults(
    adaptationRunID: string,
    options?: RequestOptions,
  ): APIPromise<PromptGetAdaptResultsResponse> {
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
   * const response = await client.prompt.getAdaptStatus(
   *   'adaptation_run_id',
   * );
   * ```
   */
  getAdaptStatus(
    adaptationRunID: string,
    options?: RequestOptions,
  ): APIPromise<PromptGetAdaptStatusResponse> {
    return this._client.get(path`/v2/prompt/adaptStatus/${adaptationRunID}`, options);
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
export interface PromptGetAdaptResultsResponse {
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
  target_models: Array<PromptGetAdaptResultsResponse.TargetModel>;

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
  origin_model?: PromptGetAdaptResultsResponse.OriginModel | null;
}

export namespace PromptGetAdaptResultsResponse {
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
    result_status?: PromptAPI.JobStatus | null;

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
    result_status?: PromptAPI.JobStatus | null;

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
export interface PromptGetAdaptStatusResponse {
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

Prompt.Adapt = Adapt;

export declare namespace Prompt {
  export {
    type JobStatus as JobStatus,
    type PromptGetAdaptResultsResponse as PromptGetAdaptResultsResponse,
    type PromptGetAdaptStatusResponse as PromptGetAdaptStatusResponse,
  };

  export {
    Adapt as Adapt,
    type GoldenRecord as GoldenRecord,
    type RequestProvider as RequestProvider,
    type AdaptCreateResponse as AdaptCreateResponse,
    type AdaptGetCostsResponse as AdaptGetCostsResponse,
    type AdaptCreateParams as AdaptCreateParams,
  };
}
