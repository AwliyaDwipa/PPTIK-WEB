
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage/homepage';
import Gallery from './galeri/galeri';
import Mitra from './mitra-page/mitra';
import About from './about-page/about-page';
import Staf from './peneliti & staf/staf';
import Seminar from './kegiatan/seminar';
import Riset from './kegiatan/riset';
import Rnews1 from './kegiatan/berita-riset/berita-riset1';
import Rnews2 from './kegiatan/berita-riset/berita-riset2';
import Rnews3 from './kegiatan/berita-riset/berita-riset3';
import Rnews4 from './kegiatan/berita-riset/berita-riset4';
import Rnews5 from './kegiatan/berita-riset/berita-riset5';
import Rnews6 from './kegiatan/berita-riset/berita-riset6';
import Rnews7 from './kegiatan/berita-riset/berita-riset7';
import Rnews8 from './kegiatan/berita-riset/berita-riset8';
import Rnews9 from './kegiatan/berita-riset/berita-riset9';
import Snews1 from './kegiatan/berita-seminar/Snews1';
import Snews2 from './kegiatan/berita-seminar/Snews2';
import Snews3 from './kegiatan/berita-seminar/Snews3';
import Snews4 from './kegiatan/berita-seminar/Snews4';
import Snews5 from './kegiatan/berita-seminar/Snews5';
import Snews6 from './kegiatan/berita-seminar/Snews6';
import Snews7 from './kegiatan/berita-seminar/Snews7';
import Snews8 from './kegiatan/berita-seminar/Snews8';
import Snews9 from './kegiatan/berita-seminar/Snews9';
import Karya from './Karya/karya';
import Krnews3 from './Karya/Karya-berita.js/karyaNews3';
import Krnews4 from './Karya/Karya-berita.js/karyaNews4';
import Krnews5 from './Karya/Karya-berita.js/karyaNews5';
import Krnews7 from './Karya/Karya-berita.js/karyaNews7';
import Krnews8 from './Karya/Karya-berita.js/karyaNews8';
import Krnews9 from './Karya/Karya-berita.js/karyaNews9';
import Mnews1 from './mitra-page/mitra-berita/Mnews1';
import Mnews2 from './mitra-page/mitra-berita/Mnews2';
import Mnews3 from './mitra-page/mitra-berita/Mnews3';
import Mnews4 from './mitra-page/mitra-berita/Mnews4';
import Mnews5 from './mitra-page/mitra-berita/Mnews5';
import Mnews6 from './mitra-page/mitra-berita/Mnews6';
import Mnews7 from './mitra-page/mitra-berita/Mnews7';
import Mnews8 from './mitra-page/mitra-berita/Mnews8';
import Mnews9 from './mitra-page/mitra-berita/Mnews9';
import Mnews10 from './mitra-page/mitra-berita/Mnews10';
import Kontak from './kontak/kontak';
import Admin from './kontak/admin';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/galeri' element={<Gallery/>}/>
        <Route path='/mitra' element={<Mitra/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/peneliti & staf' element={<Staf/>}/>
        <Route path='/Seminar' element={<Seminar/>}/>
        <Route path='/Riset' element={<Riset/>}/>
        <Route path='/Rnews1' element={<Rnews1/>}/>
        <Route path='/Rnews2' element={<Rnews2/>}/>
        <Route path='/Rnews3' element={<Rnews3/>}/>
        <Route path='/Rnews4' element={<Rnews4/>}/>
        <Route path='/Rnews5' element={<Rnews5/>}/>
        <Route path='/Rnews6' element={<Rnews6/>}/>
        <Route path='/Rnews7' element={<Rnews7/>}/>
        <Route path='/Rnews8' element={<Rnews8/>}/>
        <Route path='/Rnews9' element={<Rnews9/>}/>
        <Route path='/Snews1' element={<Snews1/>}/>
        <Route path='/Snews2' element={<Snews2/>}/>
        <Route path='/Snews3' element={<Snews3/>}/>
        <Route path='/Snews4' element={<Snews4/>}/>
        <Route path='/Snews5' element={<Snews5/>}/>
        <Route path='/Snews6' element={<Snews6/>}/>
        <Route path='/Snews7' element={<Snews7/>}/>
        <Route path='/Snews8' element={<Snews8/>}/>
        <Route path='/Snews9' element={<Snews9/>}/>
        <Route path='/Karya' element={<Karya/>}/>
        <Route path='Krnews3' element={<Krnews3/>}/>
        <Route path='Krnews4' element={<Krnews4/>}/>
        <Route path='Krnews5' element={<Krnews5/>}/>
        <Route path='Krnews7' element={<Krnews7/>}/>
        <Route path='Krnews8' element={<Krnews8/>}/>
        <Route path='Krnews9' element={<Krnews9/>}/>
        <Route path='Mnews1' element={<Mnews1/>}/>
        <Route path='Mnews2' element={<Mnews2/>}/>
        <Route path='Mnews3' element={<Mnews3/>}/>
        <Route path='Mnews4' element={<Mnews4/>}/>
        <Route path='Mnews5' element={<Mnews5/>}/>
        <Route path='Mnews6' element={<Mnews6/>}/>
        <Route path='Mnews7' element={<Mnews7/>}/>
        <Route path='Mnews8' element={<Mnews8/>}/>
        <Route path='Mnews9' element={<Mnews9/>}/>
        <Route path='Mnews10' element={<Mnews10/>}/>
        <Route path='/Kontak' element={<Kontak/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
  );
}

export default App;
