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
import * as Mappers from "../models/primitiveMappers";
import { AutoRestComplexTestServiceContext } from "../autoRestComplexTestServiceContext";

/** Class representing a Primitive. */
export class Primitive {
  private readonly client: AutoRestComplexTestServiceContext;

  /**
   * Create a Primitive.
   * @param {AutoRestComplexTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestComplexTestServiceContext) {
    this.client = client;
  }

  /**
   * Get complex types with integer properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getInt(): Promise<Models.PrimitiveGetIntResponse>;
  getInt(options: msRest.RequestOptionsBase): Promise<Models.PrimitiveGetIntResponse>;
  getInt(callback: msRest.ServiceCallback<Models.IntWrapper>): void;
  getInt(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntWrapper>): void;
  getInt(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.IntWrapper>): Promise<Models.PrimitiveGetIntResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getIntOperationSpec,
      callback) as Promise<Models.PrimitiveGetIntResponse>;
  }

  /**
   * Put complex types with integer properties
   *
   * @param complexBody Please put -1 and 2
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putInt(complexBody: Models.IntWrapper): Promise<msRest.RestResponse>;
  putInt(complexBody: Models.IntWrapper, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putInt(complexBody: Models.IntWrapper, callback: msRest.ServiceCallback<void>): void;
  putInt(complexBody: Models.IntWrapper, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putInt(complexBody: Models.IntWrapper, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putIntOperationSpec,
      callback);
  }

  /**
   * Get complex types with long properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getLong(): Promise<Models.PrimitiveGetLongResponse>;
  getLong(options: msRest.RequestOptionsBase): Promise<Models.PrimitiveGetLongResponse>;
  getLong(callback: msRest.ServiceCallback<Models.LongWrapper>): void;
  getLong(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LongWrapper>): void;
  getLong(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LongWrapper>): Promise<Models.PrimitiveGetLongResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLongOperationSpec,
      callback) as Promise<Models.PrimitiveGetLongResponse>;
  }

  /**
   * Put complex types with long properties
   *
   * @param complexBody Please put 1099511627775 and -999511627788
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putLong(complexBody: Models.LongWrapper): Promise<msRest.RestResponse>;
  putLong(complexBody: Models.LongWrapper, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putLong(complexBody: Models.LongWrapper, callback: msRest.ServiceCallback<void>): void;
  putLong(complexBody: Models.LongWrapper, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putLong(complexBody: Models.LongWrapper, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putLongOperationSpec,
      callback);
  }

  /**
   * Get complex types with float properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getFloat(): Promise<Models.PrimitiveGetFloatResponse>;
  getFloat(options: msRest.RequestOptionsBase): Promise<Models.PrimitiveGetFloatResponse>;
  getFloat(callback: msRest.ServiceCallback<Models.FloatWrapper>): void;
  getFloat(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FloatWrapper>): void;
  getFloat(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.FloatWrapper>): Promise<Models.PrimitiveGetFloatResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getFloatOperationSpec,
      callback) as Promise<Models.PrimitiveGetFloatResponse>;
  }

  /**
   * Put complex types with float properties
   *
   * @param complexBody Please put 1.05 and -0.003
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putFloat(complexBody: Models.FloatWrapper): Promise<msRest.RestResponse>;
  putFloat(complexBody: Models.FloatWrapper, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putFloat(complexBody: Models.FloatWrapper, callback: msRest.ServiceCallback<void>): void;
  putFloat(complexBody: Models.FloatWrapper, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putFloat(complexBody: Models.FloatWrapper, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putFloatOperationSpec,
      callback);
  }

  /**
   * Get complex types with double properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getDouble(): Promise<Models.PrimitiveGetDoubleResponse>;
  getDouble(options: msRest.RequestOptionsBase): Promise<Models.PrimitiveGetDoubleResponse>;
  getDouble(callback: msRest.ServiceCallback<Models.DoubleWrapper>): void;
  getDouble(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DoubleWrapper>): void;
  getDouble(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DoubleWrapper>): Promise<Models.PrimitiveGetDoubleResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getDoubleOperationSpec,
      callback) as Promise<Models.PrimitiveGetDoubleResponse>;
  }

  /**
   * Put complex types with double properties
   *
   * @param complexBody Please put 3e-100 and
   * -0.000000000000000000000000000000000000000000000000000000005
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putDouble(complexBody: Models.DoubleWrapper): Promise<msRest.RestResponse>;
  putDouble(complexBody: Models.DoubleWrapper, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putDouble(complexBody: Models.DoubleWrapper, callback: msRest.ServiceCallback<void>): void;
  putDouble(complexBody: Models.DoubleWrapper, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putDouble(complexBody: Models.DoubleWrapper, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putDoubleOperationSpec,
      callback);
  }

  /**
   * Get complex types with bool properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getBool(): Promise<Models.PrimitiveGetBoolResponse>;
  getBool(options: msRest.RequestOptionsBase): Promise<Models.PrimitiveGetBoolResponse>;
  getBool(callback: msRest.ServiceCallback<Models.BooleanWrapper>): void;
  getBool(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BooleanWrapper>): void;
  getBool(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.BooleanWrapper>): Promise<Models.PrimitiveGetBoolResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBoolOperationSpec,
      callback) as Promise<Models.PrimitiveGetBoolResponse>;
  }

  /**
   * Put complex types with bool properties
   *
   * @param complexBody Please put true and false
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putBool(complexBody: Models.BooleanWrapper): Promise<msRest.RestResponse>;
  putBool(complexBody: Models.BooleanWrapper, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putBool(complexBody: Models.BooleanWrapper, callback: msRest.ServiceCallback<void>): void;
  putBool(complexBody: Models.BooleanWrapper, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putBool(complexBody: Models.BooleanWrapper, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putBoolOperationSpec,
      callback);
  }

  /**
   * Get complex types with string properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getString(): Promise<Models.PrimitiveGetStringResponse>;
  getString(options: msRest.RequestOptionsBase): Promise<Models.PrimitiveGetStringResponse>;
  getString(callback: msRest.ServiceCallback<Models.StringWrapper>): void;
  getString(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StringWrapper>): void;
  getString(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.StringWrapper>): Promise<Models.PrimitiveGetStringResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getStringOperationSpec,
      callback) as Promise<Models.PrimitiveGetStringResponse>;
  }

  /**
   * Put complex types with string properties
   *
   * @param complexBody Please put 'goodrequest', '', and null
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putString(complexBody: Models.StringWrapper): Promise<msRest.RestResponse>;
  putString(complexBody: Models.StringWrapper, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putString(complexBody: Models.StringWrapper, callback: msRest.ServiceCallback<void>): void;
  putString(complexBody: Models.StringWrapper, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putString(complexBody: Models.StringWrapper, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putStringOperationSpec,
      callback);
  }

  /**
   * Get complex types with date properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getDate(): Promise<Models.PrimitiveGetDateResponse>;
  getDate(options: msRest.RequestOptionsBase): Promise<Models.PrimitiveGetDateResponse>;
  getDate(callback: msRest.ServiceCallback<Models.DateWrapper>): void;
  getDate(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DateWrapper>): void;
  getDate(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DateWrapper>): Promise<Models.PrimitiveGetDateResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getDateOperationSpec,
      callback) as Promise<Models.PrimitiveGetDateResponse>;
  }

  /**
   * Put complex types with date properties
   *
   * @param complexBody Please put '0001-01-01' and '2016-02-29'
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putDate(complexBody: Models.DateWrapper): Promise<msRest.RestResponse>;
  putDate(complexBody: Models.DateWrapper, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putDate(complexBody: Models.DateWrapper, callback: msRest.ServiceCallback<void>): void;
  putDate(complexBody: Models.DateWrapper, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putDate(complexBody: Models.DateWrapper, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putDateOperationSpec,
      callback);
  }

  /**
   * Get complex types with datetime properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getDateTime(): Promise<Models.PrimitiveGetDateTimeResponse>;
  getDateTime(options: msRest.RequestOptionsBase): Promise<Models.PrimitiveGetDateTimeResponse>;
  getDateTime(callback: msRest.ServiceCallback<Models.DatetimeWrapper>): void;
  getDateTime(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatetimeWrapper>): void;
  getDateTime(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DatetimeWrapper>): Promise<Models.PrimitiveGetDateTimeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getDateTimeOperationSpec,
      callback) as Promise<Models.PrimitiveGetDateTimeResponse>;
  }

  /**
   * Put complex types with datetime properties
   *
   * @param complexBody Please put '0001-01-01T12:00:00-04:00' and '2015-05-18T11:38:00-08:00'
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putDateTime(complexBody: Models.DatetimeWrapper): Promise<msRest.RestResponse>;
  putDateTime(complexBody: Models.DatetimeWrapper, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putDateTime(complexBody: Models.DatetimeWrapper, callback: msRest.ServiceCallback<void>): void;
  putDateTime(complexBody: Models.DatetimeWrapper, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putDateTime(complexBody: Models.DatetimeWrapper, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putDateTimeOperationSpec,
      callback);
  }

  /**
   * Get complex types with datetimeRfc1123 properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getDateTimeRfc1123(): Promise<Models.PrimitiveGetDateTimeRfc1123Response>;
  getDateTimeRfc1123(options: msRest.RequestOptionsBase): Promise<Models.PrimitiveGetDateTimeRfc1123Response>;
  getDateTimeRfc1123(callback: msRest.ServiceCallback<Models.Datetimerfc1123Wrapper>): void;
  getDateTimeRfc1123(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Datetimerfc1123Wrapper>): void;
  getDateTimeRfc1123(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Datetimerfc1123Wrapper>): Promise<Models.PrimitiveGetDateTimeRfc1123Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getDateTimeRfc1123OperationSpec,
      callback) as Promise<Models.PrimitiveGetDateTimeRfc1123Response>;
  }

  /**
   * Put complex types with datetimeRfc1123 properties
   *
   * @param complexBody Please put 'Mon, 01 Jan 0001 12:00:00 GMT' and 'Mon, 18 May 2015 11:38:00
   * GMT'
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putDateTimeRfc1123(complexBody: Models.Datetimerfc1123Wrapper): Promise<msRest.RestResponse>;
  putDateTimeRfc1123(complexBody: Models.Datetimerfc1123Wrapper, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putDateTimeRfc1123(complexBody: Models.Datetimerfc1123Wrapper, callback: msRest.ServiceCallback<void>): void;
  putDateTimeRfc1123(complexBody: Models.Datetimerfc1123Wrapper, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putDateTimeRfc1123(complexBody: Models.Datetimerfc1123Wrapper, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putDateTimeRfc1123OperationSpec,
      callback);
  }

  /**
   * Get complex types with duration properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getDuration(): Promise<Models.PrimitiveGetDurationResponse>;
  getDuration(options: msRest.RequestOptionsBase): Promise<Models.PrimitiveGetDurationResponse>;
  getDuration(callback: msRest.ServiceCallback<Models.DurationWrapper>): void;
  getDuration(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DurationWrapper>): void;
  getDuration(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DurationWrapper>): Promise<Models.PrimitiveGetDurationResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getDurationOperationSpec,
      callback) as Promise<Models.PrimitiveGetDurationResponse>;
  }

  /**
   * Put complex types with duration properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putDuration(): Promise<msRest.RestResponse>;
  putDuration(options: Models.PrimitivePutDurationOptionalParams): Promise<msRest.RestResponse>;
  putDuration(callback: msRest.ServiceCallback<void>): void;
  putDuration(options: Models.PrimitivePutDurationOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putDuration(options?: Models.PrimitivePutDurationOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putDurationOperationSpec,
      callback);
  }

  /**
   * Get complex types with byte properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getByte(): Promise<Models.PrimitiveGetByteResponse>;
  getByte(options: msRest.RequestOptionsBase): Promise<Models.PrimitiveGetByteResponse>;
  getByte(callback: msRest.ServiceCallback<Models.ByteWrapper>): void;
  getByte(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ByteWrapper>): void;
  getByte(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ByteWrapper>): Promise<Models.PrimitiveGetByteResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getByteOperationSpec,
      callback) as Promise<Models.PrimitiveGetByteResponse>;
  }

  /**
   * Put complex types with byte properties
   *
   * @param [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putByte(): Promise<msRest.RestResponse>;
  putByte(options: Models.PrimitivePutByteOptionalParams): Promise<msRest.RestResponse>;
  putByte(callback: msRest.ServiceCallback<void>): void;
  putByte(options: Models.PrimitivePutByteOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putByte(options?: Models.PrimitivePutByteOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putByteOperationSpec,
      callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getIntOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/integer",
  responses: {
    200: {
      bodyMapper: Mappers.IntWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putIntOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/integer",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.IntWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLongOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/long",
  responses: {
    200: {
      bodyMapper: Mappers.LongWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putLongOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/long",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.LongWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getFloatOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/float",
  responses: {
    200: {
      bodyMapper: Mappers.FloatWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putFloatOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/float",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.FloatWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDoubleOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/double",
  responses: {
    200: {
      bodyMapper: Mappers.DoubleWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDoubleOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/double",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.DoubleWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getBoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/bool",
  responses: {
    200: {
      bodyMapper: Mappers.BooleanWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putBoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/bool",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.BooleanWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getStringOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/string",
  responses: {
    200: {
      bodyMapper: Mappers.StringWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putStringOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/string",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.StringWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDateOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/date",
  responses: {
    200: {
      bodyMapper: Mappers.DateWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/date",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.DateWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/datetime",
  responses: {
    200: {
      bodyMapper: Mappers.DatetimeWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/datetime",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.DatetimeWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDateTimeRfc1123OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/datetimerfc1123",
  responses: {
    200: {
      bodyMapper: Mappers.Datetimerfc1123Wrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDateTimeRfc1123OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/datetimerfc1123",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Datetimerfc1123Wrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDurationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/duration",
  responses: {
    200: {
      bodyMapper: Mappers.DurationWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDurationOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/duration",
  requestBody: {
    parameterPath: {
      field: [
        "options",
        "field"
      ]
    },
    mapper: {
      ...Mappers.DurationWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getByteOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/byte",
  responses: {
    200: {
      bodyMapper: Mappers.ByteWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putByteOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/byte",
  requestBody: {
    parameterPath: {
      field: [
        "options",
        "field"
      ]
    },
    mapper: {
      ...Mappers.ByteWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
