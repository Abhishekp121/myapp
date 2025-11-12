// import React from "react";
// const ContactList = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
//       <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//           Contact Manager
//         </h2>
//         {/* Input Section */}
//         <div className="flex items-center gap-3 mb-6">
//           <input
//             type="text"
//             placeholder="Enter phone number"
//             className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//           <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow">
//             Add
//           </button>
//         </div>
//         {/* Contact List */}
//         <div className="space-y-3">
//           <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
//             <span className="text-gray-700 font-medium">+91 9876543210</span>
//             <button className="text-red-500 hover:text-red-600 font-semibold">
//               Delete
//             </button>
//           </div>
//           <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
//             <span className="text-gray-700 font-medium">+91 9123456789</span>
//             <button className="text-red-500 hover:text-red-600 font-semibold">
//               Delete
//             </button>
//           </div>
//           <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
//             <span className="text-gray-700 font-medium">+91 9000000000</span>
//             <button className="text-red-500 hover:text-red-600 font-semibold">
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ContactList;


import React, { useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([
    "+91 9876543210",
    "+91 9123456789",
    "+91 9000000000",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const newNumber = inputValue.trim();

    if (newNumber === "") {
      alert("Please enter a phone number!");
      return;
    }

    // Check if number already exists
    if (contacts.includes(newNumber)) {
      alert("This number already exists!");
      return;
    }

    // Add new number
    setContacts([...contacts, newNumber]);
    setInputValue(""); // clear input
  };

  const handleDelete = (number) => {
    setContacts(contacts.filter((contact) => contact !== number));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Contact Manager
        </h2>

        {/* Input Section */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter phone number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleAdd}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow"
          >
            Add
          </button>
        </div>

        {/* Contact List */}
        <div className="space-y-3">
          {contacts.map((number, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
            >
              <span className="text-gray-700 font-medium">{number}</span>
              <button
                onClick={() => handleDelete(number)}
                className="text-red-500 hover:text-red-600 font-semibold"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
