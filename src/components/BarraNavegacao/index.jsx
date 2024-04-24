import Menu from "./Menu";
import Logo from "./Logo";
import BotaoTogglerMenu from "./BotaoTogglerMenu";
import BotaoCarrinho from "./BotaoCarrinho";
import CampoTexto from "@/components/CampoTexto";
import Botao from "@/components/Botao";

import { useLocation } from "react-router-dom";

const BarraNavegacao = ({ quantidadeProdutos }) => {
  const location = useLocation();
  const ehAPaginaCarrinho = location.pathname === "/carrinho";
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-light-blue navbar-dark">
        <div className="container-fluid custom-margin">
          <Logo />
          <div className="d-flex flex-row-reverse">
            <BotaoTogglerMenu />
            <BotaoCarrinho
              className={`d-md-none ${ehAPaginaCarrinho && "d-none"}`}
              quantidadeProdutos={quantidadeProdutos}
            />
          </div>
          <div className="collapse navbar-collapse" id="conteudoBarraNavegacao">
            <Menu />
            <div className="d-flex">
            <CampoTexto
            className="me-2"
            type="search"
            placeholder="Digite o nome do produto"
            aria-label="Pesquisar"
               />
            <Botao type="submit" className="btn btn-primary">Pesquisar</Botao>
            </div>
            <BotaoCarrinho
              className={`d-none d-md-block ${
                ehAPaginaCarrinho && "d-md-none"
              }`}
              quantidadeProdutos={quantidadeProdutos}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default BarraNavegacao;
