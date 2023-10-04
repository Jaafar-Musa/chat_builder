import { ChatSegmentsDefinition } from "./segments";

interface ChatMenuDefinition {
  /**
   * The name of the menu
   *
   * The name of the menu is what will be used when requesting menus through the api.
   * Each indiviual menu should be unique to it's tag
   */
  name: string;
  /**
   * the tag allows a single unique menu name to have multiple different users get different
   * menus depending on what tag they are registered under
   *
   * @default live
   */
  tag: string;
  /**
   * The code will be executed when the menu is first initialized
   */
  startBlock: string;
  /**
   * Every unique menu and tag will have a production menu and a dev menu,
   * this allows the dev to change and test a menu before deploying it
   */
  isLive: boolean;
  /**
   * The user can navigate backwards in the menu
   */
  hasNavigation: boolean;
  /**
   * allows users to answer multiple steps at once when starting the menu
   * @example ussd user *120*1*3*4# | regular user 1*3*4
   */
  hasLongString: boolean;
  segments: ChatSegmentsDefinition[];
}

// model Menu {
//     @@map("menus")
//     name String @db.VarChar(25) //name of the menu is what should be requested from the api
//     tag String @db.VarChar(15) @default("live") // a tag description (Live, Test, etc)
//     accessedBy MenuForUser[] // only users to access this menu. Null = live menu
//     startBlock Block?
//     isUpdated Boolean @default(false) // one of it's blocks was updated. (if true, moves to dev section of the portal. from there, it can be tested and moved to prod)
//     hasNavigation Boolean
//     hasLongString Boolean
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     lastUpdatedBy String
//     @@id([name,tag])
// }
