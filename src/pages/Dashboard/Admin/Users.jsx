import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../hooks/GetAuthInfo/useAuth";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);

  // Fetch users
  const { data: users = [], isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await axiosSecure.get("api/users");
      return data.users;
    },
  });

  console.log(users)

  // Search filter
  const filteredUsers = users.filter((u) =>
    u.mobile?.toString().includes(search)
  );

  // Fetch transactions when clicking on a user
  const handleUserClick = async (userId) => {
    setLoadingTransactions(true);
    try {
      const { data } = await axiosSecure.get(`api/transactions/${userId}`);
      setTransactions(data.transactions);
      setSelectedUser(users.find((u) => u._id === userId));
    } catch (err) {
      console.error("Error fetching transactions:", err);
    } finally {
      setLoadingTransactions(false);
    }
  };

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      {/* 🔍 Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Phone Number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <h2 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">
        User Management
      </h2>

      {/* 📋 Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow-md">
          <thead>
            <tr className="bg-indigo-500 text-white">
              <th className="py-3 px-4 text-left">Profile</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Balance</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user._id}
                  className="border-t border-gray-300 dark:border-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => handleUserClick(user._id)} // 🔥 Click to show transactions
                >
                  <td className="py-3 px-4">
                    <img
                      src={
                        user.photoURL ||
                        "https://via.placeholder.com/40?text=User"
                      }
                      alt={user.name}
                      className="w-10 h-10 rounded-full border border-gray-300"
                    />
                  </td>
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.mobile || "N/A"}</td>
                  <td className="py-3 px-4 capitalize">{user.role}</td>
                  <td className="py-3 px-4">$10</td>
                  <td className="py-3 px-4 text-center">
                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                      Block
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500 dark:text-gray-400">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 🔥 Transactions Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Transactions for {selectedUser.name}
            </h3>

            {loadingTransactions ? (
              <p>Loading transactions...</p>
            ) : transactions.length > 0 ? (
              <ul className="mt-4">
                {transactions.map((tx) => (
                  <li
                    key={tx._id}
                    className="p-2 border-b border-gray-300 dark:border-gray-700"
                  >
                    <span className="font-semibold text-indigo-500">
                      ${tx.amount}
                    </span>{" "}
                    - {tx.type} on {new Date(tx.date).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No transactions found.</p>
            )}

            {/* Close Modal */}
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
