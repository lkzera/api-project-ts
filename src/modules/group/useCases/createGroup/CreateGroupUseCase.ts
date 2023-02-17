import { Group } from "@prisma/client"
import { AppError } from "../../../../errors/AppError";
import { prisma } from '../../../../prisma/client'
import { CreateGroupDTO } from '../../dtos/CreateGroupDTO'


export class CreateGroupUseCase {
    async execute({ name }: CreateGroupDTO): Promise<Group> {

        const findGroup = await prisma.group.findFirst({
            where: {
                name
            }
        });

        if (findGroup) {
            throw new AppError("Group already exists!");
        }

        const create = await prisma.group.create({
            data: {
                name
            }
        });

        return create;
    }
}