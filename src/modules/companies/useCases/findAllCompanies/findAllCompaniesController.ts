import { Request, Response } from "express";
import { FindAllCompaniesUseCase } from "./findAllCompaniesUseCase";

export class FindAllCompaniesController {
    async handle(req: Request, res: Response) {
        const findAllCompaniesUseCase = new FindAllCompaniesUseCase();

        const result = await findAllCompaniesUseCase.execute();

        return res.status(201).send({
            success: true,
            message: '',
            result: result
        });
    }
}