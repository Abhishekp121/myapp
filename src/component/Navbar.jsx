import React, { useState } from "react";

function Navbar() {
  const [showModal, setShowModal] = useState(true); 
  const [showDataModal, setShowDataModal] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

 
 const [userData, setUserData] = useState({});

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
// console.log(formData)

  // const handleChange = (e) => { 
  //   // setFormData[name,value]
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowModal(false); 
  //   setShowDataModal(true); 
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData); 
    setShowModal(false);
    setShowDataModal(true);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/20 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* 🔹 Logo */}
            <div className="text-indigo-600 font-extrabold text-2xl">
              Abhishek
            </div>

        
            <div className="flex space-x-8 justify-center">
              <a
                href="#"
                className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md transition"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md transition"
              >
                Contact
              </a>
            </div>

       
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

   
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
              Create an Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}

      
      {showDataModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowDataModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
              Signup Details
            </h2>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Full Name:</span> {formData.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {formData.email}
              </p>
              <p>
                <span className="font-semibold">Password:</span> {formData.password}
              </p>
            </div>

            <button
              onClick={() => setShowDataModal(false)}
              className="mt-5 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
