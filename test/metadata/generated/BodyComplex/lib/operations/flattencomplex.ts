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
import * as Models from "../models";
import * as Mappers from "../models/flattencomplexMappers";
import { AutoRestComplexTestServiceContext } from "../autoRestComplexTestServiceContext";

/** Class representing a Flattencomplex. */
export class Flattencomplex {
  private readonly client: AutoRestComplexTestServiceContext;

  /**
   * Create a Flattencomplex.
   * @param {AutoRestComplexTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestComplexTestServiceContext) {
    this.client = client;
  }

  /**
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getValid(): Promise<Models.FlattencomplexGetValidResponse>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.FlattencomplexGetValidResponse>;
  getValid(callback: msRest.ServiceCallback<Models.MyBaseTypeUnion>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MyBaseTypeUnion>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MyBaseTypeUnion>): Promise<Models.FlattencomplexGetValidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec,
      callback) as Promise<Models.FlattencomplexGetValidResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/flatten/valid",
  responses: {
    200: {
      bodyMapper: Mappers.MyBaseType
    },
    default: {}
  },
  serializer
};
