import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './assets/Snews1(7).jpeg'
import img2 from './assets/Snews1(7).jpeg'


const Snews7 = () => {
    return ( 
        <>
         <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Seminar</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">KKSI 2021</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · AUGUST 10, 2021</h5>
                </div>
                <p>KKSI atau KAMP Kreatif SMK Indonesia tahun 2021 ialah program rutinan tahunan. Diharapkan dengan adanya program ini dapat meningkatkan dan memeratakan kualitas pembelajaran di SMK melalui pelatihan yang disampaikan oleh para maestro dan tenaga ahli. 10 Agustus 2021, merupakan pembukaan kegiatan tersebut. Diikuti oleh puluhan SMK dari segala penjuru di Indonesia.</p>
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
 
export default Snews7;