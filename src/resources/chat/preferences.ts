// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Preferences extends APIResource {
  /**
   * Preference Samples
   */
  create(body: PreferenceCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/chat/preferences/preferenceCreate', { body, ...options });
  }

  /**
   * Update Preference
   */
  update(body: PreferenceUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.put('/v2/chat/preferences/update', { body, ...options });
  }

  /**
   * Delete Preference
   */
  delete(preferenceID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v2/chat/preferences/preferenceDelete/${preferenceID}`, options);
  }
}

export type PreferenceCreateResponse = unknown;

export type PreferenceUpdateResponse = unknown;

export type PreferenceDeleteResponse = unknown;

export interface PreferenceCreateParams {
  name?: string | null;
}

export interface PreferenceUpdateParams {
  preference_id: string;

  name?: string | null;
}

export declare namespace Preferences {
  export {
    type PreferenceCreateResponse as PreferenceCreateResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceDeleteResponse as PreferenceDeleteResponse,
    type PreferenceCreateParams as PreferenceCreateParams,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };
}
