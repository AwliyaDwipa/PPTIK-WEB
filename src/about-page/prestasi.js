const prestasi = () => {
    return ( 
        <div className="m-6 ">
            <h1 className="text-center text-3xl font-semibold my-6">Prestasi</h1>
            <p>Calon-calon startup binaan PPTIK ITB banyak mendapatkan award pada level nasional maupun internasional, seperti INAICTA, APICTA, Indonesia Innovations and Innovators Expo (I3E) Kemenristekdikti, dan lain-lain.</p>
            <div className="flex flex-row item-center w-full gap-3">
                <div className="w-[50%] my-4 border border-blue-700 rounded">
                    <h1 className="text-center font-semibold text-2xl bg-blue-700 text-white">visi</h1>
                    <p className="text-justify px-4 py-2">Setiap warga negara Indonesia harus dapat memanfaatkan TIK untuk kemajuan perikehidupannya. Setiap warganegara dapat berpartisipasi dalam masyarakat pengetahuan dan ekonomi pengetahuan, baik ikut mendapatkan manfaatnya maupun ikut membangunnya. Di tahun 2016 setiap warga negara Indonesia harus bisa mendapatkan jatah secara cuma-cuma.</p>
                </div>
                <div className="w-[50%] my-4 border border-blue-700 rounded">
                    <h1 className="text-center font-semibold text-2xl bg-blue-700 text-white">Misi</h1>
                    <ol className="px-8  py-2 list-disc">
                        <li>Membangun reputasi riset dan peneliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT.</li>
                        <li>Mendorong perkembangan produk komersial, enterpreneurship, dan industri di bidang ICT. Hal ini ditandai juga dengan signifikannya kontribusi sektor ICT bagi revenue ITB.</li>
                    </ol>
                </div>
            </div>
        </div>
     );
}
 
export default prestasi;