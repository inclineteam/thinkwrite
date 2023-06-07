// // pages/api/post/index.ts

//   const { title, content } = req.body;

//   const session = await getSession({ req });
//   const result = await prisma.post.create({
//     data: {
//       title: title,
//       content: content,
//       author: { connect: { email: session?.user?.email } },
//     },
//   });
//   res.json(result);
// }


import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, content } = req.body;

    try {
      const result = await prisma.post.create({
        data: {
          title,
          content,
          
        },
      });
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create draft' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
