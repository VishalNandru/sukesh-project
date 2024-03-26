const axios = require("axios");
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());


app.get("/", async (request,response) => {
    try {
        const res = await axios.get("https://www.fruityvice.com/api/fruit/all");
        const fruitData = res.data;
        // console.log(fruitData);
        response.send(fruitData)
        

    } catch (error) {
        console.log(error);
    }
})


app.listen(3005,() => {
    console.log("Server is running on 3005");
});


