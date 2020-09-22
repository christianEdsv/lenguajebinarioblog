import Header from "./header";
import "../styles/layout.css";
import React from "react";


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
