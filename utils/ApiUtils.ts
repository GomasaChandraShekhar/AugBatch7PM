import { APIRequestContext, APIResponse } from '@playwright/test';

/**
 * @author - Gomasa Chandra Shekhar
 *  * 
 * This class contains functions to Create, retrieve, update and delete resources from the api server.
 *  
 * @param apiContext - It is a APIRequestContext to create request context.
 * 
 * 
 */


export default class ApiUtils {

    readonly apiContext: APIRequestContext;

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext;
    }

    /**
     * 
     * @param url - The base URI for the api server
     * 
     * @param payLoad - The request body to create, update the resource in the server
     * @returns - The return type of the function - APIResponse
     */
    async createObject(url: string, payLoad: unknown): Promise<APIResponse> {
        return await this.apiContext.post(url, {
            data: payLoad,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }


    /**
     * 
     * @param url - The base URI for the api server
     * 
     * @param payLoad - The request body to create, update the resource in the server
     * 
     * @param headers - The headers to create, update the resource in the server
     * 
     * @returns - The return type of the function - APIResponse
     * 
    */
    // async createObject(url: string, payLoad: any, headers: any): Promise<APIResponse> {
    //     return await this.apiContext.post(url, {
    //         data: payLoad,
    //         headers: headers
    //     });
    // }

    /**
     * 
     * @param url - The base URI for the api server 
     * 
     * @returns - The return type of the function - APIResponse
     */
    async getAllObjects(url: string): Promise<APIResponse> {
        return await this.apiContext.get(url);
    }

    /**
     * 
     * @param url - The base URI for the api server 
     * @param id - The object Id to retrive the data from the server
     * @returns - The return type of the function - APIResponse
     * 
     * This function retrieves only one object from the server using Id.
     * 
     */
    async getOneObject(url: string, id: string): Promise<APIResponse> {
        return await this.apiContext.get(`${url}/${id}`);
    }

    /**
     * 
     * @param url - The base URI for the api server 
     * @param id - The object Id to retrive the data from the server
     * @param payLoad - The request body to update the resource in the server
     * @returns - The return type of the function - Promise<APIResponse>
     * 
     */
    async updateObject(url: string, id: string, payLoad: unknown): Promise<APIResponse> {
        return await this.apiContext.put(`${url}/${id}`, {
            data: payLoad,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    /**
    * 
    * @param url - The base URI for the api server 
    * @param id - The object Id to retrive the data from the server
    * @param payLoad - The request body to update the resource in the server
    * @returns - The return type of the function - APIResponse
    */
    async partialUpdateObject(url: string, id: string, payLoad: unknown): Promise<APIResponse> {
        return await this.apiContext.patch(`${url}/${id}`, {
            data: payLoad,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    /**
     * 
     * @param url - The base URI for the api server 
     * @param id - The object Id to retrive the data from the server
     * @returns - The return type of the function - APIResponse
     */
    async deleteObject(url: string, id: string): Promise<APIResponse> {
        return await this.apiContext.delete(`${url}/${id}`);
    }

    /**
     * This function creates new obejct in specified collection
     * @param url - Base urls of server
     * @param payLoad - request body
     * @returns - Returns api response
     */
    async createCollectionObject(url: string, payLoad: unknown): Promise<APIResponse> {
        return await this.apiContext.post(url, {
            data: payLoad,
            headers: {
                "x-api-key": "b02d68ca-2fa2-49c6-9ae4-94d07e25d37a",
                "Content-Type": "application/json"
            }
        });
    }

    /**
        * 
        * @param url - The base URI for the api server 
        * @param id - The object Id to retrive the data from the server
        * @returns - The return type of the function - APIResponse
        * 
        * This function retrieves only one object from the server using Id.
        * 
        */
    async getOneObjectFromCollection(url: string, id: string): Promise<APIResponse> {
        return await this.apiContext.get(`${url}/${id}`, {
            headers: {
                "x-api-key": "b02d68ca-2fa2-49c6-9ae4-94d07e25d37a"
            }
        });
    }

}




