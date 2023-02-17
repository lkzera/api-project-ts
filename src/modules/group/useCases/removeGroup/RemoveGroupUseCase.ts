import { Group } from "@prisma/client"
import { prisma } from '../../../../prisma/client'
import { AppError } from '../../../../errors/AppError';


export class RemoveGroupUseCase {
    async execute(id: number): Promise<Group> {
        const group = await prisma.group.findUnique({
            where: {
                id
            }
        });

        if (!group) {
            throw new AppError('group not found!');
        }

        const remove = await prisma.group.delete({
            where: {
                id
            }
        });

        return remove;
    }
}