// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Preferences extends APIResource {
  /**
   * Preference Samples
   */
  create(params: PreferenceCreateParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post('/v2/preferences/preferenceCreate', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Update Preference
   */
  update(params: PreferenceUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post('/v2/preferences/update', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Delete Preference
   */
  delete(params: PreferenceDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post('/v2/preferences/preferenceDelete', {
      body,
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
   * Get User Preference
   */
  retrieveUserPreference(
    userID: string,
    params: PreferenceRetrieveUserPreferenceParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { 'x-token': xToken } = params;
    return this._client.get(path`/v2/preferences/${userID}`, {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
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

export type PreferenceCreateResponse = unknown;

export type PreferenceUpdateResponse = unknown;

export type PreferenceDeleteResponse = unknown;

export type PreferenceCreateUserPreferenceResponse = unknown;

export type PreferenceDeleteUserPreferenceResponse = unknown;

export type PreferenceRetrieveUserPreferenceResponse = unknown;

export type PreferenceUpdateUserPreferenceResponse = unknown;

export interface PreferenceCreateParams {
  /**
   * Body param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;

  /**
   * Body param:
   */
  name?: string | null;

  /**
   * Body param:
   */
  samples?: Array<{ [key: string]: unknown }>;
}

export interface PreferenceUpdateParams {
  /**
   * Body param:
   */
  preference_id: string;

  /**
   * Body param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;

  /**
   * Body param:
   */
  name?: string | null;

  /**
   * Body param:
   */
  preference_weights?: { [key: string]: unknown } | null;

  /**
   * Body param:
   */
  samples?: Array<{ [key: string]: unknown }>;
}

export interface PreferenceDeleteParams {
  /**
   * Body param:
   */
  preference_id: string;

  /**
   * Body param:
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

export interface PreferenceRetrieveUserPreferenceParams {
  'x-token': string;
}

export interface PreferenceUpdateUserPreferenceParams {
  preference_id: string;

  name?: string | null;
}

export declare namespace Preferences {
  export {
    type PreferenceCreateResponse as PreferenceCreateResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceDeleteResponse as PreferenceDeleteResponse,
    type PreferenceCreateUserPreferenceResponse as PreferenceCreateUserPreferenceResponse,
    type PreferenceDeleteUserPreferenceResponse as PreferenceDeleteUserPreferenceResponse,
    type PreferenceRetrieveUserPreferenceResponse as PreferenceRetrieveUserPreferenceResponse,
    type PreferenceUpdateUserPreferenceResponse as PreferenceUpdateUserPreferenceResponse,
    type PreferenceCreateParams as PreferenceCreateParams,
    type PreferenceUpdateParams as PreferenceUpdateParams,
    type PreferenceDeleteParams as PreferenceDeleteParams,
    type PreferenceCreateUserPreferenceParams as PreferenceCreateUserPreferenceParams,
    type PreferenceRetrieveUserPreferenceParams as PreferenceRetrieveUserPreferenceParams,
    type PreferenceUpdateUserPreferenceParams as PreferenceUpdateUserPreferenceParams,
  };
}
