import { Request, Response } from "express";
import { FindAllGroupUseCase } from "./FindAllGroupUseCase";

export class FindAllGroupController {
    async handle(req: Request, res: Response) {
        const findAllGroupUseCase = new FindAllGroupUseCase();

        const result = await findAllGroupUseCase.execute();

        return res.status(200).send({
            success: true,
            message: '',
            result: result
        });
    }
}