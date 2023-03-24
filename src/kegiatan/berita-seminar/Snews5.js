import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './assets/Snews1(5).jpeg'
import img2 from './assets/Snews1(5).jpeg'

const Snews5 = () => {
    return ( 
        <>
        <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Seminar</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Kunjungan SMK Dewantara Bekasi</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · NOVEMBER 8, 2021</h5>
                </div>
                <p>SMK Dewantara ialah salah satu SMK yang terletak di Bekasi. SMK Dewantara menjadi salah satu SMK yang dikunjungi oleh PPTIK dan tim. Kunjungan dilakukan pada tanggal 8 November 2021.</p>
                <div className="flex flex-row gap-7 my-2">
                    <img src={img1} alt="" className="w-[300px]" />
                    <img src={img2} alt="" className="w-[300px]" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Snews5;