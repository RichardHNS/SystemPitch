import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Validacao.css";
import Mercado from "/src/assets/Mercado.png";
import Tecnica from "/src/assets/RespostaTecnica.jpeg";
import Mvp from "/src/assets/Mvp1.png";
import Network from "/src/assets/Network.png";

const Validacao = () => {
  return (
    <>
      <NavBar />
      <div className="contValidacao">
        <h2>Pesquisa de mercado</h2>
        <div className="imgVali">
          <img src={Mercado} alt="" width="300px" />
          <p>
            O setor industrial é um dos segmentos que mais demanda o uso de
            EPIs. Além disso, o setor está em 4° dentre as empresas que mais
            fecham no país (fonte: SEBRAE, 2016)
          </p>
          <div className="">
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="ValidaSolu">
          <h2>Validação da solução</h2>
          <p>
            Criamos um formulário para para validar nossa Solução, abaixo os
            dados apurados:
          </p>
          <div className="contValiGrafico">
            <ul>
              <li></li>
              <img src="" alt="" />
              <li></li>
              <img src="" alt="" />
              <li>
                Foi citado se as empresas estavam disposta a dialogar sobre
                implementação da solução:
              </li>
              <img src="" alt="" />
            </ul>
          </div>

          <div className="valiTecnica">
            <p>
              {" "}
              Abaixo feedback e sugestão de profissional de Segurança do
              Trabalho durante ideação e validação do problema.
            </p>
            <img src={Tecnica} alt="" width="300px" />
          </div>
        </div>
        <div className="contImp">
          <h2>Como será feita a implementação? </h2>
          <div className="Implementar">
            <img src={Mvp} alt="" width="250px" />
            <p>
              Nosso modelo de negócio se baseia na produção de um MVP (Mínimo
              Produto Viável) para a implementação inicial dos nossos serviços
              em empresas que serão nossos adotantes iniciais. Com isso,
              poderemos evoluir a solução, adquirindo maturidade no mercado e
              reinvestindo o retorno nos nossos serviços.
            </p>
            <img className="imgNet" src={Network} alt="" width="300px" />
            <p>
              É essencial que durante o processo de produção do MVP tenhamos
              algum investimento financeiro, de networking, apoio técnico ou de
              aceleração para auxiliar no processo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Validacao;
