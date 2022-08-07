const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("rate_card", {
    profileInfo: {
      age: "12",
      name: "Ajay Kumar Singh",
      location: "Delhi",
      profilePicture:
        "https://storage.googleapis.com/ares-profile-pictures/hd/tryanfaucett-0e319b940a16d782f89199f6246a9f36_hd.jpg",
      engagementRate: "5.62", // Remove
      followers: "23,456", // Remove
      email: "iamcloud.dev@gmail.com",
      igId: "iamcloud.dev",
    },
    costing: [
      { amount: 3000, item: "30s Reel" },
      { amount: 2000, item: "60s Reel" },
      { amount: 3000, item: "Static Post" },
      { amount: 4000, item: "Video Post" },
      { amount: 1000, item: "Carousel Post" },
      { amount: 1000, item: "Video Story with Swipe Up" },
      { amount: 10, item: "Video Story without Swipe Up" },
      { amount: 1, item: "Static Story with Swipe Up" },
      { amount: 2, item: "Static Story without Swipe Up" },
      { amount: 1, item: "IGTV" },
      { amount: 2, item: "Live" },
    ],
    metrics: {
      engagementRate: "5.62",
      followers: "23,456",
      audience_country: { AU: 3, IN: 318, MT: 1, NG: 2},
      audience_city: {
        "Thane, Maharashtra": 2,
        "Jagadhri, Haryana": 1,
        "Chandigarh, Chandigarh": 26,
        "Faizabad, Uttar Pradesh": 1,
      },
      audience_gender_age: {
        female_percentage: "88",
        male_percentage: "12",
        female: {
          "13-17": 1,
          "18-24": 69,
          "25-34": 32,
          "35-44": 3,
          "45-54": 6,
          "55-64": 2,
        },
        male: {
          "13-17": 4,
          "18-24": 100,
          "25-34": 51,
          "35-44": 6,
          "45-54": 5,
          "55-64": 1,
        },
        unknown: {
          "13-17": 4,
          "18-24": 31,
          "25-34": 9,
          "35-44": 3,
          "45-54": 1,
        },
      },
    },
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
