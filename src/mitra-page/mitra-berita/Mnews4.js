import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './assets/foto4.jpeg'

const Mnews4 = () => {
    return ( 
        <>
        <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Mitra</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Diskusi terkait Matching Fund untuk Pemodelan Tsunami</h1>
                    <h5 className="text-sm text-gray-500">DIPOSTING OLEH : ADMINPPTIK · MARCH 3, 2023</h5>
                </div>
                <div className="flex flex-row gap-7 my-2">
                    <img src={img1} alt="" className="w-[300px]" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Mnews4;
