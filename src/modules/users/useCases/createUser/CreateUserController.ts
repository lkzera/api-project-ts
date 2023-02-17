import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, active, group_id } = req.body;
        const createUserCase = new CreateUserUseCase();

        const result = await createUserCase.execute({ name, email, password, active, group_id });

        return res.status(201).send({
            success: true,
            message: 'user added successfully!',
            result: result
        });
    }
}