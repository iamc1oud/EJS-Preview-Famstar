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
      { amount: 1000, item: "Video Story without Swipe Up" },
      { amount: 1000, item: "Static Story with Swipe Up" },
      { amount: 2000, item: "Static Story without Swipe Up" },
      { amount: 1000, item: "IGTV" },
      { amount: 2000, item: "Live" },
    ],

    

    metrics: {
      engagementRate: "5.62",
      followers: "34,610",
      audience_country: { Australia: 3, India: 318, USA: 1, Nigeria: 2},
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
          "13-17": 1000,
          "18-24": 6900,
          "25-34": 3200,
          "35-44": 3000,
          "45-54": 600,
          "55-64": 200,
        },
        male: {
          "13-17": 4000,
          "18-24": 1000,
          "25-34": 5100,
          "35-44": 600,
          "45-54": 500,
          "55-64": 1000,
        },
        unknown: {
          "13-17": 400,
          "18-24": 310,
          "25-34": 900,
          "35-44": 3000,
          "45-54": 1000,
        },
        
      },
    
    },

    
    
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
