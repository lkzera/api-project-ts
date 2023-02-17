import { Request, Response } from "express";
import { CreateGroupUseCase } from "./CreateGroupUseCase";

export class CreateGroupController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const createGroupUseCase = new CreateGroupUseCase();

        const result = await createGroupUseCase.execute({ name });

        return res.status(201).send({
            success: true,
            message: 'Group added successfully!',
            result: result
        });
    }
}