const prisma = require("../db");

const findkaryawan = async(Nama) => {
    const karyawan = await prisma.karyawan.findMany({
        where:{
            Nama:{
                contains:Nama
            }
        }
    })
    return karyawan;
}

const findkaryawanbyid = async (Nomor_Induk) => {
    const karyawan = await prisma.karyawan.findUnique({
        where:{
            Nomor_Induk: Nomor_Induk,
        },
        include:{
            cuti: true
        }
    })
    return karyawan;
}

const insertkaryawan = async (karyawandata) => {
    const karyawan = await prisma.karyawan.create({
       Nama: karyawandata.Nama,
       Alamat: karyawandata.Alamat,
       Tanggal_Lahir: Date(karyawandata.Tanggal_Lahir), 
    })
    return karyawan;
}

const editkaryawan = async (Nomor_Induk, karyawandata) => {
    const karyawan = await prisma.karyawan.update({
        where:{
            Nomor_Induk: Nomor_Induk,
        },
        data:{
            Nama: karyawandata.Nama,
            Alamat: karyawandata.Alamat,
            Tanggal_Lahir: Date(karyawandata.Tanggal_Lahir),
        }
    })
    return karyawan;
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