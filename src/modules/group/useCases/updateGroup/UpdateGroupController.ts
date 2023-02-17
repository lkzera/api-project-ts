import { Request, Response } from "express";
import { UpdateGroupUseCase } from "./UpdateGroupUseCase";

export class UpdateGroupController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const id = parseInt(req.params.id);
        const updateGroupUseCase = new UpdateGroupUseCase();

        const result = await updateGroupUseCase.execute({ id, name });

        return res.status(200).send({
            success: true,
            message: '',
            result: result
        });
    }
}