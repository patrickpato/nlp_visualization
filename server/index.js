const express = require("express")
const app = express();
const cors = require("cors"); 
const pool = require("./db")

app.use(cors()); 
app.use(express.json());



app.get("/twitteropinions", async(req, res) => {
    try {
        const twitter_results = await pool.query("SELECT * from sampleopinions LIMIT 5");
        res.json(twitter_results.rows)
        
    } catch (err) {
        console.error(err.message)
        
    }
})
app.get("/twitteropinions/:count", async(req, res) => {
    try {
        const num_tweets = await pool.query("SELECT COUNT(*) FROM sampleopinions");
        res.json(num_tweets.rows)
        
    } catch (err) {
        console.error(err.message)
        
    }
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
})