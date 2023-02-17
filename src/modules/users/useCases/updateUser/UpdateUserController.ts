import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, active, group_id } = req.body;
        const id = parseInt(req.params.id);
        const updateUserUseCase = new UpdateUserUseCase();

        const result = await updateUserUseCase.execute({ id, name, email, password, active, group_id });

        return res.status(200).send({
            success: true,
            message: '',
            result: result
        });
    }
}