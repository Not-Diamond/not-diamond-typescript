// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ErrorDebug extends APIResource {
  /**
   * Test error tracking via OpenTelemetry + Datadog
   */
  triggerError(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/error-debug', options);
  }
}

export type ErrorDebugTriggerErrorResponse = unknown;

export declare namespace ErrorDebug {
  export { type ErrorDebugTriggerErrorResponse as ErrorDebugTriggerErrorResponse };
}
