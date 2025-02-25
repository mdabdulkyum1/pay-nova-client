import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <div className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text min-h-screen">
    <div className="container mx-auto">
      <Navbar></Navbar>
       <main className="min-h-screen">
       <Outlet></Outlet>
       </main>
      <Footer></Footer>
    </div>
  </div>
  
  );
}

export default Layout;
