import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './Assets/Krnews1(9).jpeg'


const Krnews9 = () => {
    return ( 
        <>
          <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Karya</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl font-semibold">Penyerahan Alat Peraga Smart Hidroponik</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · MAY 24, 2022</h5>
                </div>
                <p>Alat Peraga Smart Hidroponik adalah salah satu produk yang dikembangkan oleh PPTIK. Pada tanggal 24 Mei 2022 PPTIK melakukan penyerahan Alat Peraga tersebut ke SMK Riyadul Hikmah.</p>
                <div className="flex flex-row gap-7">
                    <img src={img1} alt="" className="w-[300px]" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Krnews9;