import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './assets/Snews1(6).jpeg'
import img2 from './assets/Snews1(6).jpeg'
import img3 from './assets/Snews1(6).jpeg'

const Snews6 = () => {
    return ( 
        <>
         <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Seminar</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Workshop Jejaring Kemitraan bersama SMKN 13 Bandung</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · SEPTEMBER 3, 2021</h5>
                </div>
                <p>Workshop yang diadakan oleh SMKN 13 Bandung, mengundang PPTIK untuk menjadi narasumbernya. Workshop dilakukan di SMKN 13 Bandung pada tanggal 3 September 2021.</p>
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
 
export default Snews6;