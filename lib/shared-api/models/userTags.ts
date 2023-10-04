/**
 * Binds an msisdn to a certain menu tag
 * All unbinded msisdns go to the default 'live' tag
 */
export interface ChatUserTagsDefinition {
    /**
     * Menu requestors number
     */
    msisdn:string
    /**
     * Menu name and tag
     */
    menu:string
    tag:string
}


// model MenuTypeUser{
//     id Int @id @default(autoincrement())
//     msisdn String @db.VarChar(15)
//     menu MenuForUser[]
//   }
  
//   model MenuForUser{
//     menu Menu @relation(references: [name,tag], fields: [menuName,menuTag])
//     menuName String
//     menuTag String
//     user MenuTypeUser  @relation(references: [id], fields: [userId])
//     userId Int
//     @@unique([menuName,menuTag])
//   }