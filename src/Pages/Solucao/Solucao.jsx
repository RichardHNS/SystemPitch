import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Solu.css";
import Contatos from "../../Components/Contatos/Contatos";
import gerencia from "/src/assets/image-removebg.png";
import Automacao from "/src/assets/Automação-removebg-preview.png"

const Solucao = () => {
  return (
    <>
      <NavBar />
      <div className="contProblema">
        <div className="TextSolucao">
          <h1 className="titleSolu">Qual a nossa solução?</h1>
          <img
            src={Automacao}
            alt=""
            width="200px"
          />
          <p>
            Sistema tecnológico e inovador que simplifica o registro,
            monitoramento e controle dos EPI's, além de suporte personalizado
            por um profissional de SST, promovendo ações para fomentar a cultura de
            segurança nas empresas.
          </p>
        </div>
        <div className="Como">
          <h3>Como iremos fazer isso?</h3>
          <div className="PComo">
            <ul>
            <li>
              Criação de um sistema de controle de EPI's simples e intuitivo
              para que todos possam utilizar de maneira produtiva e dinâmica.
            </li>
            <li>
              Suporte Personalizado feito por profissional de SST para
              implementação de cultura de segurança na empresa;
            </li>
            <li>
              Utilização de tokens em locais estratégicos antes dos locais de
              trabalho para validação através de IA da utilização de EPI's pelo funcionarios;
            </li>
            <li>Uma gestão simples dos dados pelo gestor.</li>
            </ul>
          </div>
        </div>
        <div className="contValor">
          <h3>Valor Agregado</h3>
          <img src={gerencia} alt="" width="200px" />
          <p>
            Facilitação da gestão centralizada de EPI's da segurança da empresa
            propocionando maior eficiência operacional e redução de riscos de
            acidentes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Solucao;
