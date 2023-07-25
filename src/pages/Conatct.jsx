import React from "react";
import Nav from "../components/Nav";
import Contacts from "../components/Contacts";
import Section5 from "../components/Section5";
import { ToastContainer } from "react-toastify";

export default function Conatct() {
  return (
    <div className="p-0 m-0">
      <div className="px-lg-5 mx-4">
      <Nav />
      </div>
      
      <Contacts />
      <div className="px-lg-5 mx-4">
      <Section5 />
      <ToastContainer />
      </div>
   
      

    </div>
  );
}
