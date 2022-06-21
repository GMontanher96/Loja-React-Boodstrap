import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import React from 'react'
import ProdutoContext from "./context/ProdutoContext";

export default function Loja() {
    return (
      <div>
        <ProdutoContext>
        <Header />
        <Outlet />
        </ProdutoContext>
      </div>
    );
}