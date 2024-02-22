import React from "react";
import Head from "../atomos/Head";
import Nav from "../moleculas/Nav";
import Profile from "../atomos/Profile";
import "../../styles/organismos.css"

export default function Header() {

    const aProps = [
        {
            href: "/",
            nombreInput: "Inicio"
  
        },
        {
            href: "/",
            nombreInput: "Servicios"
            
        },
        {
            href: "/",
            nombreInput: "Clientes"
        },
        {
            href: "/",
            nombreInput: "Productos"
        }
    ]

   

  return (
    <>
      <header className="header">
      
        <Head />
        <Nav aProps={aProps}/>
        <Profile/>
      </header>
    </>
  );
}
