const express = require('express');
const { getallkaryawan, getallkaryawanbyid, createKaryawan, updatekaryawan, deletekaryawan } = require("./karyawan.service");
const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const Nama = req.query.Nama;
        let ky;
        if (Nama) {
            ky = await getallkaryawan(Nama);
        } else {
            ky = await getallkaryawan();
        }
        res.send(ky);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/:Nomor_Induk", async (req,res) => {
    try {
        const Nomor_Induk = req.params.Nomor_Induk;
        const ky = await getallkaryawanbyid(Nomor_Induk);
        res.send(ky);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/", async (req,res) => {
    
    try {
        const karyawandata= req.body;
        const ky = await createKaryawan(karyawandata);
        
        res.send(ky);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/update/:Nomor_Induk", async (req,res) => {
    try {
        const Nomor_Induk = req.params.Nomor_Induk
        const karyawandata= req.body
        const ky = await updatekaryawan(Nomor_Induk,karyawandata);
        res.send(ky);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/delete/:Nomor_Induk", async (req, res) => {
    try {
        const Nomor_Induk = req.params.Nomor_Induk
        await deletekaryawan(Nomor_Induk);
        res.send({
            messgae: "Success"
        })
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;
