import Nav from "../../homepage/nav";
import img1 from './assets/Rnews1(2).jpeg'
import Footer from "../../homepage/footer";
import img2 from './assets/Kegiatan2.jpeg'

const Rnews2 = () => {
    return ( 
        <>
        <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Riset</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl font-semibold">Proses Pembuatan Mobil Listrik</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · FEBRUARY 13, 2023</h5>
                </div>
                <div className="flex flex-row gap-7">
                    <img src={img1} alt="" className="w-[300px]" />
                    <img src={img2} alt="" className="max-w-full" />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Rnews2;