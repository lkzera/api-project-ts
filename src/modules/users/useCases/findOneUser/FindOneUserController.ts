import { Request, Response } from "express";
import { FindOneUserUseCase } from "./findOneUserUseCase";

export class FindOneUserController {
    async handle(req: Request, res: Response) {
        const findOneUserController = new FindOneUserUseCase();
        const id = parseInt(req.params.id)
        const result = await findOneUserController.execute(id);

        return res.status(200).send({
            success: true,
            message: '',
            result: result
        });
    }
}