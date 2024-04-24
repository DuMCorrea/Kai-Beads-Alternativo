import React from "react";
import Titulo from "@/components/Titulo";
import CategoriaCard from "@/components/CategoriaCard";
import produtos from "@/mocks/produtos.json";

const CategoriasPage = ({ adicionarProduto }) => {
  const categorias = [
    { nome: "Canga Toalhas", produtos: produtos.filter(p => p.categoria === "Canga Toalhas") },
    { nome: "Moletons", produtos: produtos.filter(p => p.categoria === "Moletons") },
    {
      nome: "Prata 925",
      produtos: produtos.filter(p => p.categoria === "Prata 925")
    }
  ];

  return (
    <section role="categorias" aria-label="Categorias">
      {categorias.map(categoria => (
        <div key={categoria.nome}>
          <Titulo>{categoria.nome}</Titulo>
          <div className="container row mx-auto">
            {categoria.produtos.map(produto => (
              <CategoriaCard
                key={produto.id}
                {...produto}
                adicionarProduto={() => adicionarProduto(produto)}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoriasPage;