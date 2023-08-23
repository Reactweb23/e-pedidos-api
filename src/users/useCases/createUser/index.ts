import { UsersRepository } from '@users/repositories/UsersRepository'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'

const usersRepository = UsersRepository.getInstance()
const createUserUseCase = new CreateUserUseCase(usersRepository)
export const createUserController = new CreateUserController(createUserUseCase)
