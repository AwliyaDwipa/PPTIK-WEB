import Nav from "../homepage/nav";
import Footer from "../homepage/footer";
import React, { useState } from 'react';
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

const Kontak = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({})

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}
const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:80/pptik-web/user/save', inputs).then(function(response){
        console.log(response.data);
        navigate('/kontak');
    }); 
    
    
}
    return ( 
        <>
        <Nav/>
        <form onSubmit={handleSubmit} action="" className="shadow-2xl w-fit mx-auto my-[50px] flex flex-col border border-gray-300 rounded-lg ">
                <h1 className="px-3 text-white rounded-t-lg py-2 text-base font-semibold bg-blue-600">Kirim pesan</h1>
            <div className="flex flex-row items-center gap-4 mx-3 my-2">
                <div className="flex flex-col">
                    <label>Nama Lenkap</label>
                    <input required onChange={handleChange}  name='Nama_lengkap' type="text" className="outline-none border border-black px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label>No Telepon</label>
                    <input required onChange={handleChange}  name='No_telepon' type="text" className="outline-none border border-black px-3 py-1" />
                </div>
            </div>
            <div className="flex flex-col mx-3">
                <label>Email</label>
                <input required onChange={handleChange} name='Email' type="email" id="email"  className="outline-none border border-black px-3 py-1"/>
            </div>
             <label className="mx-3 mt-2">Tujuan</label>
                <select required onChange={handleChange} name="Tujuan" id="tujuan" className="border border-black mx-3 mb-2">
                    <option value='Saya memilikki proposal kerja sama'>Saya memilikki proposal kerja sama</option>
                    <option value='Saya ingin berkolaborasi dengan pptik'>Saya ingin berkolaborasi dengan pptik</option>
                    <option value='Saya mau bergabung dalam progam pptik'>Saya mau bergabung dalam progam pptik</option>
                </select> 
            <textarea name='Pesan' required onChange={handleChange} rows="4" cols="50" className="outline-none border mx-3 my-2 border-black px-3 py-1"></textarea>
            <button type="sumbit"  className="border rounded bg-blue-600 text-white border-black mx-3 my-2">Kirim</button>
        </form>
        <Footer/>
        </>
     );
}
 
export default Kontak;