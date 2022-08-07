const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('rate_card', {
        profileInfo: {
                age: "12",
                name: "Ajay Kumar Singh",
                location: "Delhi",
                profilePicture: "https://storage.googleapis.com/ares-profile-pictures/hd/tryanfaucett-0e319b940a16d782f89199f6246a9f36_hd.jpg",
                engagementRate: "5.62", // Remove this from here
                followers: "23,456",
                email: "iamcloud.dev@gmail.com",
                igId: "iamcloud.dev",
        },
        metrics: {
            engagementRate: "5.62",
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
