import { User } from "@prisma/client"
import { prisma } from '../../../../prisma/client'
import { AppError } from '../../../../errors/AppError';


export class RemoveUserUseCase {
    async execute(id: number): Promise<User> {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if (!user) {
            throw new AppError('User not found!');
        }

        const remove = await prisma.user.delete({
            where: {
                id
            }
        });

        return remove;
    }
}