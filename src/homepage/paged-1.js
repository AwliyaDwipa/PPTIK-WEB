import Photo1 from '../assets/photo1.jpeg'
import Foto2 from '../assets/foto2.jpeg'
import Foto3 from '../assets/foto3.jpeg'
import Foto4 from '../assets/foto4.jpeg'
import Foto5 from '../assets/foto5.jpeg'
import Foto6 from '../assets/foto6.jpeg'
import Foto7 from '../assets/foto7.jpeg'
import Foto8 from '../assets/foto8.jpeg'
import Foto9 from '../assets/foto9.jpeg'
import Foto10 from '../assets/foto10.jpeg'
import {Link} from 'react-router-dom'




const paged1 = () => {
    return ( 
        <div className="flex flex-col m-auto w-[80%] my-8 gap-4">
            <div className='w-full flex flex-row justify-evenly'>
            <div className='w-[300px]'>
                <img src={Photo1} alt="" className='max-w-full' />
                <h5 className='text-[14px] text-gray-500'>5 MAR 2023</h5>
                <Link to={'/Mnews1'}  className='text-blue-600'>Diskusi Kolaborasi Daerah dan PPTIK</Link>
            </div>
            <div className='w-[300px]'>
                <img src={Foto2} alt="" className='max-w-full' />
                <h5 className='text-[14px] text-gray-500'>4 MAR, 2023</h5>
                <Link to={'/Mnews2'}  className='text-blue-600'>Pertemuan dengan SMKN 1 Banjit Riset Mengenai Produktivitas kopi</Link>
            </div>
            <div className='w-[300px]'>
                <img src={Foto3} alt="" className='max-w-full' />
                <h5 className='text-[14px] text-gray-500'>3 MAR, 2023</h5>
                <Link to={'/Mnews3'}  className='text-blue-600'>Diskusi dengan Universitas Bandar Lampung Administrasi bisnis</Link>
            </div>
            </div>
            <div className='w-full flex flex-row justify-evenly'>
            <div className='w-[300px]'>
                <img src={Foto4} alt="" className='max-w-full' />
                <h5 className='text-[14px] text-gray-500'>3 MAR 2023</h5>
                <Link to={'/Mnews4'}  className='text-blue-600'>Diskusi terkait Matching Fund untuk Pemodelan Tsunami</Link>
            </div>
            <div className='w-[300px]'>
                <img src={Foto5} alt="" className='max-w-full' />
                <h5 className='text-[14px] text-gray-500'>2 MAR, 2023</h5>
                <Link to={'/Mnews5'}  className='text-blue-600'>Pertemuan PPTIK ITB dan UBL</Link>
            </div>
            <div className='w-[300px]'>
                <img src={Foto6} alt="" className='max-w-full' />
                <h5 className='text-[14px] text-gray-500'>2 MAR 2023</h5>
                <Link to={'/Mnews6'} className='text-blue-600'>Diskusi Lampung Digital Heritage antara UBL, PPTIK ITB dan pemda lampung timur</Link>
            </div>
            </div>
            <div className='w-full flex flex-row justify-evenly flex-wrap'>
            <div className='w-[300px]'>
                <img src={Foto7} alt="" className='max-w-full' />
                <h5 className='text-[14px] text-gray-500'>24 FEB, 2023</h5>
                <Link to={'/Mnews7'} className='text-blue-600'>Diskusi dengan Puskesmas Cilawu Garut</Link>
            </div>
            <div className='w-[300px]'>
                <img src={Foto8} alt="" className='max-w-full' />
                <h5 className='text-[14px] text-gray-500'>24 FEB, 2023</h5>
                <Link to={'/Mnews8'}  className='text-blue-600'>Kunjugan dari SMKN 1 Dawuan</Link>
            </div>
            <div className='w-[300px]'>
                <img src={Foto9} alt="" className='max-w-full' />
                <h5 className='text-[14px] text-gray-500'>23 FEB, 2023</h5>
                <Link to={'/Mnews9'}  className='text-blue-600'>Diskusi PKR dengan Prof. Estiko Rijanto</Link>
            </div>
            </div>
            <div className='w-full flex flex-row'>
            <div className='w-[300px] ml-11'>
                <img src={Foto10} alt="" />
                <h5 className='text-[14px] text-gray-500'>22 FEB, 2023</h5>
                <Link to={'/Mnews10'}  className='text-blue-600'>Diskusi P2MI Abdimas</Link>
            </div>
            </div>
        </div>
     );
}
 
export default paged1;