const express = require("express");
const PORT = 4000;
const app = express();
app.use(express.json());
const { connectMongo } = require("./src/utils/db")
connectMongo();


const moviesRouter = require("./src/api/routes/movies.routes");

app.get("/", (req, res) => {
    res.send("Server is up");
});


app.use("/movies", moviesRouter);
















app.listen(PORT, () => console.log("escuchando en el puerto", PORT));