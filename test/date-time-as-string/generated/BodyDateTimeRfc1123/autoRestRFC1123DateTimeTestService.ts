/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestRFC1123DateTimeTestServiceContext } from "./autoRestRFC1123DateTimeTestServiceContext";

class AutoRestRFC1123DateTimeTestService extends AutoRestRFC1123DateTimeTestServiceContext {
  // Operation groups
  datetimerfc1123: operations.Datetimerfc1123;

  /**
   * Initializes a new instance of the AutoRestRFC1123DateTimeTestService class.
   *
   * @param [baseUri] The base URI of the service.
   *
   * @param [options] The parameter options
   */
  constructor(baseUri?: string, options?: msRest.ServiceClientOptions) {
    super(baseUri, options);
    this.datetimerfc1123 = new operations.Datetimerfc1123(this);
  }
}

// Operation Specifications

export {
  AutoRestRFC1123DateTimeTestService,
  AutoRestRFC1123DateTimeTestServiceContext,
  Models as AutoRestRFC1123DateTimeTestServiceModels,
  Mappers as AutoRestRFC1123DateTimeTestServiceMappers
};
export * from "./operations";
