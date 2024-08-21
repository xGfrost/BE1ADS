const prisma = require("../db");

const findcuti = async(Tanggal_Cuti) => {
    const ct = await prisma.cuti.findMany({
        where:{
            Tanggal_Cuti:{
                contains:Tanggal_Cuti
            }
        }
    })
    return ct;
}

const findcutibyid = async (Nomor_Induk) => {
    const ct = await prisma.cuti.findMany({
        where:{
            Nomor_Induk: Nomor_Induk,
        },
        include:{
            karyawan: true
        }
    })
    return ct;
}

module.exports ={
    findcuti,
    findcutibyid,
}