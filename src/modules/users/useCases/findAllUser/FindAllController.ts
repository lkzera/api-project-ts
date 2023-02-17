import { Request, Response } from "express";
import { FindAllUserUseCase } from "./FindAllUserUseCase";

export class FindAllController {
    async handle(req: Request, res: Response) {
        const findAllUserUseCasa = new FindAllUserUseCase();

        const result = await findAllUserUseCasa.execute();

        return res.status(200).send({
            success: true,
            message: '',
            result: result
        });
    }
}