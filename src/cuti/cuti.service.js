const { findcuti, findcutibyid, deleteid, insertcuti, editcuti } = require("./cuti.repository")

const getallcuti = async (Tanggal_Cuti) => {
    const ct = await findcuti(Tanggal_Cuti);

    return ct;
}

const getallcutibyid = async (id) => {
    const ct = await findcutibyid(id);

    if(!ct){
        throw new Error("Cuti Id not found")
    }
    return ct;
}

const deletecuti = async (id) => {
    await getallcutibyid(id);
    await deleteid(id);
    
}

const createcuti = async (cutidata) => {
    const ct = await insertcuti(cutidata);
    return ct;
}

const updatecuti = async (id, cutidata) => {
    await getallcutibyid(id);
    const ct = await editcuti(id, cutidata);
    return ct;
}

module.exports ={
    getallcuti,
    getallcutibyid,
    deletecuti,
    createcuti,
    updatecuti,
}