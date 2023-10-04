export interface ChatDBDefinition{
    /**
     * The name of the connector
     */
    name:string
    /**
     * The connection string to be used
     */
    connectionString:string
}


// model DbConnectors{
//     id Int @id @default(autoincrement())
//     name String @db.VarChar(20)
//     connectionString String
//   }