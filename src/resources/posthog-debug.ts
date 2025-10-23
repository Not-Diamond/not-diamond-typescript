// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PosthogDebug extends APIResource {
  /**
   * Trigger Posthog
   */
  retrieve(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/posthog-debug', options);
  }
}

export type PosthogDebugRetrieveResponse = unknown;

export declare namespace PosthogDebug {
  export { type PosthogDebugRetrieveResponse as PosthogDebugRetrieveResponse };
}
