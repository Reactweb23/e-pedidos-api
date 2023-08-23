import { createUserController } from '@users/useCases/createUser'
import { deleteUserController } from '@users/useCases/deleteUser'
import { listUsersController } from '@users/useCases/listUsers'
import { showUsersController } from '@users/useCases/showUser'
import { updateUserController } from '@users/useCases/updateUser'
import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

const usersRouter = Router()

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(2).required(),
      email: Joi.string().email().example('teste@email.com').required(),
      tel_wpp: Joi.number().min(9).required(),
      address: Joi.string().min(8).required(),
      category: Joi.string().required(),
      password: Joi.string().min(8).max(36).required(),
    }),
  }),
  (request, response) => {
    return createUserController.handle(request, response)
  },
)

usersRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (request, response) => {
    return listUsersController.handle(request, response)
  },
)

usersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return showUsersController.handle(request, response)
  },
)

usersRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(2).required(),
      email: Joi.string().email().example('teste@email.com').required(),
      tel_wpp: Joi.number().min(9),
      address: Joi.string().min(8),
      category: Joi.string(),
      password: Joi.string().min(8).max(36),
    }),
  }),
  (request, response) => {
    return updateUserController.handle(request, response)
  },
)

usersRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return deleteUserController.handle(request, response)
  },
)

export { usersRouter }
