import { Request, Response } from "express";
import { RemoveUserUseCase } from "./RemoveUserUseCase";

export class RemoveUserController {
    async handle(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const removeUserUseCase = new RemoveUserUseCase();

        const result = await removeUserUseCase.execute(id);

        return res.status(200).send({
            success: true,
            message: '',
            result: result
        });
    }
}