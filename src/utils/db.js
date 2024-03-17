const mongoose = require("mongoose");

const MG_URL = "mongodb+srv://ndlcrm6:DYjAO6UtrVGbfE0R@cluster0.g2avijr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(MG_URL);
        console.log("INFO: Conexión a BD correcta:", conn.connection.name);
    } catch (error) {
        console.log("ERROR: (f connectMongo) ->", error.message);
    }
};


module.exports = { connectMongo };

