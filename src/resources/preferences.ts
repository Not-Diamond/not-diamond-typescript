// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Preferences extends APIResource {
  /**
   * Get User Preference By Id
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
   * Create Preference
   */
  createUserPreference(
    body: PreferenceCreateUserPreferenceParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post('/v2/preferences/userPreferenceCreate', { body, ...options });
  }

  /**
   * Delete User Preference
   */
  deleteUserPreference(preferenceID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v2/preferences/userPreferenceDelete/${preferenceID}`, options);
  }

  /**
   * Update User Preference
   */
  updateUserPreference(
    body: PreferenceUpdateUserPreferenceParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.put('/v2/preferences/userPreferenceUpdate', { body, ...options });
  }
}

export type PreferenceRetrieveResponse = unknown;

export type PreferenceCreateUserPreferenceResponse = unknown;

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
