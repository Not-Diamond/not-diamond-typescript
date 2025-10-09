// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MetricsAPI from './report/metrics';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tt extends APIResource {
  /**
   * Tt Translation
   */
  translate(body: TtTranslateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/TT/translate', { body, ...options });
  }
}

export type TtTranslateResponse = unknown;

export interface TtTranslateParams {
  llm_providers: Array<MetricsAPI.RequestProvider>;

  messages: Array<{ [key: string]: string }>;

  source_language: string;

  target_language: string;
}

export declare namespace Tt {
  export { type TtTranslateResponse as TtTranslateResponse, type TtTranslateParams as TtTranslateParams };
}
