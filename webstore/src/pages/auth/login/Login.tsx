import React from "react";

export default function Login({ switchToRegister }: { switchToRegister: () => void }) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7faf7] px-4">

      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full">

        {/* Left branding panel */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#4E8EA2] text-white p-8">
          <h2 className="text-3xl font-semibold mb-4">Fresh Groceries</h2>
          <p className="text-sm text-center opacity-90">
            Welcome back! Continue shopping fresh groceries and essentials delivered to your doorstep.
          </p>
        </div>

        {/* Right form */}
        <div className="p-8">

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Welcome Back</h1>
            <p className="text-gray-500 text-sm">
              Login to continue shopping 🛒
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E8EA2]"
            />

              <div className="flex flex-col relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E8EA2]"
            />
            <button 
             type="button"
             onClick={() => setShowPassword((prev) => !prev)}
             className="absolute right-3 top-2 text-gray-500">
              {showPassword ? "🙈" : "👁️"}
            </button>  
           </div>

            <div className="flex justify-end text-sm">
              <button className="text-[#4E8EA2] hover:underline">
                Forgot password?
              </button>
            </div>

            <button className="w-full bg-[#4E8EA2] text-white py-3 rounded-lg font-medium hover:bg-[#3b6d7d] transition shadow-sm">
              Login
            </button>

          </div>

          {/* Footer */}
          <div className="mt-6 text-sm text-center">
            <span className="text-gray-500">Don’t have an account? </span>
            <button
              onClick={switchToRegister}
              className="text-[#4E8EA2] font-medium hover:underline"
            >
              Register
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}