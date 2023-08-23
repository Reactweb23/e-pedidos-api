import { AppError } from '@shared/errors/AppError'
import { UsersRepository } from '@users/repositories/UsersRepository'

type DeleteUserUseCaseParams = {
  id: string
}
export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute({ id }: DeleteUserUseCaseParams): Promise<void> {
    const user = await this.usersRepository.findById(id)
    if (user) {
      await this.usersRepository.delete(user)
    } else {
      throw new AppError('Usuário não existe', 404)
    }
  }
}
