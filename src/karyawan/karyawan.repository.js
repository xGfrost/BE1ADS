const prisma = require("../db");

const findkaryawan = async(nama) => {
    const karyawan = await prisma.karyawan.findMany({
        where:{
            nama:{
                contains:nama
            }
        }
    })
}

const findkaryawanbyid = async (id) => {
    const karyawan = await prisma.karyawan.findUnique({
        where:{
            id: id,
        },
        include:{
            cuti: true
        }
    })
}


module.exports ={
    findkaryawan,
    findkaryawanbyid,

}