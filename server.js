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

const featuredSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  linkTitle: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  videoUrlId: {
    type: String,
    required: true,
  },
  youtubeUrl: {
    type: String,
    required: true,
  },
});

const Featured = mongoose.model("Featured", featuredSchema);

const RajShamiouters = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    videoUrlId: {
      type: String,
      required: true,
    },
    youtubeUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Under20Mins = new mongoose.Schema(
  {
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
      required: true,
    },
    youtubeUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PodcastStarted = new mongoose.Schema(
  {
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
      required: false, // ek videoUrlId blank hai, isliye required false
    },
    youtubeUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DiscoverCarousel = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    linkTitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    videoUrlId: {
      type: String,
      required: true,
    },
    youtubeUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SubCategorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const CategorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: [SubCategorySchema],
});

const BharthiTvOuter = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    videoUrlId: {
      type: String,
      required: true,
    },
    youtubeUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BharthiTvInner = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  videoUrlId: {
    type: String,
    required: true,
  },
  youtubeUrl: {
    type: String,
    required: true,
  },
});

const Ranveerallahbadiaouters = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    videoUrlId: {
      type: String,
      required: true,
    },
    youtubeUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Guestcuratorcards = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  videoUrlId: {
    type: String,
    required: true,
  },
  youtubeUrl: {
    type: String,
    required: true,
  },
});

const Networkhighlights = new mongoose.Schema({
  id: {
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
  linkTitle: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  guestCurImg: {
    type: String,
    required: true,
  },
});

const SidebarItem = mongoose.model("Sidebars", sidebarItemSchema);
const PodcastTreding = mongoose.model("trends", podcastSchema);
const Webbyawards = mongoose.model("webbyawards", webbyAwards);
const NewReleaseData = mongoose.model("newreleasecarouseldatas", webbyAwards);
const RajShamiOuter = mongoose.model("rajshamaniouters", RajShamiouters);
const UnderTwentyMin = mongoose.model("under20mins", Under20Mins);
const PodCastStart = mongoose.model("podcaststarteds", PodcastStarted);
const DisCoverCarousel = mongoose.model("discovercarousels", DiscoverCarousel);
const Category = mongoose.model("discoverbtns", CategorySchema);
const BhartiTvOuters = mongoose.model("bhartitvouters", BharthiTvOuter);
const BhartiTvInnrers = mongoose.model("bhartitvinners", BharthiTvInner);
const Ranveerallahbadiaouter = mongoose.model(
  "ranveerallahbadiaouters",
  Ranveerallahbadiaouters
);
const ReLivingsingleouter = mongoose.model(
  "relivingsingleouters",
  Ranveerallahbadiaouters
);
const GuestCuratorCard = mongoose.model("guestcuratorcards", Guestcuratorcards);
const Networkhighlight = mongoose.model("networkhighlights", Networkhighlights);

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

app.get("/api/NewReleaseCarouselData", async (req, res) => {
  try {
    const podcasts = await NewReleaseData.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

app.get("/api/rajShamiouter", async (req, res) => {
  try {
    const podcasts = await RajShamiOuter.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

app.get("/api/under20Min", async (req, res) => {
  try {
    const podcasts = await UnderTwentyMin.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

app.get("/api/podcastStarted", async (req, res) => {
  try {
    const podcasts = await PodCastStart.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

app.get("/api/discoverCarousel", async (req, res) => {
  try {
    const podcasts = await DisCoverCarousel.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

app.get("/api/discoverBtn", async (req, res) => {
  try {
    const podcasts = await Category.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

app.get("/api/bhartitvouter", async (req, res) => {
  try {
    const podcasts = await BhartiTvOuters.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

app.get("/api/bhartitvinner", async (req, res) => {
  try {
    const podcasts = await BhartiTvInnrers.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

app.get("/api/ranveerallahbadiaouter", async (req, res) => {
  try {
    const podcasts = await Ranveerallahbadiaouter.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

app.get("/api/reLivingsingleouters", async (req, res) => {
  try {
    const podcasts = await ReLivingsingleouter.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

app.get("/api/guestcuratorcards", async (req, res) => {
  try {
    const podcasts = await GuestCuratorCard.find();
    console.log(podcasts);
    res.json(podcasts);
  } catch (err) {
    console.error("Error fetching podcasts:", err);
    res.status(500).send("Error fetching SidebarItem");
  }
});

app.get("/api/networkhighlight", async (req, res) => {
  try {
    const podcasts = await Networkhighlight.find();
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
