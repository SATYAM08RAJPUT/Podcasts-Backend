import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const podcastSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    sr: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    videoUrlId: {
      type: String,
      default: "",
    },
    youtubeUrl: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const webbyAwards = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  videoUrlId: {
    type: String,
  },
  youtubeUrl: {
    type: String,
  },
});

const sidebarItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const SidebarItem = mongoose.model("Sidebars", sidebarItemSchema);
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

app.get("/api/sidebar", async (req, res) => {
  try {
    const podcasts = await SidebarItem.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

const PORT = process.env.PORT || 6065;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
