import Nav from "../homepage/nav";
import { Link } from "react-router-dom";
import Kegiatan1 from './assets/Kegiatan1.png'
import Kegiatan2 from './assets/Kegiatan2.jpeg'
import Kegiatan3 from './assets/Kegiatan3.jpeg'
import Kegiatan4 from './assets/Kegiatan4.jpeg'
import Kegiatan5 from './assets/Kegiatan5.jpg'
import Kegiatan6 from './assets/Kegiatan6.jpg'
import Kegiatan7 from './assets/kegiatan7.jpg'
import Kegiatan8 from './assets/kegiatan8.jpg'
import Kegiatan9 from './assets/Kegiatan9.jpg'
import Footer from "../homepage/footer";

const Riset = () => {
    return ( 
        <>
        <Nav/>
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
            <h1 className="text-3xl border-b-4 border-blue-700 font-semibold">Kegiatan</h1>
            <h4 className="text-lg font-medium text-gray-700">Riset</h4>
            </div>
            <div className="my-5 flex flex-row items-center gap-5">
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan1} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">9 MAR, 2023</h5>
                    <Link to={'/Rnews1'} className='text-blue-600' >Smart Health System</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan2} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">13 FEB, 2023</h5>
                    <Link to={'/Rnews2'} className='text-blue-600' >Proses Pembuatan Mobil Listrik</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan3} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">15 SEP, 2022</h5>
                    <Link to={'/Rnews3'} className='text-blue-600' >Diskusi Lanjutan dengan Tim Teknik Sipil Universitas Bandar Lampung</Link>
                </div>
            </div>
            <div className="my-5 flex flex-row items-center gap-5">
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan4} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">3 SEP, 2021</h5>
                    <Link to={'/Rnews4'} className='text-blue-600' >Sosialisasi Aplikasi Kawal Desa di Desa Rejomulyo</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan5} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">13 FEB, 2023</h5>
                    <Link to={'/Rnews5'} className='text-blue-600' >Seminar Nasional Teknologi Informatika UIKA Bogor</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan6} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">25 APR, 2018</h5>
                    <Link to={'/Rnews6'} className='text-blue-600' >Serah Terima IoT Tracker ke STMIK Bina Insani</Link>
                </div>
            </div>
            <div className="my-5 flex flex-row items-center gap-5">
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan7} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">25 APR, 2018</h5>
                    <Link to={'/Rnews7'} className='text-blue-600' >Serah Terima IoT Tracker Universitas Trilogi</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan8} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">11 APR, 2018</h5>
                    <Link to={'/Rnews8'} className='text-blue-600' >Pertemuan Rutin PPTIK Bersama Forum Angkot</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan9} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">14 MAR, 2018</h5>
                    <Link to={'/Rnews9'} className='text-blue-600' >Diskusi PPTI 2018 bersama Ristekdikti</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Riset;