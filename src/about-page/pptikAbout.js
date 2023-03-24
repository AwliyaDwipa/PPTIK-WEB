import Roadmap from '../assets/Roadmap-PPTIK.jpg'

const Pptik = () => {
    return ( 
        <div className="m-6">
            <h1 className="text-3xl border-b-2 border-gray-400 text-center">Tentang PPTIK</h1>
            <div className="my-14">
                <h1 className="text-2xl mb-5 font-semibold">Legalitas Pendirian</h1>
                <h4 className="text-base">SK Rektor ITB No.174/SK/K01/OT/2004</h4>
            </div>
            <div className="flex flex-row justify-center w-full h-[500px]  shadow-2xl">
                <div className="bg-blue-700 flex justify-center items-center text-white w-[50%] text-center text-3xl font-semibold ">
                    <h1>Profile PPTIK</h1>
                </div>
                <div className="w-[50%] p-3 text-justify text-sm border-t border-b-slate-500 border-r overflow-y-scroll">
                    <p>Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK-ITB) memiliki misi diantaranya adalah membangun reputasi riset dan peniliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT. Selain itu, PPTIK juga memiliki misi untuk mendorong perkembangan produk komersil, enterpreneurship dan industri di bidang ICT. Hal ini ditandai juga dengan signifikannya kontribusi sektor ICT bagi revenue ITB.</p>
                    <h4 className="mt-4">Menjawab berbagai tantangan baru dari era ITB-Entrepreneurial University , kegiatan PPTIK pada kurun waktu 2015-2020 akan berfokus pada:</h4>
                    <ol className="list-decimal ml-2 py-[10px]">
                        <li>Pemantapan kapasitas organisasi PPTIK untuk berkolaborasi dengan sebanyak mungkin pihak pada berbagai sektor dengan memanfaatkan portfolio teknologi dan solusi yang telah dikembangkan oleh seluruh stakeholder PPTIK.</li>
                        <li>Pemantapan peran PPTIK sebagai pionir dan rujukan dalam pengembangan dan pemanfaatan teknologi dan solusi digital learning dengan menerapan teknologi dan solusi digital learning kepada stakeholder yang semakin luas dan beragam dengan memastikan munculnya inovasi pembelajaran yang berbasis teknologi dan solusi digital learning dalam bentuk model bisnis maupun startup digital learning.</li>
                        <li>Peningkatan peran PPTIK sebagai pionir dan rujukan dalam pengembangan dan pemanfaatan TIK dan solusi berbasis TIK untuk berbagai sektor aplikasi dengan memastikan munculnya inovasi teknologi terkait yang dapat didemonstrasikan dalam 3 bentuk yaitu publikasi ilmiah, prototype yang berfungsi, pra-Startup.</li>
                    </ol>
                    <p>Teknologi dan solusi teknologi yang dikembangkan di PPTIK akan berupa sistem layanan media digital interaktif modern.</p>
                    <div className='flex flex-col justify-center items-center mt-3 border-2 w-[310px] mx-auto border-gray-500 my-3'>
                        <img src={Roadmap} alt="" className='mx-auto'/>
                        <h1 className='bg-gray-700 p-2 text-gray-400'>Komponen Layanan Media Digital Interaktif Modern</h1>
                    </div>
                    <p>Untuk mendukung roadmap tersebut, di tahun 2015-2017 riset yang dikembangkan oleh PPTIK ITB fokus ke arah pengembangan framework komunitas pintar yang menjadi standar tercapainya konsep kota pintar. Komponen framework smart community yang dikembangkan adalah:</p>
                    <ol className='list-decimal ml-2 py-[10px] '>
                        <li><span className='font-semibold italic'>Smart Mobility</span>melalui penerapan riset Intelligent Transportation System (ITS).</li>
                        <li><span className='font-semibold italic'>Smart Health Care</span> melalui pengembangan dan penerapan sistem Detta Care (Detection of Data Patient Condition with Health Monitoring System).</li>
                        <li><span className='font-semibold italic'>Smart Government</span> melalui pengembangan sebuah riset berbasis proyek bernama Indonesia United (Idun).</li>
                        <li><span className='font-semibold italic'>Smart Education</span> melalui pengembangan riset E-Learning dan game edukasi VidyaNusa, Tugas Akhir Dalam Jaringan (TADJ), Open Online Data Course (OODC) hingga ke pengembangan robot Artificial Intelligence (AI) untuk edukasi dan interaksi sosial manusia dengan nama “Lumen Social Robot”.</li>
                    </ol>
                </div>
            </div>
            <div className='flex flex-row justify-center w-full h-fit  shadow-2xl my-8'>
                <div className="bg-blue-700 flex justify-center items-center text-white w-[50%] text-center text-3xl font-semibold ">
                    <h1>Kemitraan</h1>
                </div>
                 <div className='w-[50%] p-3 text-justify text-sm border-t border-b-slate-500 border-r'>
                    <p>Dalam proses pengembangan riset-riset tersebut, PPTIK telah menjalin kerjasama dengan beberapa pihak diantaranya KPU, KPUD Jawa Barat, Bawaslu Jawa Barat, Zamrud technology, Persatuan Radio Siaran Swasta Nasional Indonesia (PRSSNI) Kotamadya Bandung, Yayasan Penelitian dan Pengembangan Telematika Indonesia (YPPTI), Microsoft Indonesia, NTT Data, Sampoerna Telekomunikasi Indonesia, Dinas Kesehatan PALU Sulawesi Tengah, Badan Meterologi, Klimatologi dan Geofiisika (BMKG), Eon Reality Group, Pusat Penelitian Geoteknologi LIPI, MIT USA, Keio University, Universitas Telkom dan Universiti Teknologi Malaysia (UTM), Japan Smart Community Alliance, Yayasan Keanekaragaman Hayati Indonesia (KEHATI), International Rhino Foundation (IRF), Anargya Technology, PT. Westpoint Security Indonesia, Bapeda Kotamadya Bandung, Dinas Perhubungan Kota Bandar Lampung, Bstartup dan lainnya. Calon-calon startup binaan PPTIK ITB banyak mendapatkan award pada level nasional maupun internasional, seperti INAICTA, APICTA, Kemenristekdikti, dll.</p>
                 </div>
            </div>
            <div className='flex flex-row items-center w-full space-x-3'>
                <div className='w-[50%] flex flex-row shadow-2xl border-t border-r border-gray-200'>
                    <h1 className='w-[50%] bg-blue-700 flex items-center justify-center text-white text-3xl'>Jasa Layanan</h1>
                    <ol className='list-disc ml-6 my-2'>
                        <li>Penelitian dalam penerapan TIK</li>
                        <li>Kerjasama Industri</li>
                        <li>Konsultasi</li>
                        <li>Inkubasi Startup</li>
                    </ol>
                </div>
                <div className='w-[50%] flex flex-row  shadow-2xl border-t border-r border-gray-200'>
                    <h1 className='w-[50%] bg-blue-700 flex items-center justify-center text-white text-2xl'>Pengalaman Pembinaan</h1>
                    <p className='w-[50%] text-justify my-2 mx-6 tracking-tighter'>PPTIK berpengalaman selama beberapa tahun terakhir membina banyak calon startup seperti:Lentera Nusantara, PT.Anargya, dll.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Pptik;