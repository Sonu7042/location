const express = require("express");
const ipinfo = require("ipinfo");

const app = express();

app.get("/location", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//   console.log(ip , "sonu")
  
  ipinfo(ip, (err, cLoc) => {
    if (err) return res.status(500).send("Error getting location");
    res.json(cLoc);
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
