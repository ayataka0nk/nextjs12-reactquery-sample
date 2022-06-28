import { NextApiRequest, NextApiResponse } from 'next'
import { dummyUsers } from '../../../mock/data/dummyUsers'
import { User } from '../../../types/User'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  if (typeof req.query.userId !== 'string') {
    throw new Error()
  }

  const userId = Number(req.query.userId)

  if (req.method === 'GET') {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const user = dummyUsers.find((user) => user.userId === userId)
    if (typeof user === 'undefined') {
      res.status(404).end()
      return
    }
    res.json(user)
    return
  } else if (req.method === 'POST') {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(req.body)
    res.status(204).end()
    return
  } else {
    throw new Error()
  }
}
