// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LlmUsageAPI from './llm-usage';
import {
  LlmUsage,
  LlmUsageRetrieveDailyParams,
  LlmUsageRetrieveDailyResponse,
  LlmUsageRetrieveSummaryParams,
} from './llm-usage';

export class Admin extends APIResource {
  llmUsage: LlmUsageAPI.LlmUsage = new LlmUsageAPI.LlmUsage(this._client);
}

Admin.LlmUsage = LlmUsage;

export declare namespace Admin {
  export {
    LlmUsage as LlmUsage,
    type LlmUsageRetrieveDailyResponse as LlmUsageRetrieveDailyResponse,
    type LlmUsageRetrieveDailyParams as LlmUsageRetrieveDailyParams,
    type LlmUsageRetrieveSummaryParams as LlmUsageRetrieveSummaryParams,
  };
}
