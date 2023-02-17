import { User } from "@prisma/client"
import { prisma } from '../../../../prisma/client'
import { UpdateUserDTO } from '../../dtos/UpdateUserDTO'
import { AppError } from '../../../../errors/AppError';


export class UpdateUserUseCase {
    async execute({ id, name, email, password, active, group_id }: UpdateUserDTO): Promise<User> {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if (!user) {
            throw new AppError('User not found!');
        }

        const updated = await prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                email,
                password,
                active,
                group_id
            }
        });

        return updated;
    }
}