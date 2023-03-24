import Nav from "../../homepage/nav";
import img1 from './assets/Rnews1(9).jpg'
import Footer from "../../homepage/footer";
import img2 from './assets/Rnews2(9).jpg'
import img3 from './assets/Rnews2(9).jpg'


const Rnews9 = () => {
    return ( 
        <>
        <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Riset</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Diskusi PPTI 2018 bersama Ristekdikti</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · MARCH 14, 2018</h5>
                </div>
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
 
export default Rnews9;