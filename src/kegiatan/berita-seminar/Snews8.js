import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './assets/Snews1(8).jpeg'



const Snews8 = () => {
    return ( 
        <>
          <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Seminar</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Sosialisasi Kawal Desa</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · JULY 3, 2021</h5>
                </div>
                <p>Kawal Desa ialah salah satu aplikasi yang dikembangkan PPTIK. PPTIK melakukan sosialisasi aplikasi kawal desa pada tanggal 3 Juli 2021.</p>
                <div className="flex flex-row gap-7 my-2">
                    <img src={img1} alt="" className="w-[300px]" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Snews8;