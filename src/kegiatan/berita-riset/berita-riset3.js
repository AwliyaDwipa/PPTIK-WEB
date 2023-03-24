import Nav from "../../homepage/nav";
import img1 from './assets/Rnews3(3).jpeg'
import Footer from "../../homepage/footer";



const Rnews3 = () => {
    return ( 
        <>
         <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Riset</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Diskusi Lanjutan dengan Tim Teknik Sipil Universitas Bandar Lampung</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · SEPTEMBER 15, 2023</h5>
                </div>
                <p>PPTIK melakukan diskusi lanjutan dengan tim Teknik Sipil Universitas Bandar Lampung. Diskusi dilakukan pada tanggal 15 September 2022. Diskusi tersebut membahas mengenai Matching Fund AI Survey dan Monitor Jalan</p>
                <div className="flex flex-row gap-7 my-2">
                    <img src={img1} alt="" className="w-[300px]" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Rnews3;