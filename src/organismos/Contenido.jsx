import React from "react";
import "../../styles/organismos.css";
import Cards from "../moleculas/Cards";

export default function Contenido() {
  const cProps = [
    {
      tituloCard: "Lista De Usuarios",
      contenidoCard:
        "En esta empresa la mision es lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      url: "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
      style:"Button",
      titulo:"Ver Lista"
    },

    {
      tituloCard: "Agregar Usuarios",
      contenidoCard:
        "En esta empresa la vision es lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      url: "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
      style:"Button",
      titulo:"Agregar Usuarios"
    },
    {
      tituloCard: "Ver Sugerencias",
      contenidoCard:
        "En esta empresa los valores lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      url: "https://www.shutterstock.com/image-vector/suggestion-icon-vector-illustration-260nw-2284105619.jpg",
      style:"Button",
      titulo:"Ver Sugerencias"
    },
    {
      tituloCard: "Ver Comprobantes",
      contenidoCard:
        "En esta empresa los valores lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      url: "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
      style:"Button",
      titulo:"Ver Comprobantes"
    },
  ];

  return (
    <>
      <Cards cProps={cProps} />
    </>
  );
}
