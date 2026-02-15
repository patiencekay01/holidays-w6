import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

app.get('/', (req, res) => {
    res.send("Server connected")
})

app.get('/api/unsplash/collection', async (req, res) => {
  
    const collectionID = 'qeQURMsKYh0';
    const unsplashConnection = process.env.UNSPLASH_ACCESS_KEY;

    const url = `https://api.unsplash.com/collections/${collectionID}/photos?client_id=${unsplashConnection}`;

    const response = await fetch(url);

    const data = await response.json();
    res.json(data);
    });

app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000");
});
