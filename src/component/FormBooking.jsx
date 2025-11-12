import React from "react";

const Navbar = () => (
  <nav className="fixed w-full z-30 top-0">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-white/6 backdrop-blur-md rounded-b-2xl shadow-sm">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500">
          FormEase
        </div>
        <span className="text-sm text-white/80 hidden md:inline">Form bharne ka smart tarika</span>
      </div>

      <div className="hidden md:flex items-center gap-6 text-white/90">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#forms" className="hover:text-white">Forms</a>
        <a href="#how" className="hover:text-white">How it works</a>
        <a href="#pricing" className="hover:text-white">Pricing</a>
        <a href="#contact" className="hover:text-white">Contact</a>
        <button className="ml-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-4 py-2 rounded-full font-semibold shadow">Book Now</button>
      </div>

      <div className="md:hidden text-white pr-2">☰</div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="min-h-[72vh] flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Ab Form Bharwana <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-violet-400">Hua Easy</span>!
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-xl">
            MP Online jane ki zarurat nahi. Bas FormEase par booking karo, documents upload karo — aur hum jab date aaye tab form aapke liye bhar denge.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#forms" className="inline-block bg-white/90 text-black px-6 py-3 rounded-full font-semibold shadow hover:scale-[1.02] transition">
              Book Your Form Now
            </a>
            <a href="#how" className="inline-block border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/8 transition">
              How It Works
            </a>
          </div>

          <div className="mt-6 text-sm text-white/75">
            <span className="mr-4">✅ Secure Payments</span>
            <span className="mr-4">✅ DG Locker Support</span>
            <span>✅ 24x7 Support</span>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-sky-500 via-violet-600 to-pink-500 rounded-3xl p-6 bg-opacity-70 shadow-2xl">
            <div className="bg-glass rounded-2xl p-6 text-slate-900">
              <h3 className="font-bold text-xl mb-2">Popular forms opening soon</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>Scholarship Form</span>
                  <span className="text-indigo-600 font-medium">10 Nov</span>
                </li>
                <li className="flex justify-between">
                  <span>Samagra ID Update</span>
                  <span className="text-rose-600 font-medium">Available</span>
                </li>
                <li className="flex justify-between">
                  <span>College Admission</span>
                  <span className="text-yellow-600 font-medium">Coming</span>
                </li>
              </ul>
              <div className="mt-4">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow">Explore Forms</button>
              </div>
            </div>
          </div>

          <div className="absolute -right-6 -bottom-6 w-40 h-40 rounded-2xl bg-white/6 backdrop-blur-md border border-white/10"></div>
        </div>
      </div>
    </div>
  </header>
);

const HowItWorks = () => (
  <section id="how" className="py-16">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-8">How FormEase Works</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: "1️⃣", title: "Choose Form", desc: "Search & select the required government/college form." },
          { icon: "2️⃣", title: "Upload Docs", desc: "Upload ID & documents (DG Locker supported)." },
          { icon: "3️⃣", title: "We Fill It", desc: "Our team fills when the date opens and sends receipt." },
        ].map((s, i) => (
          <div key={i} className="bg-glass rounded-2xl p-6 text-white shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-semibold text-xl">{s.title}</h3>
            <p className="mt-2 text-white/80">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PopularForms = () => {
  const forms = [
    { name: "Scholarship Form", date: "Opens 10 Nov", tag: "Hot" },
    { name: "Samagra ID Update", date: "Available", tag: "Now" },
    { name: "College Admission", date: "Coming Soon", tag: "Soon" },
    { name: "Aadhar Correction", date: "Available", tag: "Now" },
    { name: "PAN Card Update", date: "Available", tag: "Now" },
    { name: "Ration Card", date: "Opens 20 Nov", tag: "Alert" },
  ];

  return (
    <section id="forms" className="py-16 bg-white/4">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Popular Forms Available</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((f, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{f.name}</h3>
                  <p className="text-sm text-white/80 mt-2">{f.date}</p>
                </div>
                <div>
                  <span className="inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{f.tag}</span>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg font-medium">Book Now</button>
                <button className="py-2 px-3 border border-white/10 rounded-lg text-white">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => (
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose FormEase?</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "Fast & Easy Booking", desc: "Book forms in minutes without visiting MP Online centers." },
          { title: "Secure Document Handling", desc: "Encrypted storage & DG Locker support." },
          { title: "Verified Operators", desc: "Trained team to fill forms correctly." },
          { title: "Notifications & Tracking", desc: "Live updates and receipts delivered." },
        ].map((c, i) => (
          <div key={i} className="bg-glass rounded-2xl p-6 shadow">
            <h4 className="font-semibold text-xl">{c.title}</h4>
            <p className="mt-2 text-white/80">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DashboardPreview = () => (
  <section className="py-16 bg-white/4">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-6">Dashboard Preview</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/6 p-6 rounded-2xl shadow-lg">
          <h3 className="text-white font-semibold mb-4">Manager View</h3>
          <div className="h-40 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-lg"></div>
        </div>

        <div className="bg-white/6 p-6 rounded-2xl shadow-lg">
          <h3 className="text-white font-semibold mb-4">User View</h3>
          <div className="h-40 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-16">
    <div className="max-w-5xl mx-auto px-6 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Students Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-glass p-6 rounded-2xl">
          <p className="italic text-white/90">“FormEase ne mera scholarship form bahut asaani se bhar diya — receipt turant mili.”</p>
          <div className="mt-4 font-semibold">— Priya Sharma</div>
        </div>
        <div className="bg-glass p-6 rounded-2xl">
          <p className="italic text-white/90">“No more MP Online queues. Bahut time bacha.”</p>
          <div className="mt-4 font-semibold">— Rohit Verma</div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8">
    <div className="max-w-7xl mx-auto px-6 text-white/90 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="font-bold text-lg">FormEase</div>
          <div className="text-white/70">© 2025 FormEase. All Rights Reserved.</div>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-700 via-violet-700 to-pink-600 text-white pb-12">
      <Navbar />
      <main className="pt-28">
        <Hero />
        <HowItWorks />
        <PopularForms />
        <WhyChooseUs />
        <DashboardPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
