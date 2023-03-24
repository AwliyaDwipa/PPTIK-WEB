import Nav from "./nav";
import Carousel from "./carousel";
import Paged1 from "./paged-1";
import Footer from "./footer";

const homepage = () => {
    return ( 
        <>
        <Carousel/>
        <Nav/>
        <Paged1/>
        <Footer/>
        </>
     );
}
 
export default homepage;