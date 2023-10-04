/**
 * Each user session will have the following
 */
export interface IUserSession {
    /**
     * User number
     */
    msisdn: string;
    /**
     * Menu accessed by the msisdn
     */
    menuName: string;
    /**
     * Appropriate tag
     * Checks if the user is in a special menu
     * @default live
     */
    menuTag:string;
    /**
     * Details about each step of the current user session.
     * Caches to help if the user goes back a step
     */
    sessionStack: ISessionStack[] | null;
    /**
     * Unique session ID
     */
    sessionId:string
  }

  export interface ISessionStack {
    /**
     * Reference to the block that was executed
     */
    blockId: string;
    /**
     * Cache of the block response
     */
    view: string;
    /**
     * If the block is a booklet (MultiPage block)
     * @example {currentpage}-{totalpage} format
     */
    isBooklet?: string; 
  }
  