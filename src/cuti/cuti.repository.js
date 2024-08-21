const prisma = require("../db");

const findcuti = async(Tanggal_Cuti) => {
    const ct = await prisma.cuti.findMany({
        where:{
            Tanggal_Cuti:{
                equals: new Date(Tanggal_Cuti)
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

const insertcuti = async (cutidata) => {
    const ky = await prisma.cuti.create({
        data:{
            Nomor_Induk: cutidata.Nomor_Induk,
            Tanggal_Cuti: new Date(cutidata.Tanggal_Cuti),
            Lama_Cuti: parseInt(cutidata.Lama_Cuti),
            Keterangan: cutidata.Keterangan, 
        }
    })
    return ky;
}

const editcuti = async (id, cutidata) => {
    const ky = await prisma.cuti.update({
        where:{
            id: id,
        },
        data:{
            Nomor_Induk: cutidata.Nomor_Induk,
            Tanggal_Cuti: new Date(cutidata.Tanggal_Cuti) ,
            Lama_Cuti: parseInt(cutidata.Lama_Cuti),
            Keterangan: cutidata.Keterangan,
        }
    })
    return ky;
}

const deleteid = async (id) => {
    await prisma.cuti.delete({
        where:{
            id: parseInt(id),
        }
    });
}

module.exports ={
    findcuti,
    findcutibyid,
    insertcuti,
    editcuti,
    deleteid,
}