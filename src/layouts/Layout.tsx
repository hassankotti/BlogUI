import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className='w-full  bg-gray-50 dark:bg-heavy-metal-900 dark:text-heavy-metal-400 font-normal'>
      {/*  Site navbar */}
      <Navbar />
      <main className="mx-auto flex flex-col min-h-screen overflow-hidden">{children}</main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};


export default Layout;
