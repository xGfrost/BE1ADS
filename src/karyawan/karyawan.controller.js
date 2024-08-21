const express = require('express');
const { getallkaryawan, getallkaryawanbyid } = require("./karyawana.service");
const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const Nama = req.query.Nama;
        let karyawan;
        if (Nama) {
            karyawan = await getallkaryawan(Nama);
        } else {
            karyawan = await getallkaryawan();
        }
        res.send(karyawan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/:Nomor_Induk", async (req,res) => {
    try {
        const Nomor_Induk = req.params.Nomor_Induk;
        const karyawan = await getallkaryawanbyid(Nomor_Induk);
        res.send(karyawan);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;
