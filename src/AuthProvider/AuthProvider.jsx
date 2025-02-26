import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/AxiosPublic/useAxiosPublic";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

console.log(user)
  // Fetch user data if a token exists
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        setLoading(true);
        const response = await axiosPublic.get("api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    } else {
      setUser(null);
      setLoading(false);
    }
  };

  // Run fetchUser when AuthProvider mounts
  useEffect(() => {
    fetchUser();
  }, []);



  return (
    <AuthContext.Provider value={{ user, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
