// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { tab } = req.query;
  const random = Math.floor(Math.random() * 10);
  res.status(200).json({ name: tab, random });
}
