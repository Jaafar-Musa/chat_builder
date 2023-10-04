export interface IBuildResponse{
    /**
     * Displayed response for the user
     */
    message:string,
    /**
     * Should the menu terminate or not
     */
    terminate:boolean,
}
export interface IBuildResponseSimulator extends IBuildResponse{
    /**
     * In the web simulator, any debugs the user does will be returned
     */
    logs?: string | {}[]
}