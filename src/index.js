const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

const karyawanController = require("./karyawan/karyawan.controller");
const cutiController = require("./cuti/cuti.controller");

app.use('/karyawan', karyawanController);
// app.use('/cuti', cutiController);


app.listen(PORT, () =>{
    console.log("express API rinningin port: " + PORT);
})

