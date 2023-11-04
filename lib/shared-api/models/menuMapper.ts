
/**
 * Maps a requested name to a different name
 * @example to be used in stream to allow incoming requests through smpp connection to be mapped to other menu names
 */
export interface ChatMenuMapperDefinition{
    /**
     * Incoming requst
     */
    from:string
    /**
     * Menu name to be mapped to
     */
    to:string
}

// model Mapping{
//     id Int @id @default(autoincrement())
//     mapFrom String @db.VarChar(25)
//     mapTo String @db.VarChar(25)
//   }  