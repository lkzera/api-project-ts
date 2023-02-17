import { Group } from "@prisma/client"
import { prisma } from '../../../../prisma/client'
import { UpdateGroupDTO } from '../../dtos/UpdateGroupDTO'
import { AppError } from '../../../../errors/AppError';


export class UpdateGroupUseCase {
    async execute({ id, name }: UpdateGroupDTO): Promise<Group> {
        const user = await prisma.group.findUnique({
            where: {
                id
            }
        });

        if (!user) {
            throw new AppError('Group not found!');
        }

        const updated = await prisma.group.update({
            where: {
                id
            },
            data: {
                name
            }
        });

        return updated;
    }
}