import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        links: true, // Include the user's links
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Only return necessary user details
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      links: user.links, // Assuming you have a links relation in the user model
    };

    return res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
