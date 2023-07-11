import {
  UserCreate,
  UserRead,
  UserRepo,
  UserReturn,
  UserUpdate,
} from "../interfaces";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);

  return userReturnSchema.parse(user);
};

const read = async (admin: boolean): Promise<UserRead> => {
  if (admin) {
    const users: Array<User> = await userRepository.find({ withDeleted: true });
    return userReadSchema.parse(users);
  }
  return userReadSchema.parse(await userRepository.find());
};

const update = async (user: User, payload:UserUpdate): Promise<UserReturn> => {

  const repo: UserRepo = userRepository;
  const newUser: User = repo.create({...user,...payload})

  await repo.save(newUser);

  return userReturnSchema.parse(newUser)

};

const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, update, destroy };
