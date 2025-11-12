import React from 'react'
import { GrCurrency } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";


function Row(props) {
  return (
    <>
    <tr className="text-20 text-center bg-gray-100 w-12 h-12 rounded-full border-2 border-indigo-400 ">
         <td className="h-10 w-20 p-4 rounded-1xl "><img src={props.objdata.logo} alt="" /></td>   
         <td>{props.objdata.title}</td>
         <td className="w-25">{props.objdata.country}</td>
         <td className="w-25">{props.objdata.contact}</td>
         <td className="w-25">{props.objdata.email}</td>
         <td > <span className="bg-green-100 text-green-400 rounded-2xl px-6 py-2">{props.objdata.status}</span></td>
         <td className="w-30">{props.objdata.date}</td>
         <td ><div className='flex gap-5'><GrCurrency className="text-2xl ml-30" /><p>{props.objdata.balance}</p></div> </td>
         <td className="flex  gap-3 text-2xl mt-5 ml-5 "><FiEdit2 /> <div ></div><AiOutlineDelete /> 
    </td>
        </tr>
        
    </>
  )
}

export default Row