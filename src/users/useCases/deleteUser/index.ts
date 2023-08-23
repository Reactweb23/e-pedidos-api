import { UsersRepository } from '@users/repositories/UsersRepository'
import { DeleteUserUseCase } from './DeleteUserUseCase'
import { DeleteUserController } from './DeleteUserController'

const usersRepository = UsersRepository.getInstance()
const deleteUserUseCase = new DeleteUserUseCase(usersRepository)
export const deleteUserController = new DeleteUserController(deleteUserUseCase)
