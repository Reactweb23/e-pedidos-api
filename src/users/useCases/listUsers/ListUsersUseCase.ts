import {
  UserPaginateProperties,
  UsersRepository,
} from '@users/repositories/UsersRepository'

type ListUsersUseCaseParams = {
  page: number
  limit: number
}
export class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute({
    page,
    limit,
  }: ListUsersUseCaseParams): Promise<UserPaginateProperties> {
    const take = limit
    const skip = (Number(page) - 1) * take
    return this.usersRepository.findAll({ page, skip, take })
  }
}
