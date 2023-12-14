import React from "react";
import "./Contatos.css";

const Contatos = () => {
  return (
    <>
      <div className="ContainerContatos">
        <div className="Cont">
          <h3 className="contH3">Contatos</h3>
          <div className="FormCont">
            <div>
              <p>E-mail: </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=epicontrol@gmail.com"
                target="_blank">
                epicontrol@gmail.com
              </a>
            </div>
            <div>
                <p>Número :</p>
                <a href="tel:+123456789" target="_blank">55+ 81 9 8185-8196</a>
            </div>
          </div>
          <h4 className="Titleh4">Apoio</h4>
          <div className="Apoio">
            <img src="src/assets/image 8.png" alt="" width="40px"/>
            <img src="src/assets/image 9.png" alt="" width="45px"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contatos;
