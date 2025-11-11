// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Notdiamond } from '../client';

export abstract class APIResource {
  protected _client: Notdiamond;

  constructor(client: Notdiamond) {
    this._client = client;
  }
}
