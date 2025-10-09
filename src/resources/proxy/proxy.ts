// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SecretAPI from './secret';
import {
  Secret,
  SecretDeleteParams,
  SecretDeleteResponse,
  SecretUpsertParams,
  SecretUpsertResponse,
} from './secret';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Proxy extends APIResource {
  secret: SecretAPI.Secret = new SecretAPI.Secret(this._client);

  /**
   * Proxy Auth Route
   */
  retrieveAuth(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v2/proxy/auth', options);
  }

  /**
   * Get Proxy Secrets Route
   */
  retrieveSecrets(
    userID: string,
    params: ProxyRetrieveSecretsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { 'x-token': xToken } = params;
    return this._client.get(path`/v2/proxy/secrets/${userID}`, {
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }
}

export type ProxyRetrieveAuthResponse = unknown;

export type ProxyRetrieveSecretsResponse = unknown;

export interface ProxyRetrieveSecretsParams {
  'x-token': string;
}

Proxy.Secret = Secret;

export declare namespace Proxy {
  export {
    type ProxyRetrieveAuthResponse as ProxyRetrieveAuthResponse,
    type ProxyRetrieveSecretsResponse as ProxyRetrieveSecretsResponse,
    type ProxyRetrieveSecretsParams as ProxyRetrieveSecretsParams,
  };

  export {
    Secret as Secret,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretUpsertResponse as SecretUpsertResponse,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretUpsertParams as SecretUpsertParams,
  };
}
