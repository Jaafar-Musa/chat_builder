/**
 * Default api definitions to allow reusibility
 * 
 * The wrapper function should expect the api verb and the response type
 */
export interface ChatApiDefinition{
    /**
     * The name of the connector
     */
    name:string
    /**
     * Base url of the api
     */
    url:string
    /**
     * default headers to be added in the request
     */
    headers:Record<string,string>
}
  

  
