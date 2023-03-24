import Nav from "../../homepage/nav";
import img1 from './assets/Rnews1(6).jpg'
import Footer from "../../homepage/footer";
import img2 from './assets/Rnews2(6).jpg'


const Rnews6 = () => {
    return ( 
        <>
          <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Riset</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Serah Terima IoT Tracker ke STMIK Bina Insani</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · APRIL 25, 2018</h5>
                </div>
                <p>Diskusi dan serah terima IoT Tracker ke STMIK.BINA INSANI</p>
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
 
export default Rnews6;