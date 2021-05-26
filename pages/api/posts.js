// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../lib/prisma.ts";

export default (req, res) => {
  if (req.method === "GET") {
    const getPosts = async () => {
      const posts = await prisma.post.findMany();
      res.status(200).json({ posts });
      res.end();
    };
    try {
      getPosts();
    } catch (error) {
      res.status(201).json({ message: error });
      res.end();
    }
  } else {
    res.status(405);
    res.end();
  }
};
