import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Problematica.css";

const Problema = () => {
  return (
    <>
      <NavBar />
      <div className="contProblema">
        <h2 className="ProbH2">Aonde queremos agir?</h2>
        <div className="Acidente">
          <ul>
            <li>
              Na falta de controle efetivo por parte das empresas do uso e gestão
              de equipamentos de proteção individual.
            </li>
            <li>Ausência de uma cultura de segurança eficiente nas micro e pequenas empresas.</li>
          </ul>
          <img
            src="src/assets/Acidente.png"
            alt=""
            width="300px"
            height="200px"
          />
        </div>
      </div>
    </>
  );
};

export default Problema;
