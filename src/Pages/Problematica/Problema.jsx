import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Problematica.css";
import Acidente from "/src/assets/Acidente.png";
import Contatos from "../../Components/Contatos/Contatos";

const Problema = () => {
  return (
    <>
      <NavBar />
      <div className="contProblema">
        <h2 className="ProbH2">Problemas Abordados</h2>
        <div className="Acidente">
          <ul className="ContentUl">
            <li>
               Falta de controle efetivo por parte das empresas do uso de equipamentos de proteção individual.
            </li>
            <li>
              Ausência de uma cultura de segurança eficiente nas micro e
              pequenas empresas.
            </li>
          </ul>
          <img className="imgAcidente" src={Acidente} alt="" width="300px" height="200px" />
          <div className="Dados">
            <p>
              De 2012 a 2020, de acordo com dados do Observatório de Segurança e
              Saúde no Trabalho da Plataforma{" "}
              <a className="Smartlab" href="https://smartlabbr.org/sst">
                SmartLab.
              </a>{" "}
            </p>
            <ul>
              <li>
                lesões mais comuns em acidentes de trabalho foram cortes,
                lacerações, feridas contusas ou perfurações (21%)
              </li>
              <li>
                Máquinas e equipamentos foram responsáveis por 15% dos
                acidentes, e a ocupação mais frequentemente associada foi
                alimentador de linha de produção (6%).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problema;
