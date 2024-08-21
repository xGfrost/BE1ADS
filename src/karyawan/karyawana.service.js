const { findkaryawan, findkaryawanbyid, deleteid, insertkaryawan, editkaryawan } = require("./karyawan.repository");

const getallkaryawan = async (Nama) => {
    const karyawan = await findkaryawan(Nama);

    return karyawan;
}

const getallkaryawanbyid = async (Nomor_Induk) => {
    const karyawan = await findkaryawanbyid(Nomor_Induk)

    if(!karyawan){
        throw new Error("Nomor induk karyawan not found");
        
    }

    return karyawan;
}

const deletekaryawan = async (Nomor_Induk) => {
    await getallkaryawanbyid(Nomor_Induk);
    await deleteid(Nomor_Induk);
}

const createKaryawan = async (karyawandata) => {
    const karyawan = await insertkaryawan(karyawandata);

    return karyawan;
}

const updatekaryawan = async (Nomor_Induk, karyawandata) => {
    const karyawan = await editkaryawan(Nomor_Induk, karyawandata);

    return karyawan;
}


module.exports = {
    getallkaryawan,
    getallkaryawanbyid,
    deletekaryawan,
    createKaryawan,
    updatekaryawan,

}