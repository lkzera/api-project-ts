import { Request, Response } from "express";
import { CreateCompanyUseCase } from "./createCompanyUseCase";

export class CreateCompanyController {
    async handle(req: Request, res: Response) {
        const {
            code,
            corporate_name,
            fantasy_name,
            itr,
            registration_number,
            district,
            address,
            state,
            zip_code } = req.body;
        const createCompanyUseCase = new CreateCompanyUseCase();

        const result = await createCompanyUseCase.execute({
            code,
            corporate_name,
            fantasy_name,
            itr,
            registration_number,
            district,
            address,
            state,
            zip_code
        });

        return res.status(201).send({
            success: true,
            message: 'Company added successfully!',
            result: result
        });
    }
}