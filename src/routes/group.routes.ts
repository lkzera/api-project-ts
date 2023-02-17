import { Router } from "express";
import { CreateGroupController } from "../modules/group/useCases/createGroup/CreateGroupController";
import { FindAllGroupController } from "../modules/group/useCases/findAllGroup/FindAllController";
import { RemoveGroupController } from "../modules/group/useCases/removeGroup/RemoveUserController";
import { UpdateGroupController } from "../modules/group/useCases/updateGroup/UpdateGroupController";
import { FindOneGroupController } from "../modules/group/useCases/findOneGroup/findOneGroupController";

const createGroupController = new CreateGroupController();
const updateGroupController = new UpdateGroupController();
const removeGroupController = new RemoveGroupController();
const findAllGroupController = new FindAllGroupController();
const findOneGroupController = new FindOneGroupController();
const groupRoutes = Router();

groupRoutes.post('/', createGroupController.handle);
groupRoutes.put('/:id', updateGroupController.handle);
groupRoutes.delete('/:id', removeGroupController.handle);
groupRoutes.get('/', findAllGroupController.handle);
groupRoutes.get('/:id', findOneGroupController.handle);

export { groupRoutes }