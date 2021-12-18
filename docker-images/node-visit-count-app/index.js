const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
    url: "redis://redis-server:6379"
});

client.connect().then(r => console.log("Connected to redis"));

client.set('visits', 0);

app.get('/', async (req, res) => {
    let visits = await client.get('visits');

    visits = parseInt(visits) + 1;
    await client.set('visits', visits) ;

    res.send(`Number of visits is  ${visits}`);
});

app.listen(8081, () => {
    console.log("Listening on port 8081");
});