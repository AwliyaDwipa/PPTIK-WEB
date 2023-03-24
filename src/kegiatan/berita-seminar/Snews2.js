import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './assets/Snews1(2).png'
import img2 from './assets/Snews2(2).png'



const Snews2 = () => {
    return ( 
        <>
         <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Seminar</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Program Kelas Online bersama PT LSKK</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · JULY 11, 2022</h5>
                </div>
                <p>PPTIK membuat sebuah program yang disebut dengan Kelas Online. Program tersebut dapat diikuti oleh siswa, mahasiswa bahkan umum. Materi untuk kelas online sendiri terdiri dari Pemograman Web, Pemograman Mobile, IoT, Artifical Inteligence, dan 3D Modelling. Setiap tema memiliki waktu dan hari yang berbeda. Sampai dengan tanggal 11 Juli 2022, sudah dilakukan 3 kali kelas online melalui virtual dengan menggunakan aplikasi zoom.</p>
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
 
export default Snews2;