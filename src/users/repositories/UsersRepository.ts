import { User } from '@users/entities/User'
import { dataSource } from '@shared/typeorm'
import { Repository } from 'typeorm'

type CreateUserDTO = {
  name: string
  email: string
  tel_wpp: number
  address: string
  category: string
  password: string
}
export type PaginateParams = {
  page: number
  skip: number
  take: number
}
export type UserPaginateProperties = {
  per_page: number
  total: number
  current_page: number
  data: User[]
}
export class UsersRepository {
  private usersRepo: Repository<User>
  private static INSTANCE: UsersRepository

  private constructor() {
    this.usersRepo = dataSource.getRepository(User)
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository()
    }
    return UsersRepository.INSTANCE
  }

  //Desestruturar os dados vindo do controller e salvar
  async create(props: CreateUserDTO): Promise<User> {
    const user = this.usersRepo.create({
      name: props.name,
      email: props.email,
      tel_wpp: props.tel_wpp,
      address: props.address,
      category: props.category,
      password: props.password,
      created_at: new Date(),
      updated_at: null,
    })

    return this.usersRepo.save(user)
  }

  async save(user: User): Promise<User> {
    return this.usersRepo.save(user)
  }

  async delete(user: User): Promise<void> {
    await this.usersRepo.remove(user)
  }

  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<UserPaginateProperties[]> {
    const [users, count] = await this.usersRepo
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount()
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: users,
    }
    return result
  }

  async findById(id: string): Promise<User | null> {
    return this.usersRepo.findOneBy({ id })
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepo.findOneBy({ email })
  }
}
