import { UsersRepository } from '@users/repositories/UsersRepository'
import { ShowUsersUseCase } from './ShowUsersUseCase'
import { ShowUsersController } from './ShowUsersController'

const usersRepository = UsersRepository.getInstance()
const showUsersUseCase = new ShowUsersUseCase(usersRepository)
export const showUsersController = new ShowUsersController(showUsersUseCase)
