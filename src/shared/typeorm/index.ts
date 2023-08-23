import { DataSource } from 'typeorm'
import 'dotenv/config'
import { CreateUserTable1692629482715 } from './migrations/1692629482715-CreateUserTable'
import { User } from '@users/entities/User'

export const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User],
  migrations: [CreateUserTable1692629482715],
})
