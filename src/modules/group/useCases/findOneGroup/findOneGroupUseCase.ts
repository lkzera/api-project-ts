import { Group } from "@prisma/client"
import { prisma } from '../../../../prisma/client'


export class FindOneGroupUseCase {
    async execute(id: number): Promise<Group | null> {
        const search = await prisma.group.findFirst({
            where: {
                id: id
            }
        })
        return search;
    }
}