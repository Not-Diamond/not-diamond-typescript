// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Preferences extends APIResource {
  /**
   * Get User Preference By Id
   *
   * @example
   * ```ts
   * const preference = await client.preferences.retrieve(
   *   'preference_id',
   *   { user_id: 'user_id', 'x-token': 'x-token' },
   * );
   * ```
   */
  retrieve(
    preferenceID: string,
    params: PreferenceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { user_id, 'x-token': xToken } = params;
    return this._client.get(path`/v2/preferences/${user_id}/${preferenceID}`, {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Create a new preference ID for personalized LLM routing.
   *
   * A preference ID enables personalized routing by tracking your feedback and
   * learning your preferences over time. Once created, you can:
   *
   * 1. Use it in model_select() calls to get personalized routing decisions
   * 2. Submit feedback via the feedback endpoint to improve routing quality
   * 3. Train a custom router specific to your use case
   *
   * **Workflow:**
   *
   * 1. Create a preference ID (this endpoint)
   * 2. Use the preference_id in POST /v2/modelRouter/modelSelect requests
   * 3. Submit feedback on routing decisions via POST /v2/report/metrics/feedback
   * 4. Optionally train a custom router via POST /v2/pzn/trainCustomRouter
   *
   * **Benefits:**
   *
   * - Personalized routing that learns from your feedback
   * - Improved accuracy for your specific use case
   * - Ability to train custom routers on your evaluation data
   *
   * **Note:** If you don't provide a preference_id in model_select() calls, the
   * default router will be used.
   *
   * @example
   * ```ts
   * const response =
   *   await client.preferences.createUserPreference();
   * ```
   */
  createUserPreference(
    body: PreferenceCreateUserPreferenceParams,
    options?: RequestOptions,
  ): APIPromise<PreferenceCreateUserPreferenceResponse> {
    return this._client.post('/v2/preferences/userPreferenceCreate', { body, ...options });
  }

  /**
   * Delete User Preference
   *
   * @example
   * ```ts
   * const response =
   *   await client.preferences.deleteUserPreference(
   *     'preference_id',
   *   );
   * ```
   */
  deleteUserPreference(preferenceID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v2/preferences/userPreferenceDelete/${preferenceID}`, options);
  }

  /**
   * Update User Preference
   *
   * @example
   * ```ts
   * const response =
   *   await client.preferences.updateUserPreference({
   *     preference_id: 'preference_id',
   *   });
   * ```
   */
  updateUserPreference(
    body: PreferenceUpdateUserPreferenceParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.put('/v2/preferences/userPreferenceUpdate', { body, ...options });
  }
}

export type PreferenceRetrieveResponse = unknown;

/**
 * Response from preference creation endpoint.
 */
export interface PreferenceCreateUserPreferenceResponse {
  /**
   * The newly created preference ID. Use this in model_select() calls for
   * personalized routing
   */
  preference_id: string;
}

export type PreferenceDeleteUserPreferenceResponse = unknown;

export type PreferenceUpdateUserPreferenceResponse = unknown;

export interface PreferenceRetrieveParams {
  /**
   * Path param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;
}

export interface PreferenceCreateUserPreferenceParams {
  /**
   * Optional name for the preference
   */
  name?: string | null;
}

export interface PreferenceUpdateUserPreferenceParams {
  preference_id: string;

  name?: string | null;
}

export declare namespace Preferences {
  export {
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceCreateUserPreferenceResponse as PreferenceCreateUserPreferenceResponse,
    type PreferenceDeleteUserPreferenceResponse as PreferenceDeleteUserPreferenceResponse,
    type PreferenceUpdateUserPreferenceResponse as PreferenceUpdateUserPreferenceResponse,
    type PreferenceRetrieveParams as PreferenceRetrieveParams,
    type PreferenceCreateUserPreferenceParams as PreferenceCreateUserPreferenceParams,
    type PreferenceUpdateUserPreferenceParams as PreferenceUpdateUserPreferenceParams,
  };
}
