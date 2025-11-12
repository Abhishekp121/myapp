function Login(){
    var login=true;
    return(
<div>

    {
        login==true?( <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-96 border border-white/20">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block text-white text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="button"
            className="w-full py-2 rounded-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Login
          </button>

          <p className="text-center text-white/80 text-sm mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-pink-300 hover:underline font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div> ):(<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl w-96">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Create Account ✨
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-white text-sm mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="button"
            className="w-full py-2 rounded-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Sign Up
          </button>

          <p className="text-center text-white/80 text-sm mt-4">
            Already have an account?{" "}
            <a href="#" className="text-pink-300 hover:underline font-medium">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>)
    }
      
     
</div>
    )
}
export default Login;