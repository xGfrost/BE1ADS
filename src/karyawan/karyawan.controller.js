const express = require('express');
const { getallkaryawan, getallkaryawanbyid } = require("./karyawana.service");
const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const nama = req.query.nama;
        let karyawan;
        if (nama) {
            karyawan = await getallkaryawan(nama);
        } else {
            karyawan = await getallkaryawan();
        }
        res.send(karyawan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/:id", async (req,res) => {
    try {
        const id = req.params.id;
        const karyawan = await getallkaryawanbyid(id);
        res.send(karyawan);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;
