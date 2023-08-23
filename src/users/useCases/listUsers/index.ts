import { UsersRepository } from '@users/repositories/UsersRepository'
import { ListUsersUseCase } from './ListUsersUseCase'
import { ListUsersController } from './ListUsersController'

const usersRepository = UsersRepository.getInstance()
const listUsersUseCase = new ListUsersUseCase(usersRepository)
export const listUsersController = new ListUsersController(listUsersUseCase)
