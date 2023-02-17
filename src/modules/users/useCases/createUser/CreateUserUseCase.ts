import { User } from "@prisma/client"
import { prisma } from '../../../../prisma/client'
import { CreateUserDTO } from '../../dtos/CreateUserDTO'
import { AppError } from '../../../../errors/AppError';


export class CreateUserUseCase {
    async execute({ name, email, password, active, group_id }: CreateUserDTO): Promise<User> {
        const aleardyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (aleardyExists) {
            throw new AppError('User already exists!');
        }

        const create = await prisma.user.create({
            data: {
                name,
                email,
                password,
                active,
                group_id
            }
        });

        create.password = 'PASSWORD';

        return create;
    }
}