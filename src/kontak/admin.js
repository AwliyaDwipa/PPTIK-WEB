import axios from "axios";
import { useEffect, useState } from "react";



const Admin = () => {

    const [user, setUser] = useState([]);
    useEffect(() => {
        getUser();
    }, [] );

    function getUser(){
        axios.get('http://localhost:80/pptik-web/user/').then(function(response){
            console.log(response.data);
            setUser(response.data);
        });
    }

    return ( 
        <>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold my-5">List user</h1>
        <div className="w-fit overflow-x-hidden shadow-2xl rounded-3xl">
            <table className="table-fixed border-collapse">
                <thead className="bg-blue-300">
                    <tr>
                        <th className=" px-3 py-2">Nama lengkap</th>
                        <th className=" px-3 py-2">No telepon</th>
                        <th className=" px-3 py-2">Email</th>
                        <th className=" px-3 py-2">Tujuan</th>
                        <th className=" px-3 py-2">Pesan</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user, key) =>
                        <tr key={key}>
                            <td className="px-3 py-2">{user.Nama_lengkap}</td>
                            <td className="px-3 py-2">{user.No_telepon}</td>
                            <td className="px-3 py-2">{user.Email}</td>
                            <td className="px-3 py-2">{user.Tujuan}</td>
                            <td className="px-3 py-2">{user.Pesan}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </div>
        </>
     );
}
 
export default Admin;