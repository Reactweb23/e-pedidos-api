import { AppError } from '@shared/errors/AppError'
import { User } from '@users/entities/User'
import { UsersRepository } from '@users/repositories/UsersRepository'

type ShowUsersUseCaseParams = {
  id: string
}
export class ShowUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute({ id }: ShowUsersUseCaseParams): Promise<User> {
    const user = this.usersRepository.findById(id)
    if (user) {
      return user
    } else {
      throw new AppError('Usuário não existe', 404)
    }
  }
}
