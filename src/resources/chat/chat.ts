// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OptimizerAPI from '../optimizer';
import * as ArenaAPI from './arena';
import {
  Arena,
  ArenaCreateChoiceParams,
  ArenaCreateChoiceResponse,
  ArenaCreateModelsParams,
  ArenaCreateModelsResponse,
} from './arena';
import * as PreferencesAPI from './preferences';
import {
  PreferenceCreateParams,
  PreferenceCreateResponse,
  PreferenceDeleteResponse,
  PreferenceUpdateParams,
  PreferenceUpdateResponse,
  Preferences,
} from './preferences';
import * as ReportAPI from './report';
import {
  Report,
  ReportReportRegeneratedParams,
  ReportReportRegeneratedResponse,
  ReportReportThumbsParams,
  ReportReportThumbsResponse,
} from './report';
import * as MetricsAPI from '../report/metrics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Chat extends APIResource {
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  report: ReportAPI.Report = new ReportAPI.Report(this._client);
  arena: ArenaAPI.Arena = new ArenaAPI.Arena(this._client);

  /**
   * Token Model Select V2
   */
  selectModel(body: ChatSelectModelParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/chat/modelSelect', { body, ...options });
  }
}

export type ChatSelectModelResponse = unknown;

export interface ChatSelectModelParams {
  llm_providers: Array<MetricsAPI.RequestProvider | OptimizerAPI.OpenRouterProvider>;

  messages: Array<{ [key: string]: string | Array<unknown> }> | string;

  hash_content?: boolean;

  max_model_depth?: number | null;

  metric?: string;

  preference_id?: string | null;

  previous_session?: string | null;

  tools?: Array<{ [key: string]: unknown }> | null;

  tradeoff?: string | null;
}

Chat.Preferences = Preferences;
Chat.Report = Report;
Chat.Arena = Arena;

export declare namespace Chat {
  export {
    type ChatSelectModelResponse as ChatSelectModelResponse,
    type ChatSelectModelParams as ChatSelectModelParams,
  };

  export {
    Preferences as Preferences,
    type PreferenceCreateResponse as PreferenceCreateResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceDeleteResponse as PreferenceDeleteResponse,
    type PreferenceCreateParams as PreferenceCreateParams,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };

  export {
    Report as Report,
    type ReportReportRegeneratedResponse as ReportReportRegeneratedResponse,
    type ReportReportThumbsResponse as ReportReportThumbsResponse,
    type ReportReportRegeneratedParams as ReportReportRegeneratedParams,
    type ReportReportThumbsParams as ReportReportThumbsParams,
  };

  export {
    Arena as Arena,
    type ArenaCreateChoiceResponse as ArenaCreateChoiceResponse,
    type ArenaCreateModelsResponse as ArenaCreateModelsResponse,
    type ArenaCreateChoiceParams as ArenaCreateChoiceParams,
    type ArenaCreateModelsParams as ArenaCreateModelsParams,
  };
}
