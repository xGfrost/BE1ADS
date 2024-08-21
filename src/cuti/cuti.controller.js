const express = require('express');
const { getallcuti, getallcutibyid, createcuti, updatecuti, deletecuti } = require("./cuti.service");
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

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const ct = await getallcutibyid(id);
        res.send(ct)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/", async (req,res) => {
    
    try {
        const cutidata= req.body;
        const ky = await createcuti(cutidata);
        
        res.send(ky);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/update/:id", async (req,res) => {
    try {
        const id = req.params.id
        const cutidata= req.body
        const ky = await updatecuti(id,cutidata);
        res.send(ky);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id
        await deletecuti(id);
        res.send({
            messgae: "Success"
        })
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;