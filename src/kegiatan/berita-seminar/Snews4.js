import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './assets/Snews1(4).jpeg'


const Snews4 = () => {
    return ( 
        <>
        <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Seminar</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Workshop di SMK Ulil Albab Cirebon</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · FEBRUARY 24, 2022</h5>
                </div>
                <p>PPTIK bersama tim melakukan workshop. Workshop dilakukan di SMK Ulil Albab Cirebon. Workshop dilakukan pada tanggal 24 Februari 2022.</p>
                <div className="flex flex-row gap-7 my-2">
                    <img src={img1} alt="" className="w-[300px]" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Snews4;
