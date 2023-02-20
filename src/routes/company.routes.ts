import { Router } from "express";
import { CreateCompanyController } from "../modules/companies/useCases/createCompany/createCompanyController";
import { FindAllCompaniesController } from "../modules/companies/useCases/findAllCompanies/findAllCompaniesController";

const createCompanyController = new CreateCompanyController();
const findAllCompanies = new FindAllCompaniesController();
const companyRoutes = Router();

companyRoutes.post('/', createCompanyController.handle);
companyRoutes.get('/', findAllCompanies.handle);

export { companyRoutes }