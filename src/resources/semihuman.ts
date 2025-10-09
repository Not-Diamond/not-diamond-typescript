// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MetricsAPI from './report/metrics';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Semihuman extends APIResource {
  /**
   * Route Semihuman
   */
  route(body: SemihumanRouteParams, options?: RequestOptions): APIPromise<SemihumanRouteResponse> {
    return this._client.post('/v2/semihuman/modelSelect', { body, ...options });
  }
}

export interface SemihumanRouteResponse {
  model: string;

  provider: string;

  context_length?: number;

  input_price?: number;

  is_custom?: boolean;

  is_image_gen?: boolean;

  latency?: number;

  names?: Array<unknown>;

  openrouter_model?: string | null;

  output_price?: number;

  preference_id?: string | null;

  timestamp?: number;
}

export interface SemihumanRouteParams {
  llm_providers: Array<MetricsAPI.RequestProvider | SemihumanRouteParams.OpenRouterProvider>;

  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

  hash_content?: boolean;

  max_model_depth?: number | null;

  metric?: string;

  preference_id?: string | null;

  previous_session?: string | null;

  tools?: Array<{ [key: string]: unknown }> | null;

  tradeoff?: string | null;
}

export namespace SemihumanRouteParams {
  export interface OpenRouterProvider {
    model: string;

    context_length?: number | null;

    input_price?: number | null;

    is_custom?: boolean;

    latency?: number | null;

    output_price?: number | null;
  }
}

export declare namespace Semihuman {
  export {
    type SemihumanRouteResponse as SemihumanRouteResponse,
    type SemihumanRouteParams as SemihumanRouteParams,
  };
}
