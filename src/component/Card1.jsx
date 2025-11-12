import React from "react";
import clients from  "./Data.json"
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



 function Card1() {
  // const clients = [
  //   {
  //     id: 1,
  //     img: "https://randomuser.me/api/portraits/men/45.jpg",
  //     name: "Abhishek Kumar",
  //     title: "Frontend Developer",
  //     country: "India",
  //     contact: "+91 98765 43210",
  //     email: "abhishek@example.com",
  //     status: "Active",
  //     activation: "2024-03-15",
  //     balance: "$2,450",
  //   },
  //   {
  //     id: 2,
  //     img: "https://randomuser.me/api/portraits/women/65.jpg",
  //     name: "Sneha Patel",
  //     title: "UI/UX Designer",
  //     country: "USA",
  //     contact: "+1 234 567 890",
  //     email: "sneha@example.com",
  //     status: "Inactive",
  //     activation: "2023-09-21",
  //     balance: "$1,120",
  //   },
  //   {
  //     id: 3,
  //     img: "https://randomuser.me/api/portraits/men/32.jpg",
  //     name: "Rohit Sharma",
  //     title: "Backend Engineer",
  //     country: "Canada",
  //     contact: "+1 905 444 7890",
  //     email: "rohit@example.com",
  //     status: "Active",
  //     activation: "2022-12-10",
  //     balance: "$3,870",
  //   },
  // ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl p-6">
        

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left"></th>
                <th className="border border-gray-300 px-4 py-3 text-left"></th>
                <th className="border border-gray-300 px-4 py-3 text-left"> Client Title</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Country</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Contact</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Status</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Activation Date</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Balance</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-100 transition">
                  <td className="border border-gray-300 px-4 py-3">
                    <img
                      src={client.img}
                      alt={client.name}className="w-12 h-12 rounded-full border-2 border-indigo-400"
                      
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">
                    {client.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">{client.title}</td>
                  <td className="border border-gray-300 px-4 py-3">{client.country}</td>
                  <td className="border border-gray-300 px-4 py-3">{client.contact}</td>
                  <td className="border border-gray-300 px-4 py-3">{client.email}</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        client.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">{client.activation}</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-indigo-600">
                    {client.balance}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 flex">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm transition ">
                      <MdEdit />
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm ml-2 transition">
                     <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Card1
