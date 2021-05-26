import prisma from "../../lib/prisma.ts";

export default async (req, res) => {
  console.log(req.body);

  try {
    const newPost = await prisma.post.create({
      data: { title: req.body.title, content: req.body.content },
    });
    console.log(newPost);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
};
