import { Company } from "@prisma/client"
import { AppError } from "../../../../errors/AppError";
import { prisma } from '../../../../prisma/client'
import { CreateCompanyDTO } from '../../dtos/CreateCompanyDTO'


export class CreateCompanyUseCase {
    async execute({
        code,
        corporate_name,
        fantasy_name,
        itr,
        registration_number,
        district,
        address,
        state,
        zip_code
    }: CreateCompanyDTO): Promise<Company> {

        const findCompany = await prisma.company.findFirst({
            where: { code, corporate_name }
        });

        if (findCompany) {
            throw new AppError("Company already exists!");
        }

        if (!itr && !registration_number) {
            throw new AppError("Itr and Registration number is null");
        }

        const create = await prisma.company.create({
            data: {
                code,
                corporate_name,
                fantasy_name,
                itr,
                registration_number,
                district,
                address,
                state,
                zip_code
            }
        });

        return create;
    }
}