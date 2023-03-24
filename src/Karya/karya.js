import Nav from "../homepage/nav";
import Footer from "../homepage/footer";
import { Link } from "react-router-dom";
import Kegiatan1 from './assets/Karya1.png'
import Kegiatan2 from './assets/Karya2.jpeg'
import Kegiatan3 from './assets/Karya3.jpeg'
import Kegiatan4 from './assets/Karya4.jpeg'
import Kegiatan5 from './assets/Karya5.jpeg'
import Kegiatan6 from './assets/Karya6.jpeg'
import Kegiatan7 from './assets/Karya7.jpeg'
import Kegiatan8 from './assets/Karya8.jpeg'
import Kegiatan9 from './assets/karya9.jpeg'

const Karya = () => {
    return ( 
        <>
         <Nav/>
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
            <h1 className="text-3xl border-b-4 border-blue-700 font-semibold">Karya</h1>
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
                    <h5 className="text-xs text-gray-500 font-medium">21 DEC, 2022</h5>
                    <Link to={'/Krnews3'} className='text-blue-600' >Koordinasi SIM dengan SMKN 7 Kota Tangerang</Link>
                </div>
            </div>
            <div className="my-5 flex flex-row items-center gap-5">
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan4} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">8 NOV, 2022</h5>
                    <Link to={'/Krnews4'} className='text-blue-600' >Pemasangan Alat Survey</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan5} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">13 OCT, 2022</h5>
                    <Link to={'/Krnews5'} className='text-blue-600' >Diskusi Project Legit Bandung</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan6} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">15 SEP, 2022</h5>
                    <Link to={'/Rnews3'} className='text-blue-600' >Diskusi Lanjutan dengan Tim Teknik Sipil Universitas Bandar Lampung</Link>
                </div>
            </div>
            <div className="my-5 flex flex-row items-center gap-5">
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan7} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">8 MAR, 2022</h5>
                    <Link to={'/Krnews7'} className='text-blue-600' >Diskusi pengembangan aplikasi BELADU</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan8} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">7 JUN, 2022</h5>
                    <Link to={'/Krnews8'} className='text-blue-600' >Diskusi lanjutan SEMUT JABAR</Link>
                </div>
                <div className="flex flex-col w-[300px]">
                    <img src={Kegiatan9} alt="" />
                    <h5 className="text-xs text-gray-500 font-medium">24 MAY, 2022</h5>
                    <Link to={'/Krnews9'} className='text-blue-600' >Penyerahan Alat Peraga Smart Hidroponik</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Karya;