import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send('Hello from server!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
