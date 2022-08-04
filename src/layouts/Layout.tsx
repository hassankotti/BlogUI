import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className='w-full min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-400 font-normal'>
      <Navbar />
      <main className="mx-auto">{children}</main>
      <Footer />
    </div>
  );
};


export default Layout;
