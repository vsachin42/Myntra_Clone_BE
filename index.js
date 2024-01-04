const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
require('dotenv').config();

const server = express();

server.use(cors());
server.use(express.json());



server.listen(process.env.PORT, async() => {
    try{
        await connection;
        console.log("Connected to the DB");
        console.log(`Running at ${process.env.PORT} port`);
    }catch(err){
     console.log(err);
    }
})