import Anggota1 from '../assets/anggota1.jpg'
import Anggota2 from '../assets/anggota2.jpg'
import Anggota3 from '../assets/anggota3.jpg'
import Anggota4 from '../assets/anggota4.jpg'
import Anggota5 from '../assets/anggota5.jpg'
import Anggota6 from '../assets/anggota6.jpg'
import Anggota7 from '../assets/anggota7.jpg'
import Anggota8 from '../assets/anggota8.jpg'
import Anggota9 from '../assets/anggota9.jpeg'
import Anggota10 from '../assets/anggota10.jpg'
import Anggota11 from '../assets/anggota11.jpg'
import Anggota12 from '../assets/anggota12.jpg'
import Anggota13 from '../assets/anggota13.jpg'
import Anggota14 from '../assets/anggota14.jpg'
import Anggota15 from '../assets/anggota15.jpg'
import Anggota16 from '../assets/Anggota16.jpg'
import Anggota17 from '../assets/anggota17.jpg'
import Anggota18 from '../assets/anggota18.jpg'
import Anggota19 from '../assets/anggota19.jpg'
import Anggota20 from '../assets/anggota20.jpg'
import Anggota21 from '../assets/Anggota21.jpg'
import Anggota22 from '../assets/anggota22.jpg'
import Anggota23 from '../assets/anggota23.jpg'
import Anggota24 from '../assets/anggota24.jpeg'



const Anggota = () => {
    return ( 
        <div className='flex flex-col justify-center items-center m-8 '>
            <h1 className='text-3xl bg-blue-700 text-white py-2 px-5 rounded'>Peneliti & staf</h1>
            <div className='flex flex-col justify-center items-center mt-4 relative '>
                <img src={Anggota1} alt="" className='rounded w-[300px] h-[300px]'  />
                  <div className='flex  flex-col justify-center items-center bg-gray-400 px-3 py-2 rounded absolute bottom-0'>
                    <h1 className='text-gray-700 italic'>Kepala PPTIK : <br /> Dr. techn.Ary Setijadi Prihatmanto, ST., MT.</h1>
                    <a href="http://orcid.org/0000-0002-9471-0227 " className='text-blue-700 italic  border-b border-blue-600 leading-none'  target='_blank' >http://orcid.org/0000-0002-9471-0227</a>
                </div>
            </div>
            <div className='flex flex-row justify-around item-center w-full my-5'>
                <div className=' flex flex-col items-center relative'>
                    <img src={Anggota2} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400  py-2 px-3 rounded w-full absolute bottom-0' >
                       <h1>Prof.Armein Z.R Langi M.Sc.,Phd</h1>
                       <h3>Peneliti Utama</h3>
                    </div>
                </div>
                <div className=' flex flex-col items-center relative'>
                    <img src={Anggota3} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400  py-2 px-3 rounded w-full absolute bottom-0' >
                       <h1>Ir.Mervin T Hutabarat M.Sc.,Phd</h1>
                       <h3>Peneliti Utama</h3>
                    </div>
                </div>
                <div className=' flex flex-col items-center relative'>
                    <img src={Anggota4} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400  py-2 px-3 ro unded w-full  absolute bottom-0'>
                       <h1>Prof.Liliasari</h1>
                       <h3>Universitas Pendidikan Indonesia</h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-around item-center w-full my-5'>
                <div className=' flex flex-col items-center relative'>
                    <img src={Anggota5} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400 absolute bottom-0 py-2 px-3 rounded w-full'>
                       <h1>Prof. Andriyan Bayu Suksmono</h1>
                       <h3>Peneliti Utama</h3>
                    </div>
                </div>
                <div className=' flex flex-col items-center relative'>
                    <img src={Anggota6} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400 absolute bottom-0 py-2 px-3 rounded w-full'>
                       <h1>Dr.Yoanes Bandung, M.T</h1>
                       <h3>Peneliti Utama</h3>
                    </div>
                </div>
                <div className=' flex flex-col items-center relative'>
                    <img src={Anggota7} alt="" className='rounded  w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400 absolute bottom-0 py-2 px-3 rounded w-full'>
                       <h1>Yuliawati Soemarno</h1>
                       <h3>Staf PPTIK</h3>
                    </div>
                 </div>
            </div>
            <div className='flex flex-row justify-around item-center w-full my-5'>
                 <div className=' flex flex-col items-center relative'>
                    <img src={Anggota8} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400 absolute bottom-0 py-2 px-3 rounded w-full'>
                       <h1>Tessa Hikmah Gahari</h1>
                       <h3>Staf PPTIK</h3>
                    </div>
                 </div>
                 <div className=' flex flex-col items-center relative'>
                    <img src={Anggota9} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400 absolute bottom-0 py-2 px-3 rounded w-full'>
                       <h1>Agus Sukoco</h1>
                       {/* <h3>Staf PPTIK</h3> */}
                    </div>
                 </div>
                 <div className=' flex flex-col items-center relative'>
                    <img src={Anggota21} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400 absolute bottom-0 py-2 px-3 rounded w-full'>
                       <h1>Yani Widyani M.T</h1>
                       <h3>Universitas pendidiikan indonesia</h3>
                    </div>
                 </div>
            </div>
            <div className='flex flex-row justify-around item-center w-full my-5'>
                <div className=' flex flex-col items-center relative'>
                    <img src={Anggota22} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400 absolute bottom-0  py-2 px-3 rounded w-full'>
                       <h1>Adnan Darwanto</h1>
                    </div>
                 </div>
                 <div className=' flex flex-col items-center relative'>
                    <img src={Anggota12} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400  absolute bottom-0 py-2 px-3 rounded w-full'>
                       <h1>Aila Gema Safitri, S.T ., M.T.</h1>
                       <h3>Peneliti</h3>
                       <a href="http://orcid.org/0000-0001-6617-9486" className='text-blue-700 italic  border-b border-blue-600 leading-none' target='_blank'>http://orcid.org/0000-0001-6617-9486</a>
                    </div>
                 </div>
                 <div className=' flex flex-col items-center relative'>
                    <img src={Anggota23} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400  absolute bottom-0 py-2 px-3 rounded w-full'>
                       <h1>Maulana Yusuf</h1>
                       {/* <h3>Peneliti</h3> */}
                    </div>
                 </div>
            </div>
            <div className='flex flex-row justify-around item-center w-full my-5'>
                 <div className=' flex flex-col items-center relative '>
                    <img src={Anggota24} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400 absolute bottom-0 py-2 px-3 rounded w-full'>
                       <h1>Vidya Ikawanti</h1>
                       {/* <h3>Peneliti</h3> */}
                    </div>
                 </div>
                 <div className=' flex flex-col items-center relative'>
                    <img src={Anggota19} alt="" className='rounded w-[300px] h-[300px]'/>
                    <div className='flex  flex-col justify-center items-center bg-gray-400 absolute bottom-0 py-2 px-3 rounded w-full'>
                       <h1>Muhammad Fahmi Nurfadilah, S.ST</h1>
                       {/* <h3>Peneliti</h3> */}
                       {/* <a href="http://orcid.org/0000-0002-0367-492X" className='text-blue-700 italic  border-b border-blue-600 leading-none' target='_blank' >http://orcid.org/0000-0002-0367-492X</a> */}
                    </div>
                 </div>
            </div>
        </div>
     );
}
 
export default Anggota;