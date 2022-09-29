import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  res.send('Api World!')
})

app.get('/user', async (req: any, res: any) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
    console.log(error);
  }
})


app.get('/posts', async (req: any, res: any) => {
  try {
    const posts = await prisma.post.findMany()
    res.status(200).json(posts)
  } catch (error) {
    console.log(error);
  }
})

app.get('/user-with-posts', async (req: any, res: any) => {
  try {
    const users = await prisma.user.findMany({
      include: { posts: true }
    })
    res.status(200).json(users)
  } catch (error) {
    console.log(error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})