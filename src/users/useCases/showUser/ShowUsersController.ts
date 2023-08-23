import { Request, Response } from 'express'
import { ShowUsersUseCase } from './ShowUsersUseCase'

export class ShowUsersController {
  constructor(private showUsersUseCase: ShowUsersUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const users = await this.showUsersUseCase.execute({ id })

    return response.status(200).json(users)
  }
}
