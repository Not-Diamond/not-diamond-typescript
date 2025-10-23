// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Create Api Key Route
   */
  create(params: APIKeyCreateParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.post('/v2/api-keys/', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Get Api Keys Route
   */
  retrieve(userID: string, params: APIKeyRetrieveParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'x-token': xToken } = params;
    return this._client.get(path`/v2/api-keys/${userID}`, {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Update Api Key Route
   */
  update(params: APIKeyUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'x-token': xToken, ...body } = params;
    return this._client.patch('/v2/api-keys/', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }

  /**
   * Delete Api Key Route
   */
  delete(apiKeyID: string, params: APIKeyDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { user_id, 'x-token': xToken } = params;
    return this._client.delete(path`/v2/api-keys/${user_id}/${apiKeyID}`, {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }
}

export type APIKeyCreateResponse = unknown;

export type APIKeyRetrieveResponse = unknown;

export type APIKeyUpdateResponse = unknown;

export type APIKeyDeleteResponse = unknown;

export interface APIKeyCreateParams {
  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;
}

export interface APIKeyRetrieveParams {
  'x-token': string;
}

export interface APIKeyUpdateParams {
  /**
   * Body param:
   */
  id: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;
}

export interface APIKeyDeleteParams {
  /**
   * Path param:
   */
  user_id: string;

  /**
   * Header param:
   */
  'x-token': string;
}

export declare namespace APIKeys {
  export {
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyRetrieveResponse as APIKeyRetrieveResponse,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyDeleteParams as APIKeyDeleteParams,
  };
}
