import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());

// process.env.MONGO_URI
// mongodb://localhost:27017/Podcasts

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const podcastSchema = new mongoose.Schema({
  id: Number,
  sr: Number,
  image: String,
  title: String,
  publisher: String,
});

const webbyAwards = new mongoose.Schema({
  id: Number,
  title: String,
  publisher: String,
  image: String,
});

const PodcastTreding = mongoose.model("trends", podcastSchema);
const Webbyawards = mongoose.model("webbyawards", webbyAwards);

app.get("/api/trending", async (req, res) => {
  try {
    const podcasts = await PodcastTreding.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching podcasts");
  }
});

app.get("/api/trending/:id", async (req, res) => {
  try {
    const podcast = await PodcastTreding.findOne({ id: req.params.id });
    if (!podcast) {
      return res.status(404).json({ message: "Podcast not found" });
    }
    res.json(podcast);
  } catch (err) {
    console.error("Error fetching podcast by ID:", err);
    res.status(500).send("Error fetching podcast");
  }
});

app.get("/api/webbyawards", async (req, res) => {
  try {
    const podcasts = await Webbyawards.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching webbyAwards");
  }
});
const PORT = process.env.PORT || 6065;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
