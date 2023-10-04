/**
 * A chatblock handles individual cases of a user input.
 * ever user input is assigned to a block 
 */
export interface ChatBlockDefinition{
    /**
     * name of the block
     */
    name: string 
    /**
     * when true, the block is reused until session terminates.
     * @default false
     */
    isProxy : boolean
    /**
     * when true, the block becomes unskippable in the event of longstring
     * @default false
     */
    isBlocking :boolean 
    /**
     * the input the user needs to put to access the block
     * handle regex 
     * @example
     * * - wildcard, accepts any input
     * # - accepts a number
     * - - a range seperator (1-10, accepts input from 1 to 10)
     * "" - regular string input, matched tolowercase (e.g"test" == "Test")
     */
    input : string
    /**
     * The code to be executed for the block
     */
    code : String
}

// model Block {
//     @@map("blocks")
//     id String @id @default(uuid())
//     name String @db.VarChar(30)
//     nextBlocks NextBlock[]
//     isProxy Boolean @default(false)
//     menu Menu? @relation(references: [name,tag], fields: [menuName,menuTag])
//     menuName String? @unique 
//     menuTag String? @unique
//     isBlocking Boolean @default(false)
//     devCode String // code when menu is modified
//     liveCode String //code to be evaluated
  
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     lastUpdatedBy String
  
//     @@unique([menuName,menuTag])
//   }