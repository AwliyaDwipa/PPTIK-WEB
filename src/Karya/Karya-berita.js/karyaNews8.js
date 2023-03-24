import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './Assets/Krnews1(8).jpeg'
import img2 from './Assets/Krnews2(8).jpeg'


const Krnews8 = () => {
    return ( 
         <>
         <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Karya</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl font-semibold">Diskusi lanjutan SEMUT JABAR</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · JUNE 7, 2022</h5>
                </div>
                <p>PPTIK melakukan diskusi terkait Semut Jabar. Diskusi dilakukan pada tanggal 7 Juni 2022 di Dinas Perhubungan Jawa Barat.</p>
                <div className="flex flex-row gap-7">
                    <img src={img1} alt="" className="w-[300px]" />
                    <img src={img2} alt="" className="w-[300px]" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Krnews8;