const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/download", async (req, res) => {
  const { url } = req.body;
  try {
    const response = await axios.get(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengunduh video" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server berjalan di http://localhost:5000");
});
