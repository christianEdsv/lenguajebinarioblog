import React from "react";
import "../styles/layout.css";
import Header from "./header";

const Layout = ({ children }) => {

  return (
    <>
      <div className='container'>
        <Header />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Christian Hernandez
        </footer>
      </div>
    </>
  )
}

export default Layout;
