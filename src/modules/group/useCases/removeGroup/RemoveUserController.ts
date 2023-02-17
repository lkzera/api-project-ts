import { Request, Response } from "express";
import { RemoveGroupUseCase } from "./RemoveGroupUseCase";

export class RemoveGroupController {
    async handle(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const removeGroupUseCase = new RemoveGroupUseCase();

        const result = await removeGroupUseCase.execute(id);

        return res.status(200).send({
            success: true,
            message: '',
            result: result
        });
    }
}