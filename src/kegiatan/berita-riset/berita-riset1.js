import Nav from "../../homepage/nav";
import img1 from './assets/Kegiatan1.png'
import Footer from "../../homepage/footer";

const Rnews1 = () => {
    return ( 
        <>
        <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Kegiatan/Riset</h1>
            <div className="flex flex-col my-4">
                <img src={img1} alt="" className="w-full h-[400px] object-contain" />
                <div className="my-4">
                    <h1 className="text-3xl text-blue-600">Smart Health System</h1>
                    <h4 className="text-xs text-gray-400">DIPOSTING OLEH : ADMINPPTIK · MARCH 9, 2023</h4>
                    <p className="text-justify">Sistem Layanan Kesehatan (Health Care System) adalah pemeliharaan(Strait, 1988) atau peningkatan status kesehatan melalui usaha-usaha pencegahan(Leite, Solis and Alchieri, 2019), diagnosis, terapi, pemulihan, atau penyembuhan penyakit, cedera, serta gangguan fisik dan mental lainnya(Kermany et al., 2018). Tujuan ini oleh WHO dirumuskan dalam satu paduan tiga kata efficiency,equity, quality (EEQ). Sistem kesehatan terdiri dari dua bagian utama yang merupakan subsitemnya yaitu Sistem Pelayanan Kesehatan (Health Service Delivery System) dan Sistem Pendanaan Kesehatan (Health Financing System).
                    Menurut PerMenKes RI No 24 Th 2022 tentang Rekam Medis, setiap fasilitas Kesehatan termasuk praktik mandiri dokter, telemedisin dan apotek, wajib menyelenggarakan rekam medis elektronik.</p>
                    <div className="w-fit mx-auto my-5 border border-blue-600 rounded">
                        <h1 className="text-xl text-white bg-blue-600 p-4 ">Kegiatan penyelenggaraan Rekam Medis Elektronik paling sedikit terdiri atas:</h1>
                    <ol className="list-disc mx-9">
                        <li>registrasi Pasien;</li>
                        <li>pendistribusian data Rekam Medis Elektronik;</li>
                        <li>pengisian informasi klinis;</li>
                        <li>pengolahan informasi Rekam Medis Elektronik;</li>
                        <li>penginputan data untuk klaim pembiayaan;</li>
                        <li>penyimpanan Rekam Medis Elektronik;</li>
                        <li>penjaminan mutu Rekam Medis Elektronik; dan</li>
                        <li>transfer isi Rekam Medis Elektronik</li>
                    </ol>
                    </div>
                    <p className="text-justify my-3">Dalam hal Rekam Medis Elektronik diselenggarakan pada tempat praktik mandiri dokter, kegiatan penyelenggaraan Rekam Medis Elektronik menjadi tanggung jawab dokter tersebut
                    Selain untuk Pasien rawat inap dan rawat darurat, Rekam Medis dapat diberikan kepada Pasien rawat jalan. Pengolahan data kesehatan dilaksanakan untuk pembuatan
                    kebijakan bidang kesehatan, dengan memperhatikan prinsip kedokteran berbasis bukti (evidence based)(Jokerst et al., 2018). Umumnya data rekam medis ini digunakan untuk tujuan pengobatan berbasis bukti, namun jarang sekali digunakan sebagai penelitian. Padahal data-data tersebut dapat digunakan sebagai penelitian dari penyakit yang berkembang di masyarakat.
                    Berkembangnya teknologi Kesehatan digital(Hu et al., 2021) secara individu sejalan dengan tujuan dari terselenggaranya peningkatan status Kesehatan yang diusahakan dari masing-masing individu. Setiap orang yang sakit, harus mengetahui bagaimana membuat kondisinya menjadi lebih baik. Setiap orang sehat yang ingin terhindar dari penyakit, harus mengetahui bagaimana aktivitas harian yang harus dilakukannya.</p>
                    <p className="text-justify">Saat ini paradigma bahwa orang sakit dan yang sehat, tidak perlu dihadirkan dalam sebuah rekam medis yang dibuat sepusat. Padahal, status sakit dan sehat bisa terjadi kapan saja. Apalagi jika terjadi sebuah kejadian kronis yang harus segera ditangani oleh petugas medis. Apabila petugas medis tersebut telah memiliki histori Kesehatan pasien tersebut, maka observasi di IGD tidak akan terlalu lama sehingga pihak dokter akan cepat memutuskan Tindakan yang tepat sesuai dengan kondisi dan histori Kesehatan pasien.</p>
                    <p className="text-justify my-3">Teknologi Kesehatan digital yang berbasis individu ini pun sangat berguna bagi pemantauan pasien dengan status paliatif. Dimana seseorang harus mengidap penyakit dalam dirinya dan harus selalu mengkonsumsi obat untuk mempertahankan kehidupannya. Hingga saat ini, rekam medik tidak terintegrasi dengan teknologi Kesehatan digital berbasis individu. Oleh karena itu, dalam penelitian ini, akan dibuat system cerdas yang mengintegrasikan system layanan Kesehatan khususnya rekam medis dengan teknologi Kesehatan digital berbasis individu yang Bernama VidyaMedic.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Rnews1;