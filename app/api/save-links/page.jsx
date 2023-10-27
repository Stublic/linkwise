import { getSession } from "next-auth/react";
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === "POST") {
    const { links } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Create and save the links to the database
      await prisma.link.createMany({
        data: links.map((link) => ({
          platform: link.platform,
          link: link.link,
          userId: user.id,
        })),
      });

      return res.status(200).json({ message: "Links saved successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error saving links" });
    }
  }

  return res.status(405).end();
}
