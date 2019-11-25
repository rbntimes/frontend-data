export default async (req, res) => {
  const results = await fetch(
    `https://ionized-protoceratops.glitch.me/addDream`,
    {
      method: "POST",
      body: JSON.stringify({
        username: req.query.username,
        score: req.query.distance
      }),
      headers: { "Content-Type": "application/json" },
      mode: "no-cors"
    }
  );
  const data = await results.json();
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  return res.end(JSON.stringify(data));
};
