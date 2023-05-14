// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    { nome: 'John Doe' , email: 'blueblue@gmail.com' },
    { nome: 'Mary Doe', email: "blabla@gmail.com" }
  ])
}
