import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './assets/Snews1(1).jpeg'
import img2 from './assets/Snews2(1).jpeg'
import img3 from './assets/Snews3(1).jpeg'


const Snews1 = () => {
    return ( 
        <>
        <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Seminar</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Workshop Penyelarasan Kurikulum Bahan Ajar SMK Wikrama</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · SEPTEMBER 21, 2022</h5>
                </div>
                <p>PPTIK diundang untuk menjadi pembicara pada kegiatan Workshop Penyelarasan Kurikulum Bahan Ajar SMK Wikrama. Kegiatan tersebut dilakukan pada tanggal 21 September 2022.</p>
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
 
export default Snews1;