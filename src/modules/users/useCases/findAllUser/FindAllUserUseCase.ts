import { User } from "@prisma/client"
import { prisma } from '../../../../prisma/client'


export class FindAllUserUseCase {
    async execute(): Promise<User[]> {
        const searchAll = await prisma.user.findMany();
        return searchAll;
    }
}