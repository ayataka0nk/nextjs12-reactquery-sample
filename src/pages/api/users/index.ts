import type { NextApiRequest, NextApiResponse } from 'next'
import { dummyUsers } from '../../../mock/data/dummyUsers'
import { User } from '../../../types/User'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  res.status(200).json(dummyUsers)
}
