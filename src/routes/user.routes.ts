import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { UpdateUserController } from "../modules/users/useCases/updateUser/UpdateUserController";
import { RemoveUserController } from "../modules/users/useCases/removeUser/RemoveUserController";
import { FindAllController } from "../modules/users/useCases/findAllUser/FindAllController";
import { FindOneUserController } from "../modules/users/useCases/findOneUser/FindOneUserController";

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const removeUserController = new RemoveUserController();
const findAllUserController = new FindAllController();
const findOneUserController = new FindOneUserController();

const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.put('/:id', updateUserController.handle);
userRoutes.delete('/:id', removeUserController.handle);
userRoutes.get('/', findAllUserController.handle);
userRoutes.get('/:id', findOneUserController.handle);

export { userRoutes }