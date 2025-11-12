
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Signup = () => {
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({});
  const [userData, setUserData] = useState([
    {
      username: "John Doe",
      email: "john@gmail.com",
      mobile: "9876543210",
      password: "password123",
    },
    {
      username: "Jane Smith",
      email: "jane@gmail.com",
      mobile: "9876001122",
      password: "password456",
    },
  ]);

  // handle form input
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // form submit
  function formSubmitBtn(e) {
    e.preventDefault();

    if (edit) {
      // update existing user
      var updatedData = [...userData];
      updatedData[editIndex] = formData;
      setUserData(updatedData);
      setEdit(false);
      setEditIndex(null);
      alert("User updated successfully!");
    } else {
      // check duplicate email
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === formData.email) {
          alert("User already exists with this email!");
          return;
        }
      }
      // add new user
      setUserData([...userData, formData]);
      alert("User added successfully!");
    }

    // reset form
    setFormData({});
  }

  // delete user
  function deleteUser(index) {
    const newUserData = userData.filter((user, i) => i !== index);
    setUserData(newUserData);
  }

  // edit user
  function editUser(index) {
    const userToEdit = userData[index];
    setFormData(userToEdit);
    setEdit(true);
    setEditIndex(index);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4 space-y-10">
      {/* Signup / Edit Form */}
      <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">
          {edit ? "Edit Account" : "Create Account"}
        </h2>
        <form className="space-y-5" onSubmit={formSubmitBtn}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.username || ""}
              name="username"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30 focus:bg-white/40 placeholder-white/70 text-white focus:outline-none"
            />
          </div>

          {/* Email (hide while editing) */}
          {!edit && (
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/30 focus:bg-white/40 placeholder-white/70 text-white focus:outline-none"
              />
            </div>
          )}

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1">Mobile</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              name="mobile"
              value={formData.mobile || ""}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30 focus:bg-white/40 placeholder-white/70 text-white focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password || ""}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30 focus:bg-white/40 placeholder-white/70 text-white focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md"
          >
            {edit ? "Update" : "Sign Up"}
          </button>
        </form>

        {!edit && (
          <p className="text-center text-sm mt-6 text-white/80">
            Already have an account?{" "}
            <a href="#" className="text-pink-300 hover:underline">
              Login here
            </a>
          </p>
        )}
      </div>

      {/* User Table */}
      <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-4xl text-white overflow-x-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          User Details
        </h3>
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="text-white/90 border-b border-white/30">
              <th className="py-3 px-4">Username</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Mobile</th>
              <th className="py-3 px-4">Password</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr
                key={index}
                className="border-b border-white/10 hover:bg-white/10 transition-all"
              >
                <td className="py-3 px-4">{user.username}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.mobile}</td>
                <td className="py-3 px-4">{user.password}</td>
                <td className="py-3 px-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => editUser(index)}
                    className="p-2 bg-white/30 rounded-full hover:bg-white/50 transition"
                  >
                    <FaEdit size={14} />
                  </button>
                  <button
                    onClick={() => deleteUser(index)}
                    className="p-2 bg-white/30 rounded-full hover:bg-white/50 transition"
                  >
                    <FaTrash size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Signup;
