import { PrismaClient } from "@prisma/client";

let optionsDatabase = {}

if (process.env.DATABBASE_LOGGING == 'true') {
    optionsDatabase = {
        log: ['query']
    }
}


export const prisma = new PrismaClient(optionsDatabase);