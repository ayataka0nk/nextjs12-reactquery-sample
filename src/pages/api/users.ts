import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../types/User'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  res.status(200).json([
    {
      userId: 1,
      userName: '田中太郎',
      userNameKana: 'タナカタロウ',
      industryId: 1,
    },
    {
      userId: 2,
      userName: '田中次郎',
      userNameKana: 'タナカジロウ',
      industryId: 1,
    },
    {
      userId: 3,
      userName: '丑嶋馨',
      userNameKana: 'ウシジマカオル',
      industryId: 10,
    },
  ])
}
