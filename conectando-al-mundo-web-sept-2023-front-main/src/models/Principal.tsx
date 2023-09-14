import Busqueda from "../components/pokedex/Busqueda";
import "../components/Principal.css";
import PokemonInfo from "../components/pokedex/PokemonInfo";
import { Grid } from "@mui/material";
import { Pokemon } from "./Pokemon";
import { useEffect, useState } from "react";
import axios from "axios";

function Pokedex() {
  return (
    <div className="Pokedex">
      <h1>Things to do</h1>
      <h2>Title: {}</h2>
    </div>
  );
}

export default Pokedex;
