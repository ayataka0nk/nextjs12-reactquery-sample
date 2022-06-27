import type { NextApiRequest, NextApiResponse } from 'next'
import { Industry } from '../../types/Industry'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Industry[]>
) {
  res.status(200).json([
    {
      industryId: 1,
      industryName: '農林・水産',
    },
    {
      industryId: 2,
      industryName: '林業',
    },
    {
      industryId: 3,
      industryName: '漁業',
    },
    {
      industryId: 4,
      industryName: '鉱業',
    },
    {
      industryId: 5,
      industryName: '建設業',
    },
    {
      industryId: 6,
      industryName: '製造業',
    },
    {
      industryId: 7,
      industryName: '電気・ガス',
    },
    {
      industryId: 8,
      industryName: '運輸・通信業',
    },
    {
      industryId: 9,
      industryName: '卸売・小売・飲食業',
    },
    {
      industryId: 10,
      industryName: '金融・保険業',
    },
    {
      industryId: 11,
      industryName: '不動産業',
    },
    {
      industryId: 12,
      industryName: 'サービス業',
    },
    {
      industryId: 13,
      industryName: 'その他',
    },
  ])
}
