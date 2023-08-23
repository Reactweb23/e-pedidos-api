import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { dataSource } from '@shared/typeorm'

const port = process.env.PORT || 3000

dataSource.initialize().then(() => {
  app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
  })
})
