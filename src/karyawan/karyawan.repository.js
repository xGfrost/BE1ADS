const prisma = require("../db");

const findkaryawan = async(Nama) => {
    const ky = await prisma.karyawan.findMany({
        where:{
            Nama:{
                contains:Nama
            }
        }
    })
    return ky;
}

const findkaryawanbyid = async (Nomor_Induk) => {
    const ky = await prisma.karyawan.findUnique({
        where:{
            Nomor_Induk: Nomor_Induk,
        },
        include:{
            cuti: true
        }
    })
    return ky;
}

const insertkaryawan = async (karyawandata) => {
    const ky = await prisma.karyawan.create({
        data:{
            Nomor_Induk: karyawandata.Nomor_Induk,
            Nama: karyawandata.Nama,
            Alamat: karyawandata.Alamat,
            Tanggal_Lahir: new Date(karyawandata.Tanggal_Lahir), 
        }
    })
    return ky;
}

const editkaryawan = async (Nomor_Induk, karyawandata) => {
    const ky = await prisma.karyawan.update({
        where:{
            Nomor_Induk: Nomor_Induk,
        },
        data:{
            Nomor_Induk: karyawandata.Nomor_Induk,
            Nama: karyawandata.Nama,
            Alamat: karyawandata.Alamat,
            Tanggal_Lahir: new Date(karyawandata.Tanggal_Lahir),
        }
    })
    return ky;
}

const deleteid = async (Nomor_Induk) => {
    await prisma.karyawan.delete({
        where:{
            Nomor_Induk: Nomor_Induk,
        }
    });
}


module.exports ={
    findkaryawan,
    findkaryawanbyid,
    insertkaryawan,
    deleteid,
    editkaryawan,
}