import { useState } from "react";
import ThemeToggle from "../../hooks/ThemeToggle/ThemeToggle";
import { Link } from 'react-router';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    pin: "",
    mobile: "",
    email: "",
    role: "user",
    nid: "",
    photoURL: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pin" && (isNaN(value) || value.length > 5)) return; // Restrict to 5 digits
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-800 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg px-8 py-10 shadow-xl w-full max-w-3xl border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-6">
          <h3 className="text-gray-900 dark:text-white text-xl font-semibold">
            Create Your Account <ThemeToggle />
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter full name"
              required
            />
          </div>

          {/* 5-Digit PIN */}
          <div>
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

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Mobile Number (Unique)
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter mobile number"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Email (Unique)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Account Type Dropdown */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Account Type
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="user">User</option>
              <option value="agent">Agent</option>
            </select>
          </div>

          {/* NID */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              National ID (Unique)
            </label>
            <input
              type="text"
              name="nid"
              value={formData.nid}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter NID"
              required
            />
          </div>

          {/* Submit Button (Spans Full Width) */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-indigo-500 px-4 py-2 text-white shadow-lg hover:bg-indigo-600 transition"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
