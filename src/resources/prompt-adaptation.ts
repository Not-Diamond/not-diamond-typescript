// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class PromptAdaptation extends APIResource {}

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
 * - **cancelled**: Job was cancelled due to a restart operation
 */
export type JobStatus = 'created' | 'queued' | 'processing' | 'completed' | 'failed' | 'cancelled';

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

export declare namespace PromptAdaptation {
  export {
    type GoldenRecord as GoldenRecord,
    type JobStatus as JobStatus,
    type RequestProvider as RequestProvider,
  };
}
