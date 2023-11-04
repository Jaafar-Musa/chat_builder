/**
 * User defined reusuable code
 * This uses a system defined function called exec
 * exec takes an id - name of function
 * *args, that will be passed into the defined function
 */
export interface ChatFunctionDefinition{
    name:string
    code :string
}


// model Function {
//     @@map("functions")
//     id String @id @default(uuid())
//     name String @db.VarChar(30)
//     // snippets Snippet[] 
//     liveCode String //code to be evaluated prod
  
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     lastUpdatedBy String
//   }
  