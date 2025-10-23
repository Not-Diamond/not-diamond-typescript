// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Evaluations extends APIResource {
  /**
   * Update Model State
   */
  updateModelState(params: EvaluationUpdateModelStateParams, options?: RequestOptions): APIPromise<unknown> {
    const { body, 'x-token': xToken } = params;
    return this._client.post('/v2/evaluations/updateModelState', {
      body: body,
      ...options,
      headers: buildHeaders([{ 'x-token': xToken }, options?.headers]),
    });
  }
}

export type EvaluationUpdateModelStateResponse = unknown;

export interface EvaluationUpdateModelStateParams {
  /**
   * Body param:
   */
  body: { [key: string]: unknown };

  /**
   * Header param:
   */
  'x-token': string;
}

export declare namespace Evaluations {
  export {
    type EvaluationUpdateModelStateResponse as EvaluationUpdateModelStateResponse,
    type EvaluationUpdateModelStateParams as EvaluationUpdateModelStateParams,
  };
}
