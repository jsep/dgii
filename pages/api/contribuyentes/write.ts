// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {
  Contribuyente,
  contribuyentes,
} from '../../../contribuyentes/Contribuyentes';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contribuyente[]>,
) {
  const {q} = req.query;
  // req.query.name
  res.status(200).json(await contribuyentes.add());
}
