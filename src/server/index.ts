import express from 'express';

const ENV_PREFIX = "TEST";


const app = express();
var port = 3000;
var clientPath = "build/client";

if (process.env[ENV_PREFIX + "_PORT"]) {
    port = Number(process.env[ENV_PREFIX + "_PORT"]);
} else {
    console.error("Set " + ENV_PREFIX + "_PORT environment variable to set port");
}

if (process.env[ENV_PREFIX + "_CLIENT_PATH"]) {
    clientPath = process.env[ENV_PREFIX + "_CLIENT_PATH"]!;
}


app.get('/api/test', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send('Hello from server!');
});

app.use(express.static(clientPath));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
