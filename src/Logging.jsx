import React from "react";
import "../styles/atomos.css";
import Button from "./atomos/Button";

export default function Logging() {
  const bProps = [
    {
      nombre:"Iniciar",
      style:"Button",
    }
  ]
  return (
    <>
      <div className="bigContainer">
        <div className="containerLogging">
          <div className="headerLogging"
          >
            <div>
              <h1
              style={{
                textAlign:"center",
                margin:"0 auto",
                marginLeft: "160px",
              }}
              
              >¡Bienvenido a
              
              </h1>
              
            </div>
            <div>
              <h1
                style={{
                  color: "#426B1F",
                  marginLeft: "6%"
                }}
              >
                RentLaR!
              </h1>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <div className="formContainerLogging"
            >
              <div
                style={{
                  margin: "5px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6676/6676023.png"
                  alt="avatar"
                  style={{
                    height: "50px",
                  }}
                />

                <h1>Iniciar Sesion</h1>
              </div>
              <div
                style={{
                  margin: "15px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <h2
                  style={{
                    margin: "20px",
                    marginLeft: "40px",
                  }}
                >
                  Usuario
                </h2>
                <div class="input-wrapper">
                  <input
                    class="input input-text"
                    type="email"
                    id="login-email"
                    autocomplete="off"
                    placeholder=" "
                    required
                  />
                  <label class="input-label" for="login-email">
                    Email
                  </label>
                </div>
              </div>
              <div
                style={{
                  margin: "15px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <h2
                  style={{
                    margin: "12px",
                  }}
                >
                  Contraseña
                </h2>
                <div class="input-wrapper">
                  <input
                    class="input input-text"
                    type="password"
                    id="login-password"
                    autocomplete="off"
                    placeholder=" "
                    required=""
                  />
                  <label class="input-label" for="login-password">
                    Password
                  </label>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button bProps={bProps}/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
