import { useState } from "react";
import ThemeToggle from "../../hooks/ThemeToggle/ThemeToggle";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: "", 
    pin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pin" && (isNaN(value) || value.length > 5)) return; 
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 w-96 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center">
             <img src={logo} alt="Pay-nova Logo" className="w-16"/>
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-lg font-semibold text-center">
          Login to Your Account <ThemeToggle />
        </h3>

        <form onSubmit={handleSubmit} className="mt-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Email or Phone
            </label>
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter email or phone"
              required
            />
          </div>

          <div className="mt-3">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              5-Digit PIN
            </label>
            <input
              type="password"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              maxLength="5"
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter 5-digit PIN"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-indigo-500 px-4 py-2 text-white shadow-lg hover:bg-indigo-600 transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
          Don{"'"}t have an account?{" "}
          <Link to="/register" className="text-indigo-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
