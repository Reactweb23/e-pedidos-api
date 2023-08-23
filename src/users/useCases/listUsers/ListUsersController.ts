import { Request, Response } from 'express'
import { ListUsersUseCase } from './ListUsersUseCase'

export class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1
    const limit =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 15

    const users = await this.listUsersUseCase.execute({ page, limit })

    return response.status(200).json(users)
  }
}
