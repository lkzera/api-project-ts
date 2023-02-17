import { Request, Response } from "express";
import { FindOneGroupUseCase } from "./findOneGroupUseCase";

export class FindOneGroupController {
    async handle(req: Request, res: Response) {
        const findOneGroupController = new FindOneGroupUseCase();
        const id = parseInt(req.params.id)
        const result = await findOneGroupController.execute(id);

        return res.status(200).send({
            success: true,
            message: '',
            result: result
        });
    }
}