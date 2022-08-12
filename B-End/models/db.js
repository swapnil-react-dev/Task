const mongoose = require("mongoose");

//single connection

const uri = "mongodb://localhost:27017/products";
mongoose.connect(uri, (err) => {
    if (err) console.log("could not connected ", err);
});

//get the default connection

const conn = mongoose.connection;
conn.on("connected", () => {
    console.log("connected to DB...");
});

conn.on("disconnected", () => {
    console.log("dissconnected from DB...");
});

conn.on("Error", () => {
    console.log("could not connected...");
});


// practis eproject code



