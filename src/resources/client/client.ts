// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReportAPI from './report';
import { Report, ReportEvaluateHallucinationParams, ReportEvaluateHallucinationResponse } from './report';

export class Client extends APIResource {
  report: ReportAPI.Report = new ReportAPI.Report(this._client);
}

Client.Report = Report;

export declare namespace Client {
  export {
    Report as Report,
    type ReportEvaluateHallucinationResponse as ReportEvaluateHallucinationResponse,
    type ReportEvaluateHallucinationParams as ReportEvaluateHallucinationParams,
  };
}
