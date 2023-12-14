import "./App.css";
import Contatos from "./Components/Contatos/Contatos";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="containerApp">
        <div>
          <NavBar />
        </div>
        <div className="LogoTitle">
          <img src="src/assets/6.png" alt="" width="70px" />
        </div>
        <div className="Title">
          <h2>Olá Somos a EpiControl</h2>
          <p>
            Uma StartUp de inovação, criada por agentes inovadores com um
            objeivo, traze uma cultura de segurança para as micro e pequenas
            empresas.
          </p>
          <a href="https://forms.gle/1yEQz978NvMEvPfi6" target="_blank"> Clique Aqui</a>
          <span>Apenas no final da apresentação</span>
          <hr className="hr1" />
          <div className="ContEquipe">
            <h3>Equipe</h3>
            <ul>
              <p>Integrantes</p>
              <li>
                {" "}
                <strong>Marcos Kaiô</strong> - Tecnico em SST
              </li>
              <li>
                {" "}
                <strong>Natanael Silva</strong> - Desenvolvedor
              </li>
              <li>
                {" "}
                <strong>Pedro Henrique</strong> - Desenvolvedor
              </li>
              <li>
                {" "}
                <strong>Richard Henrique</strong> - Desenvolvedor
              </li>
            </ul>
          </div>

          <div className="backImage"></div>
        </div>
        <Contatos />
      </div>
    </>
  );
}

export default App;
