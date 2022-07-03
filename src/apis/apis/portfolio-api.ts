/* tslint:disable */
/* eslint-disable */
/**
 * ポートフォリオのAPIインタフェース定義
 * ポートフォリオのAPIインタフェース定義
 *
 * OpenAPI spec version: 2.0.0
 * Contact: awpjdmga1943@icloud.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios'
import { Configuration } from '../configuration'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from '../base'
import { InlineResponse200 } from '../models'
import { InlineResponse2001 } from '../models'
import { InlineResponse400 } from '../models'
/**
 * PortfolioApi - axios parameter creator
 * @export
 */
export const PortfolioApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * ポートフォリオの商品一覧の取得。
     * @summary ポートフォリオの商品一覧の取得
     * @param {number} offset 何番目から取得するか
     * @param {number} limit 何個取得するか
     * @param {string} [shopType] ショップのタイプ
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPortfolioShops: async (
      offset: number,
      limit: number,
      shopType?: string,
      options: any = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'offset' is not null or undefined
      if (offset === null || offset === undefined) {
        throw new RequiredError(
          'offset',
          'Required parameter offset was null or undefined when calling getPortfolioShops.',
        )
      }
      // verify required parameter 'limit' is not null or undefined
      if (limit === null || limit === undefined) {
        throw new RequiredError(
          'limit',
          'Required parameter limit was null or undefined when calling getPortfolioShops.',
        )
      }
      const localVarPath = `/portfolio/shops`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (shopType !== undefined) {
        localVarQueryParameter['shopType'] = shopType
      }

      if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.query) {
        query.set(key, options.query[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     * ポートフォリオの製作物一覧の取得。
     * @summary ポートフォリオの製作物一覧の取得
     * @param {number} offset 何番目から取得するか
     * @param {number} limit 何個取得するか
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPortfolioWorks: async (
      offset: number,
      limit: number,
      options: any = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'offset' is not null or undefined
      if (offset === null || offset === undefined) {
        throw new RequiredError(
          'offset',
          'Required parameter offset was null or undefined when calling getPortfolioWorks.',
        )
      }
      // verify required parameter 'limit' is not null or undefined
      if (limit === null || limit === undefined) {
        throw new RequiredError(
          'limit',
          'Required parameter limit was null or undefined when calling getPortfolioWorks.',
        )
      }
      const localVarPath = `/portfolio/works`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.query) {
        query.set(key, options.query[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * PortfolioApi - functional programming interface
 * @export
 */
export const PortfolioApiFp = function (configuration?: Configuration) {
  return {
    /**
     * ポートフォリオの商品一覧の取得。
     * @summary ポートフォリオの商品一覧の取得
     * @param {number} offset 何番目から取得するか
     * @param {number} limit 何個取得するか
     * @param {string} [shopType] ショップのタイプ
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPortfolioShops(
      offset: number,
      limit: number,
      shopType?: string,
      options?: any,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<InlineResponse2001>
    > {
      const localVarAxiosArgs = await PortfolioApiAxiosParamCreator(
        configuration,
      ).getPortfolioShops(offset, limit, shopType, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     * ポートフォリオの製作物一覧の取得。
     * @summary ポートフォリオの製作物一覧の取得
     * @param {number} offset 何番目から取得するか
     * @param {number} limit 何個取得するか
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPortfolioWorks(
      offset: number,
      limit: number,
      options?: any,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<InlineResponse200>
    > {
      const localVarAxiosArgs = await PortfolioApiAxiosParamCreator(
        configuration,
      ).getPortfolioWorks(offset, limit, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
  }
}

/**
 * PortfolioApi - factory interface
 * @export
 */
export const PortfolioApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  return {
    /**
     * ポートフォリオの商品一覧の取得。
     * @summary ポートフォリオの商品一覧の取得
     * @param {number} offset 何番目から取得するか
     * @param {number} limit 何個取得するか
     * @param {string} [shopType] ショップのタイプ
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPortfolioShops(
      offset: number,
      limit: number,
      shopType?: string,
      options?: any,
    ): AxiosPromise<InlineResponse2001> {
      return PortfolioApiFp(configuration)
        .getPortfolioShops(offset, limit, shopType, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * ポートフォリオの製作物一覧の取得。
     * @summary ポートフォリオの製作物一覧の取得
     * @param {number} offset 何番目から取得するか
     * @param {number} limit 何個取得するか
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPortfolioWorks(
      offset: number,
      limit: number,
      options?: any,
    ): AxiosPromise<InlineResponse200> {
      return PortfolioApiFp(configuration)
        .getPortfolioWorks(offset, limit, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * PortfolioApi - object-oriented interface
 * @export
 * @class PortfolioApi
 * @extends {BaseAPI}
 */
export class PortfolioApi extends BaseAPI {
  /**
   * ポートフォリオの商品一覧の取得。
   * @summary ポートフォリオの商品一覧の取得
   * @param {number} offset 何番目から取得するか
   * @param {number} limit 何個取得するか
   * @param {string} [shopType] ショップのタイプ
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PortfolioApi
   */
  public getPortfolioShops(
    offset: number,
    limit: number,
    shopType?: string,
    options?: any,
  ) {
    return PortfolioApiFp(this.configuration)
      .getPortfolioShops(offset, limit, shopType, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   * ポートフォリオの製作物一覧の取得。
   * @summary ポートフォリオの製作物一覧の取得
   * @param {number} offset 何番目から取得するか
   * @param {number} limit 何個取得するか
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PortfolioApi
   */
  public getPortfolioWorks(offset: number, limit: number, options?: any) {
    return PortfolioApiFp(this.configuration)
      .getPortfolioWorks(offset, limit, options)
      .then((request) => request(this.axios, this.basePath))
  }
}