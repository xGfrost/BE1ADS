const { findkaryawan, findkaryawanbyid, deleteid, insertkaryawan, editkaryawan } = require("./karyawan.repository");

const getallkaryawan = async (Nama) => {
    const ky = await findkaryawan(Nama);

    return ky;
}

const getallkaryawanbyid = async (Nomor_Induk) => {
    const ky = await findkaryawanbyid(Nomor_Induk)

    if(!ky){
        throw new Error("Nomor induk ky not found");
        
    }

    return ky;
}

const deletekaryawan = async (Nomor_Induk) => {
    await getallkaryawanbyid(Nomor_Induk);
    await deleteid(Nomor_Induk);
}

const createKaryawan = async (karyawandata) => {
    const ky = await insertkaryawan(karyawandata);

    return ky;
}

const updatekaryawan = async (Nomor_Induk, karyawandata) => {
    const ky = await editkaryawan(Nomor_Induk, karyawandata);

    return ky;
}


module.exports = {
    getallkaryawan,
    getallkaryawanbyid,
    deletekaryawan,
    createKaryawan,
    updatekaryawan,

}