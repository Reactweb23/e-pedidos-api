import { UsersRepository } from '@users/repositories/UsersRepository'
import { UpdateUserUseCase } from './UpdateUserUseCase'
import { UpdateUserController } from './UpdateUserController'

const usersRepository = UsersRepository.getInstance()
const updateUserUseCase = new UpdateUserUseCase(usersRepository)
export const updateUserController = new UpdateUserController(updateUserUseCase)
