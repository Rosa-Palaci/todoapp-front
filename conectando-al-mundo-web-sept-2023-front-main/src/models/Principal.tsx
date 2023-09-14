import Busqueda from "../components/pokedex/Busqueda";
import "../components/Principal.css";
import PokemonInfo from "../components/pokedex/PokemonInfo";
import { Grid } from "@mui/material";
import { Pokemon } from "./Pokemon";
import { useEffect, useState } from "react";
import axios from "axios";
import calendar from "../components/img/boton-calendar.png";
import task from "../components/img/new-task.png";

function TareaProps() {
  return (
    <div className="Container">
      <div className="Navbar">
        <img src={task} style={{ width: "60px" }} />
        <h1>Things to do</h1>
        <img src={calendar} style={{ width: "130px" }} />
      </div>
    </div>
  );
}

export default TareaProps;
