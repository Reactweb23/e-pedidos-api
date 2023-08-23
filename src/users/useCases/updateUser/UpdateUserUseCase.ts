import { AppError } from '@shared/errors/AppError'
import { User } from '@users/entities/User'
import { UsersRepository } from '@users/repositories/UsersRepository'

type UpdateUserUseCaseParams = {
  id: string
}
type UpdateUserDTO = {
  name?: string
  email: string
  tel_wpp?: number
  address?: string
  category?: string
  password?: string
}
export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute(
    { id }: UpdateUserUseCaseParams,
    dados: UpdateUserDTO,
  ): Promise<User> {
    const user = await this.usersRepository.findById(id)
    if (!user) {
      throw new AppError('Usuário não existe', 404)
    } else {
      const sameEmailAllready = await this.usersRepository.findByEmail(
        dados.email,
      )
      if (sameEmailAllready && user.email !== sameEmailAllready.email) {
        throw new AppError('Escolha outro email', 400)
      } else {
        user.name = dados.name ?? user.name
        user.email = dados.email ?? user.email
        user.tel_wpp = dados.tel_wpp ?? user.tel_wpp
        user.address = dados.address ?? user.address
        user.category = dados.category ?? user.category
        user.password = dados.password ?? user.password
        return this.usersRepository.save(user)
      }
    }
  }
}
