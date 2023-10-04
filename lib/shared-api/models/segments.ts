import { ChatBlockDefinition } from "./block"

/**
 * A chat segment holds all the blocks that could be executed after the last
 */
export interface ChatSegmentsDefinition{
    /**
     * The last executed block.
     */
    from:string
    /**
     * All blocks for the possible user choice
     */
    blocks:ChatBlockDefinition[]
}

// model NextBlock{
//     @@map("nextBlocks")
//     id Int @id @default(autoincrement())
//     input String
//     block Block @relation(references: [id], fields: [blockId], onDelete: Cascade)
//     blockId String
//     isLive Boolean // if its the NextBlock that is being used 
//   }