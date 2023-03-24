import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './assets/Snews1(3).png'
import img2 from './assets/Snews2(3).png'
import img3 from './assets/Snews3(3).png'


const Snews3 = () => {
    return ( 
        <>
         <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Seminar</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Webinar Smart System For Industry</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · JUNE 6, 2022</h5>
                </div>
                <p>Webinar Smart System For Industry ialah salah satu acara webinar yang diselenggarakan PPTIK bekerjasama dengan PT. LSKK dan Binari Inkubator. Webinar ini dilaksankan pada tanggal 6 Juni 2022.</p>
                <div className="flex flex-row gap-7 my-2">
                    <img src={img1} alt="" className="w-[300px]" />
                    <img src={img2} alt="" className="w-[300px]" />
                    <img src={img3} alt="" className="w-[300px]" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Snews3;