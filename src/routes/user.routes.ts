import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { UpdateUserController } from "../modules/users/useCases/updateUser/UpdateUserController";
import { RemoveUserController } from "../modules/users/useCases/removeUser/RemoveUserController";
import { FindAllController } from "../modules/users/useCases/findAllUser/FindAllController";

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const removeUserController = new RemoveUserController();
const findAllUserController = new FindAllController();

const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.put('/:id', updateUserController.handle);
userRoutes.delete('/:id', removeUserController.handle);
userRoutes.get('/', findAllUserController.handle);

export { userRoutes }