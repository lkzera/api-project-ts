import { Group } from "@prisma/client"
import { prisma } from '../../../../prisma/client'


export class FindAllGroupUseCase {
    async execute(): Promise<Group[]> {
        const searchAll = await prisma.group.findMany();
        return searchAll;
    }
}