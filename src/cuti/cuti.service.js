const { findcuti, findcutibyid } = require("./cuti.repository")

const getallcuti = async (Tanggal_Cuti) => {
    const ct = await findcuti(Tanggal_Cuti);

    return ct;
}

const getallcutibyid = async (Nomor_Induk) => {
    const ct = await findcutibyid(Nomor_Induk);

    if(!ct){
        throw new Error("Cuti Id not found")
    }
    return ct;
}

module.exports ={
    getallcuti,
    getallcutibyid,
}