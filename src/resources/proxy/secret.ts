// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Secret extends APIResource {
  /**
   * Delete Proxy Secret Route
   */
  delete(provider: string, params: SecretDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { user_id, 'x-token': xToken } = params;
    return this._client.delete(path`/v2/proxy/secret/delete/${user_id}/${provider}`, {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Upsert Proxy Secret Route
   */
  upsert(params: SecretUpsertParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post('/v2/proxy/secret', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }
}

export type SecretDeleteResponse = unknown;

export type SecretUpsertResponse = unknown;

export interface SecretDeleteParams {
  /**
   * Path param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;
}

export interface SecretUpsertParams {
  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  provider: string;

  /**
   * Body param:
   */
  secret: string;

  /**
   * Body param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;
}

export declare namespace Secret {
  export {
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretUpsertResponse as SecretUpsertResponse,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretUpsertParams as SecretUpsertParams,
  };
}
