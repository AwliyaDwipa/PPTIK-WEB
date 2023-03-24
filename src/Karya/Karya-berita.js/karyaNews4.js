import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './Assets/Krnews1(4).jpeg'
import img2 from './Assets/Krnews2(4).jpeg'

const Krnews4 = () => {
    return ( 
        <>
          <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Karya</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl font-semibold">Pemasangan Alat Survey</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · NOVEMBER 8, 2022</h5>
                </div>
                <p>Pemasangan Alat Survey dilakukan di Lampung pada tanggal 8 November 2022.</p>
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
 
export default Krnews4;