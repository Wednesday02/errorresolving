// import React, { useEffect, useState } from 'react'
// import "./user.css"
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import toast from 'react-hot-toast';
// import { deleteUser } from '../../../../server/controller/usercontroller';

// const User = () => {
//     const[users,setUsers]=useState([]);
    

//     useEffect(()=>
//     {
//         const fetchData=async()=>
//         {
//          const response=await axios.get("http://localhost:8000/api/getAll")
//          setUsers(response.data)
//         }
//         fetchData();

//     },[])


//     const deleteUser=async(userId)=>{
//         await axios.delete(`http://localhost:8000/api/delete/${userId}`)
//         .then((response)=>{
//             setUsers((prevUser)=>prevUser.filter((user)=>user._id!= userId))
//             toast.success(response.data.msg, {position :"top-right"})

//     })
//     .catch((error)=>{
//         console.log(error)
//     })
//   return (
//     <div className='userTable'>
//         <Link to={"/add"} className='addButton'>Add User</Link>
//         <table border={1} cellPadding={10} cellSpacing={0}>
//             <thead>
//                 <tr>
//                     <th>S.No.</th>
//                     <th>User Name</th>
//                     <th>User Email</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {/* {
//                 users.map((user,index)=>{
//               return 
//               (
//                 <tr key={user._id}>
//                     <td>{index+1}</td>
//                     <td>{user.fname} {user.lname}</td>
//                     <td>{user.email}</td>
//                     <td className='actionButtons'>
//                         <button><i className="fa-solid fa-trash"></i></button>
//                         <Link to={"/edit"}><i className="fa-solid fa-pen-nib"></i></Link>
//                     </td>
                   
//                 </tr>
//               )
//             })
//             } */}




//             {
//     users.map((user,index) => {
//         return (
//             <tr key={user._id}>
//                 <td>{index+1}</td>
//                 <td>{user.fname} {user.lname}</td>
//                 <td>{user.email}</td>
//                 <td className='actionButtons'>
//                     <button onClick={()=>deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
//                     <Link to={`/edit/`+user._id}><i className="fa-solid fa-pen-nib"></i></Link>
//                 </td>
//             </tr>
//         );
//     })
// }



                
//             </tbody>
            
//         </table>
//     </div>
//   )
// }
// }

// export default User






import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import "./user.css";

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://abc-p46c.onrender.com/api/getAll");
            setUsers(response.data);
        }
        fetchData();
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`https://abc-p46c.onrender.com/api/delete/${userId}`);
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
            toast.success("User deleted successfully", { position: "top-right" });
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete user", { position: "top-right" });
        }
    }

    return (
        <div className='userTable'>
            <Link to={"/add"} className='addButton'>Add User</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.email}</td>
                            <td className='actionButtons'>
                                <button onClick={() => handleDeleteUser(user._id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                                <Link to={`/edit/${user._id}`}>
                                    <i className="fa-solid fa-pen-nib"></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default User;
