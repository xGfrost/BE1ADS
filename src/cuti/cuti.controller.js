const express = require('express');
const { getallcuti, getallcutibyid } = require("./cuti.service");
const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const Tanggal_Cuti = req.query.Tanggal_Cuti;
        let ct;
        if (Tanggal_Cuti) {
            ct = await getallcuti(Tanggal_Cuti);
        } else {
            ct = await getallcuti();
        }
        res.send(ct)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get("/:Nomor_Induk", async (req, res) => {
    console.log(req.params.Nomor_Induk)
    try {
        const Nomor_Induk = req.params.Nomor_Induk;
        const ct = await getallcutibyid(Nomor_Induk);
        res.send(ct)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;