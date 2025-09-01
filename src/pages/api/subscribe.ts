import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body;

  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    const convertKitRes = await fetch(
      `https://api.convertkit.com/v3/forms/8504163/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: process.env.CONVERTKIT_API_KEY,
          email,
        }),
      }
    );

    const data = await convertKitRes.json();

    if (convertKitRes.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ error: data });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to subscribe" });
  }
}
