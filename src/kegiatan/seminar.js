import Nav from "../homepage/nav";
import Kegiatan1 from './assets/S-kegiatan1.jpeg'
import Kegiatan2 from './assets/S-kegiatan2.jpeg'
import Kegiatan3 from './assets/S-kegiatan3.png'
import Kegiatan4 from './assets/S-kegiatan4.jpeg'
import Kegiatan5 from './assets/S-kegiatan5.jpeg'
import Kegiatan6 from './assets/S-kegiatan6.jpeg'
import Kegiatan7 from './assets/S-kegiatan7.jpeg'
import Kegiatan8 from './assets/S-kegiatan8.jpeg'
import Kegiatan9 from './assets/S-kegiatan9.jpeg'
import { Link } from "react-router-dom";
import Footer from "../homepage/footer";

const Seminar = () => {
    return ( 
        <>
        <Nav/>
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
            <h1 className="text-3xl border-b-4 border-blue-700 font-semibold">Kegiatan</h1>
            <h4 className="text-lg font-medium text-gray-700">Seminar</h4>
            </div>
            <div className="my-5 flex flex-row items-center gap-5">
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan1} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">21 SEP, 2022</h5>
                    <Link to={'/Snews1'} className='text-blue-600' >Workshop Penyelarasan Kurikulum Bahan Ajar SMK Wikrama</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan2} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">11 JUL, 2022</h5>
                    <Link to={'/Snews2'} className='text-blue-600' >Program Kelas Online bersama PT LSKK</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan3} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">6 JUN, 2022</h5>
                    <Link to={'/Snews3'} className='text-blue-600' >Webinar Smart System For Industry Universitas Bandar Lampung</Link>
                </div>
            </div>
            <div className="my-5 flex flex-row items-center gap-5">
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan4} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">24 FEB, 2022</h5>
                    <Link to={'/Snews4'} className='text-blue-600' >Workshop di SMK Ulil Albab Cirebon</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan5} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">8 NOV, 2021</h5>
                    <Link to={'/Snews5'} className='text-blue-600' >Kunjungan SMK Dewantara Bekasi</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan6} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">3 SEP, 2021</h5>
                    <Link to={'/Snews6'} className='text-blue-600' >Workshop Jejaring Kemitraan bersama SMKN 13 Bandung</Link>
                </div>
            </div>
            <div className="my-5 flex flex-row items-center gap-5">
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan7} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">10 AUG, 2021</h5>
                    <Link to={'/Snews7'} className='text-blue-600' >KKSI 2021</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan8} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">3 JUL, 2021</h5>
                    <Link to={'/Snews8'} className='text-blue-600' >Sosialisasi Kawal Desa</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan9} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">7 APR, 2021</h5>
                    <Link to={'/Snews9'} className='text-blue-600' >Webinar PPTIK SMK United</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Seminar;