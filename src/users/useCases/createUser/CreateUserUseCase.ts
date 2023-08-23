import { AppError } from '@shared/errors/AppError'
import { User } from '@users/entities/User'
import { UsersRepository } from '@users/repositories/UsersRepository'

type CreateUserDTO = {
  name: string
  email: string
  tel_wpp: number
  address: string
  category: string
  password: string
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute(props: CreateUserDTO): Promise<User> {
    const userAllreadyExists = await this.usersRepository.findByEmail(
      props.email,
    )
    if (userAllreadyExists) {
      throw new AppError('Usuário já existe', 400)
    }
    return this.usersRepository.create(props)
  }
}
