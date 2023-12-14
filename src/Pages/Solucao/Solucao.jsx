import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Solucao.css";
import Contatos from "../../Components/Contatos/Contatos";

const Solucao = () => {
  return (
    <>
      <NavBar />
      <div className="contProblema">
        <div className="TextSolucao">
          <h2>Qual a nossa solução?</h2>
          <img
            src="src/assets/Automação-removebg-preview.png"
            alt=""
            width="200px"
          />
          <p>
            Sistema Tecnólogo e inovador que simplifica o registro,
            monitoramento e controle dos EPI's, além de suporte personalizado
            por profissional de SST, Promovendo ações para fomentar a cultura de
            segurança nas empresas.
          </p>
        </div>
        <div className="Como">
          <h3>Como iremos fazer isso ?</h3>
          <div className="PComo">
            <p>
              Criação de um sistema de controle de Epi's simples e intuitivo
              para que todos consiga utilizar de maneira produtiva e dinâmica.
            </p>
            <p>
              Suporte Personalizado feito por profissional de SST para
              implementação de cultura de segurança na empresa;
            </p>
            <p>
              Utilização de tokens em locais estratégicos antes dos locais de
              trabalho para validação da utilização de EPI's pelo Funcionarios;
            </p>
            <p>Uma gestão simples dos dados pelo gestor.</p>
          </div>
        </div>
        <div className="contValor">
          <h3>Valor Agregado</h3>
          <img src="src/assets/image-removebg.png" alt="" width="200px" />
          <p>
            Facilitação da gestão centralizada de EPI's da segurança da empresa
            propocionando maior eficiência operacional e redução de riscos de
            acidentes.
          </p>
        </div>
        <Contatos />
      </div>
    </>
  );
};

export default Solucao;
