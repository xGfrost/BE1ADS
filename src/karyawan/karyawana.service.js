const { findkaryawan, findkaryawanbyid } = require("./karyawan.repository");

const getallkaryawan = async (nama) => {
    const karyawan = await findkaryawan(nama);

    return karyawan;
}

const getallkaryawanbyid = async (id) => {
    const karyawan = await findkaryawanbyid(id)

    return karyawan;
}


module.exports = {
    getallkaryawan,
    getallkaryawanbyid,

}