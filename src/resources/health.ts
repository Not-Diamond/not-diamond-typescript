// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Health extends APIResource {
  /**
   * Health check endpoint that verifies db and cache availability, and includes
   * other relevant metadata in health check response.
   */
  check(options?: RequestOptions): APIPromise<HealthCheckResponse> {
    return this._client.get('/health', options);
  }
}

export type HealthCheckResponse = { [key: string]: unknown };

export declare namespace Health {
  export { type HealthCheckResponse as HealthCheckResponse };
}
