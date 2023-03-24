import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './Assets/Krnews1(3).jpeg'

const Krnews3 = () => {
    return ( 
        <>
         <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Karya</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl font-semibold">Koordinasi SIM dengan SMKN 7 Kota Tangerang</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · DECEMBER 21, 2022</h5>
                </div>
                <p>PPTIK bersama SMKN 7 Kota Tangerang melakukan koordinasi terkait Website SIM (Sistem Informasi Sekolah). Koordinasi tersebut dilakukan pada tanggal 21 Desember 2022</p>
                <div className="flex flex-row gap-7">
                    <img src={img1} alt="" className="w-[300px]" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Krnews3;