import { Link } from "react-router-dom";
import Logo from '../assets/logo-itb.png';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';

const nav = () => {
    return ( 
        <>
        <div className="flex flex-row items-center font-semibold py-3 px-3 bg-blue-500 text-white gap-2 w-screen z-20 sticky top-0 right-0 left-0 ">
            <div><img src={Logo} alt="" className="ml-3"/></div>
            <div className="space-x-3 border-b-2 border-white translate-x-[280px]">
            <Link to={'/'} className="relative" >Home</Link>
            <Link to={''}  className="dropdown relative px-3 py-4" >Kegiatan<MdOutlineKeyboardArrowDown className="absolute top-[17px] right-[-3px] text-base"/>  
                <div className=" dropdown-c absolute top-10 right-[-15px] px-1 py-2 w-[140px] bg-gray-500 ">
                    <Link to={'/Seminar'}  className="leading-none block hover:border-b hover:border-white w-fit py-1 text-xs" >Seminar & workshop</Link>
                    <Link to={'/Riset'} className="leading-none block hover:border-b hover:border-white w-fit py-1 text-xs" >Riset</Link>
                </div>
            </Link>
            <Link to={'/Karya'}  className="dropdown relative px-3 py-4" >karya
                {/* <div className=" dropdown-c absolute top-10 right-[-15px] px-1 py-2 w-[140px] bg-gray-500">
                    <a href="#" id="M-dropdown" className="Relative leading-none block hover:border-b hover:border-white w-fit py-4 px-5 text-xs">
                        Smart system &gt;
                        <div id="M-dropdown-c" className="absolute top-0 right-[-245px] bg-gray-500 hidden h-fit px-5 py-4 gap-3">
                            <a href="#" className="hover:border-b hover:border-white px-3 py-4">Smart learning</a>
                            <a href="#" id="M-dropdown1" className="hover:border-b hover:border-white px-3 py-4 relative" >
                                Smart healt system &gt;
                                <div id="M-dropdown-c1" className="absolute top-0 right-[-176px] bg-gray-500 hidden">
                                    <ul>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Tugas akhir dalam jaringan</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Vidyanusa</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">PRD online course</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Open data course</a></li>
                                    </ul>
                                </div>
                            </a>
                            <a href="#" id="M-dropdown1" className="relative hover:border-b hover:border-white px-3 py-4">
                                Transportasi &gt;
                                <div id="M-dropdown-c1" className="absolute top-0 right-[-176px] bg-gray-500 hidden">
                                    <ul>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">BSTS</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">BLITS</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">TLITS</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">BPG</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">System Moving Block Kereta Api</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Sistem auotdrive</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Mobil listik</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Simulator Lokomotif</a></li>
                                    </ul>
                                </div>
                            </a>
                            <a href="#" className="hover:border-b hover:border-white px-3 py-4">Kesehatan</a>
                            <a href="#" id="M-dropdown1" className="relative hover:border-b hover:border-white px-3 py-4">
                                Indonesia United &gt;
                                <div >
                                    <ul id="M-dropdown-c1" className="absolute top-0 right-[-176px] bg-gray-500 hidden">
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Idun nelayan</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">DPR kita</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Pemilu</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Smart Vertical Agrieculture</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Radio Bandung </a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Detektor Gempa</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Tari tradisional</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Flora & Fauna</a></li>
                                    </ul>
                                </div>
                            </a>
                            <a href="#" className="hover:border-b hover:border-white px-3 py-4">Brain computer interface</a>
                            <a href="#" id="M-dropdown1" className="relative hover:border-b hover:border-white px-3 py-4">
                                Advance Robotics & Automation
                                <div id="M-dropdown-c1" className="absolute top-0 right-[-150px] bg-gray-500 hidden">
                                    <ul>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">ROV</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Seaglider</a></li>
                                        <li className="py-4 px-3"><a href="#" className="hover:border-b border-white">Lumen Robot Friend</a></li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </a>
                    <a href="#" className="leading-none block hover:border-b hover:border-white w-fit py-2 px-5 text-xs">Riset</a>
                </div> */}
                </Link>
            <Link to={'/mitra'}  className="relative" >Mitra</Link>
            <Link to={'/galeri'}  className="relative" >Galeri</Link>
            {/* <Link to={''}  className="dropdown relative px-3 py-4">
                Abstein<MdOutlineKeyboardArrowDown className="absolute top-[17px] right-[-3px] text-base"/>
                <div className=" dropdown-c absolute top-10 right-[-15px] px-1 py-2 w-[140px] bg-gray-500">
                    <a href="#" className="leading-none block hover:border-b hover:border-white w-fit py-1 text-xs">Modul belajar</a>
                </div>
            </Link> */}
            <Link to={'/about'}  className="relative" >Tentang PPTIK</Link>
            <Link to={'/peneliti & staf'}  className="relative" >Peneliti & staf</Link>
            {/* <Link to={'/privacy'}  className="dropdown relative px-3 py-4" >
                Tentang<MdOutlineKeyboardArrowDown className="absolute top-[17px] right-[-3px] text-base"/>
                <div className=" dropdown-c absolute top-10 right-[-15px] px-1 py-2 w-[140px] bg-gray-500">
                    <a href="#" className="leading-none block hover:border-b hover:border-white w-fit py-1 text-xs"></a>
                    <a href="#" className="leading-none block hover:border-b hover:border-white w-fit py-1 text-xs">Kontak</a>
                </div>
            </Link> */}
            <Link to={'/kontak'}>Kontak</Link>
            </div>
        </div>
        </>
     );
}
 
export default nav;