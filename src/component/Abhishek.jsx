import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFileAlt,
  FaUpload,
  FaCheckCircle,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

const Abhishek = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white/80 shadow-lg p-4 sticky top-0 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold text-indigo-600">FormEase</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="hover:text-indigo-600">
            Forms
          </a>
          <a href="#" className="hover:text-indigo-600">
            Login
          </a>
          <a href="#" className="hover:text-indigo-600">
            Sign Up
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-24 px-6 text-white overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Ab Form Bharwana Hua Easy!
        </h2>
        <p className="max-w-2xl text-lg mb-8 opacity-90">
          MP Online jane ki zarurat nahi. Bas form book karo, documents upload
          karo — aur baaki hum sambhal lenge!
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition-all hover:scale-105">
          Book Your Form Now 🚀
        </button>
      </section>

      {/* How It Works */}
      <section
        className="bg-white text-gray-700 py-16 px-8 rounded-t-3xl shadow-2xl"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaFileAlt className="text-5xl text-indigo-600 mb-3" />,
              title: "Choose Form",
              desc: "Select which government or exam form you want to fill.",
            },
            {
              icon: <FaUpload className="text-5xl text-indigo-600 mb-3" />,
              title: "Upload Docs",
              desc: "Upload your ID & required documents securely.",
            },
            {
              icon: <FaCheckCircle className="text-5xl text-indigo-600 mb-3" />,
              title: "We Fill It",
              desc: "Our team fills your form and sends receipt to your email.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-indigo-50 rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-transform text-center"
            >
              {s.icon}
              <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-600 text-white py-16 text-center" data-aos="fade-up">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div>
            <h4 className="text-4xl font-bold">10K+</h4>
            <p>Forms Processed</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold">1K+</h4>
            <p>Happy Students</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold">100+</h4>
            <p>Partner Institutes</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold">24/7</h4>
            <p>Support</p>
          </div>
        </div>
      </section>

      {/* Popular Forms */}
      <section className="bg-gray-50 py-16 px-8" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Popular Forms Available
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "📄 Scholarship Form",
              date: "Opens on 10 Nov",
              color: "bg-indigo-100",
            },
            {
              name: "🆔 Samagra ID Update",
              date: "Available Now",
              color: "bg-pink-100",
            },
            {
              name: "🎓 College Admission",
              date: "Coming Soon",
              color: "bg-yellow-100",
            },
          ].map((f, i) => (
            <div
              key={i}
              className={`${f.color} p-6 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-transform`}
            >
              <h4 className="text-xl font-bold mb-2">{f.name}</h4>
              <p>{f.date}</p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-8 text-gray-700" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h3>
        <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <li className="bg-indigo-50 p-5 rounded-xl shadow-sm">
            ✅ Fast & Easy Form Booking
          </li>
          <li className="bg-indigo-50 p-5 rounded-xl shadow-sm">
            ✅ Secure Document Handling
          </li>
          <li className="bg-indigo-50 p-5 rounded-xl shadow-sm">
            ✅ 24x7 Support & Notifications
          </li>
          <li className="bg-indigo-50 p-5 rounded-xl shadow-sm">
            ✅ Trusted by 1000+ Students
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-8 text-center" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-10">What Our Students Say</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Priya",
              msg: "FormEase ne mera scholarship form 2 ghante me bhar diya. Bahut easy process!",
              img: "https://randomuser.me/api/portraits/women/79.jpg",
            },
            {
              name: "Rohit",
              msg: "Ab MP Online jane ki zarurat nahi padti. Payment bhi secure hai.",
              img: "https://randomuser.me/api/portraits/men/52.jpg",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md max-w-sm mx-auto hover:shadow-xl transition"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 border-4 border-indigo-200"
              />
              <p className="italic mb-4">“{t.msg}”</p>
              <h4 className="font-semibold text-indigo-600">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white text-center py-8 mt-12">
        <p>© 2025 FormEase. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Contact: support@formease.in | +91 9876543210
        </p>
        <div className="flex justify-center gap-6 mt-4 text-xl">
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
          <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
          <FaTelegram className="hover:text-blue-400 cursor-pointer" />
        </div>
      </footer>
    </div>
  );
};

export default Abhishek;
