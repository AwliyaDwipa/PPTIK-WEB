import Galeri1 from './assets-galeri/galeri-1.jpeg'
import Galeri2 from './assets-galeri/galeri-2.jpeg'
import Galeri3 from './assets-galeri/galeri-3.jpeg'
import Galeri4 from './assets-galeri/galeri-4.jpeg'
import Galeri5 from './assets-galeri/galeri-5.jpeg'
import Galeri6 from './assets-galeri/galeri-6.jpeg'


const TwGl = () => {
    return ( 
        <>
        <div className="flex justify-center items-center mt-8" >
            <h1 className="text-3xl font-semibold italic border-b-4 border-blue-700">Galeri</h1>
        </div>
          <section class="overflow-hidden text-neutral-700 mb-9 mt-0">
  <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div class="-m-1 flex flex-wrap md:-m-2">
      <div class="flex w-1/2 flex-wrap">
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src={Galeri1} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src={Galeri2} />
        </div>
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src={Galeri3} />
        </div>
      </div>
      <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src={Galeri4} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src={Galeri5} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src={Galeri6} />
        </div>
      </div>
    </div>
  </div>
</section>
        </>
     );
}
 
export default TwGl;