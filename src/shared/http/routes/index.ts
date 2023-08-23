import { Router } from 'express'
import { usersRouter } from '@users/http/routes/users.routes'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json('App E-garcon -v 1.0.0')
})

routes.use('/users', usersRouter)

export { routes }
