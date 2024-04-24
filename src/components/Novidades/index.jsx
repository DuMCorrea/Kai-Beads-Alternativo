import React from "react";
import CampoTexto from "@/components/CampoTexto";
import Botao from "@/components/Botao";
import Titulo from "@/components/Titulo";

const FormularioContato = () => {
  return (
    <section id="formulario" className="formulario">
      <div className="interface">
        <Titulo element="h2">FALE <span>CONOSCO!</span></Titulo>

        <form>
          <CampoTexto
            type="text"
            placeholder="Seu nome completo:"
            required
          />
          <CampoTexto
            type="text"
            placeholder="Seu e-mail:"
            required
          />
          <CampoTexto
            type="text"
            placeholder="Seu celular:"
            required
          />
          <CampoTexto
            type="textarea"
            placeholder="Sua mensagem"
            required
          />
          <div className="btn-enviar">
            <Botao
              variant="primary"
              type="submit"
            >
              ENVIAR
            </Botao>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormularioContato;