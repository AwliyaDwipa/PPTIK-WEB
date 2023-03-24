import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const footer = () => {
    return ( 
        <>
        <div className="  mb-5 flex flex-row justify-around gap-3 border-t border-blue-600">
            <div className="flex flex-col ">
            <div className='flex flex-col my-2'>
                <h1 className='my-2 text-3xl font-semibold border-b-2 border-blue-700 italic w-fit'>Our location</h1>
                <p className='text-gray-500 font-medium'>4th Floor, Gd. Litbang Integrasi dan Aplikasi (PAU) <br /> Jl. Tamansari No. 126, Bandung 40132, Indonesia <br /> Phone: +62-22-4254034/0811 2298 086 <br /> Fax: +62-22-2508763</p>
            </div>
                <h1 className=' text-3xl border-b-2 font-semibold border-blue-700 italic w-fit'>Kontak</h1>
                <p className='text-gray-500 font-medium'>Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK) <br /> Kepala PP : Dr. Ary Setijadi Prihatmanto, ST., MT.</p>
            </div>
            <div className="flex flex-col  ">
            <div className=' flex flex-col mb-3 '>
                <h1 className='text-3xl border-b-2 w-fit border-blue-700 italic font-semibold my-2'>Email</h1>
                <p className='text-gray-500 font-medium'>yuliawati.pptik@gmail.com</p>
                <p className='text-gray-500 font-medium'>tessa.pptik@gmail.com</p>
            </div>
            <div>
            <h1 className="text-2xl font-semibold border-b-2 border-blue-700 w-fit italic ">Follow us</h1>
            <div className="flex flex-row space-x-3 mt-2">
                <a href="https://web.facebook.com/PPTIKITB?_rdc=1&_rdr" target='_blank'><BsFacebook className="text-blue-700 text-2xl cursor-pointer"/></a>
                <a href="https://instagram.com/pptik_itb?igshid=YmMyMTA2M2Y=" target='_blank'><BsInstagram className="text-2xl cursor-pointer"/></a>
                <a href="https://mobile.twitter.com/pptikitb" target='_blank'><BsTwitter className="text-blue-400 text-2xl cursor-pointer"/></a>
            </div>
            </div>
            </div>
        </div>
            <span className="float-right my-2"><a href="https://www.itb.ac.id/" target='_blank' className="text-blue-500">Institut Teknologi Bandung </a>© 2023. All Rights Reserved.</span>
        </>
     );
}
 
export default footer;