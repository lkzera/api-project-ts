import { Company } from "@prisma/client"
import { AppError } from "../../../../errors/AppError";
import { prisma } from '../../../../prisma/client'
import { CreateCompanyDTO } from '../../dtos/CreateCompanyDTO'


export class FindAllCompaniesUseCase {
    async execute(): Promise<Company[]> {
        const result = prisma.company.findMany();
        return result;
    }
}