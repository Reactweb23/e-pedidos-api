import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const dados = request.body

    const users = await this.updateUserUseCase.execute({ id }, dados)

    return response.status(202).json(users)
  }
}
