import fetch from "node-fetch";

export default async (req, res) => {
  const imageUrl =
    "http://www.vilniausfutbolas.lt" + req.url.replace("/api/image-proxy", "");
  const response = await fetch(imageUrl);
  const buffer = await response.buffer();

  res.setHeader("Content-Type", "image/png");
  res.send(buffer);
};
