import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
    return (
      <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text md:p-6">
        <div className="bg-white dark:bg-dark-background md:p-6 rounded-lg shadow-md">
          <Outlet />
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;
  