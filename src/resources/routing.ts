// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Routing extends APIResource {
  /**
   * Submit a survey response for personalized routing setup.
   *
   * This admin endpoint processes survey responses to set up personalized routing
   * configurations for users based on their use case, LLM preferences, and
   * constraints.
   *
   * **Survey Data:**
   *
   * - User information and use case description
   * - Preferred LLM providers and models
   * - Constraint priorities (quality, cost, latency)
   * - Optional prompts and evaluation datasets
   *
   * **File Uploads:**
   *
   * - `prompt_file`: Optional CSV file with prompts
   * - `dataset_file`: Optional CSV file with evaluation dataset
   *
   * **Note:** This is an admin-only endpoint for internal use.
   *
   * @example
   * ```ts
   * const response = await client.routing.createSurveyResponse({
   *   constraint_priorities: 'constraint_priorities',
   *   email: 'email',
   *   llm_providers: 'llm_providers',
   *   use_case_desc: 'use_case_desc',
   *   user_id: 'user_id',
   *   'x-token': 'x-token',
   * });
   * ```
   */
  createSurveyResponse(
    params: RoutingCreateSurveyResponseParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post(
      '/v2/pzn/surveyResponse',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ 'x-token': xToken }, options?.headers]) },
        this._client,
      ),
    );
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
   * const response = await client.routing.selectModel({
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
    params: RoutingSelectModelParams,
    options?: RequestOptions,
  ): APIPromise<RoutingSelectModelResponse> {
    const { body, type } = params;
    return this._client.post('/v2/modelRouter/modelSelect', { query: { type }, body: body, ...options });
  }

  /**
   * Train a custom router on your evaluation data to optimize routing for your
   * specific use case.
   *
   * This endpoint allows you to train a domain-specific router that learns which
   * models perform best for different types of queries in your application. The
   * router analyzes your evaluation dataset, clusters similar queries, and learns
   * model performance patterns.
   *
   * **Training Process:**
   *
   * 1. Upload a CSV file with your evaluation data
   * 2. Specify which models to route between
   * 3. Define the evaluation metric (score column)
   * 4. The system trains asynchronously and returns a preference_id
   * 5. Use the preference_id in model_select() calls once training completes
   *
   * **Dataset Requirements:**
   *
   * - Format: CSV file
   * - Minimum samples: 25 (more is better for accuracy)
   * - Required columns:
   *   - Prompt column (specified in prompt_column parameter)
   *   - For each model: `{provider}/{model}/score` and `{provider}/{model}/response`
   *
   * **Example CSV structure:**
   *
   * ```
   * prompt,openai/gpt-4o/score,openai/gpt-4o/response,anthropic/claude-sonnet-4-5-20250929/score,anthropic/claude-sonnet-4-5-20250929/response
   * "Explain quantum computing",0.95,"Quantum computing uses...",0.87,"Quantum computers leverage..."
   * "Write a Python function",0.82,"def my_function()...",0.91,"Here's a Python function..."
   * ```
   *
   * **Model Selection:**
   *
   * - Specify standard models: `{"provider": "openai", "model": "gpt-4o"}`
   * - Or custom models with pricing:
   *   `{"provider": "custom", "model": "my-model", "is_custom": true, "input_price": 10.0, "output_price": 30.0, "context_length": 8192, "latency": 1.5}`
   *
   * **Training Time:**
   *
   * - Training is asynchronous and typically takes 5-15 minutes
   * - Larger datasets or more models take longer
   * - You'll receive a preference_id immediately
   * - Check training status by attempting to use the preference_id in model_select()
   *
   * **Best Practices:**
   *
   * 1. Use diverse, representative examples from your production workload
   * 2. Include at least 50-100 samples for best results
   * 3. Ensure consistent evaluation metrics across all models
   * 4. Use the same models you plan to route between in production
   *
   * **Related Documentation:** See
   * https://docs.notdiamond.ai/docs/adapting-prompts-to-new-models for detailed
   * guide.
   *
   * @example
   * ```ts
   * const response = await client.routing.trainCustomRouter({
   *   dataset_file: fs.createReadStream('path/to/file'),
   *   language: 'english',
   *   llm_providers:
   *     '[{"provider": "openai", "model": "gpt-4o"}, {"provider": "anthropic", "model": "claude-sonnet-4-5-20250929"}]',
   *   maximize: true,
   *   prompt_column: 'prompt',
   * });
   * ```
   */
  trainCustomRouter(
    body: RoutingTrainCustomRouterParams,
    options?: RequestOptions,
  ): APIPromise<RoutingTrainCustomRouterResponse> {
    return this._client.post(
      '/v2/pzn/trainCustomRouter',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type RoutingCreateSurveyResponseResponse = unknown;

/**
 * Response from model selection endpoint.
 */
export interface RoutingSelectModelResponse {
  /**
   * List containing the selected provider
   */
  providers: Array<RoutingSelectModelResponse.Provider>;

  /**
   * Unique session ID for this routing decision
   */
  session_id: string;
}

export namespace RoutingSelectModelResponse {
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

/**
 * Response model for POST /v2/pzn/trainCustomRouter endpoint.
 *
 * Returned immediately after submitting a custom router training request. The
 * training process runs asynchronously (typically 5-15 minutes), so use the
 * returned preference_id to make routing calls once training completes.
 *
 * **Next steps:**
 *
 * 1. Store the preference_id
 * 2. Wait for training to complete (typically 5-15 minutes)
 * 3. Use this preference_id in POST /v2/modelRouter/modelSelect requests
 * 4. The router will use your custom-trained model to make routing decisions
 *
 * **How to use the preference_id:**
 *
 * - Include it in the 'preference_id' field of model_select() calls
 * - The system automatically uses your custom router once training is complete
 * - No need to poll status - you can start using it immediately (will use default
 *   until ready)
 */
export interface RoutingTrainCustomRouterResponse {
  /**
   * Unique identifier for the custom router. Use this in model_select() calls to
   * enable routing with your custom-trained router
   */
  preference_id: string;
}

export interface RoutingCreateSurveyResponseParams {
  /**
   * Body param: JSON string of constraint priorities object
   */
  constraint_priorities: string;

  /**
   * Body param: User email address
   */
  email: string;

  /**
   * Body param: JSON string of LLM providers array
   */
  llm_providers: string;

  /**
   * Body param: Description of the user's use case
   */
  use_case_desc: string;

  /**
   * Body param: User ID from Supabase
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;

  /**
   * Body param: Optional additional preferences text
   */
  additional_preferences?: string | null;

  /**
   * Body param: Optional CSV file with evaluation dataset
   */
  dataset_file?: Uploadable | null;

  /**
   * Body param: Optional preference name
   */
  name?: string | null;

  /**
   * Body param: Optional CSV file with prompts
   */
  prompt_file?: Uploadable | null;

  /**
   * Body param: Optional JSON string of prompts array
   */
  prompts?: string | null;
}

export interface RoutingSelectModelParams {
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

export interface RoutingTrainCustomRouterParams {
  /**
   * CSV file containing evaluation data with prompt column and score/response
   * columns for each model
   */
  dataset_file: Uploadable;

  /**
   * Language of the evaluation data. Use 'english' for English-only data or
   * 'multilingual' for multi-language support
   */
  language: string;

  /**
   * JSON string array of LLM providers to train the router on. Format:
   * '[{"provider": "openai", "model": "gpt-4o"}, {"provider": "anthropic", "model":
   * "claude-sonnet-4-5-20250929"}]'
   */
  llm_providers: string;

  /**
   * Whether higher scores are better. Set to true if higher scores indicate better
   * performance, false otherwise
   */
  maximize: boolean;

  /**
   * Name of the column in the CSV file that contains the prompts
   */
  prompt_column: string;

  /**
   * Whether to override an existing custom router for this preference_id
   */
  override?: boolean | null;

  /**
   * Optional preference ID to update an existing router. If not provided, a new
   * preference will be created
   */
  preference_id?: string | null;
}

export declare namespace Routing {
  export {
    type RoutingCreateSurveyResponseResponse as RoutingCreateSurveyResponseResponse,
    type RoutingSelectModelResponse as RoutingSelectModelResponse,
    type RoutingTrainCustomRouterResponse as RoutingTrainCustomRouterResponse,
    type RoutingCreateSurveyResponseParams as RoutingCreateSurveyResponseParams,
    type RoutingSelectModelParams as RoutingSelectModelParams,
    type RoutingTrainCustomRouterParams as RoutingTrainCustomRouterParams,
  };
}
