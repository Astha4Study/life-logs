import { React ,useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const token = localStorage.getItem("token");

  // if (token) {
  //   return <Navigate to="/dashboard" replace />;
  // }

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) return;

    localStorage.setItem("token", "demo-auth-token");
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium
            hover:bg-blue-700 transition duration-200"
          >
            Masuk
          </button>
        </form>

        {/* Optional Footer */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Belum punya akun?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Daftar
          </span>
        </p>
      </div>
    </div>
  );
}
