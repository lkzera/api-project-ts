import { User } from "@prisma/client"
import { prisma } from '../../../../prisma/client'


export class FindOneUserUseCase {
    async execute(id: number): Promise<User | null> {
        const searchAll = await prisma.user.findFirst({
            where: {
                id: id
            }
        })
        return searchAll;
    }
}