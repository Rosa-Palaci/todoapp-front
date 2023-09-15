import "../components/Principal.css";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import calendar from "../components/img/boton-calendar.png";
import task from "../components/img/new-task.png";

enum FilterOption {
  Urgent = "urgent",
  Important = "important",
  Low = "low",
  All = "all",
}

function TareaProps() {
  const [filter, setFilter] = useState(FilterOption.All);

  const handleFilterClick = (value: FilterOption) => {
    setFilter(value);
    // Aquí puedes agregar lógica adicional para filtrar tus tareas según el valor seleccionado.
  };
  return (
    <div className="Container">
      <div className="Navbar">
        <img src={task} style={{ width: "60px" }} />
        <h1>Things to do</h1>
        <img src={calendar} style={{ width: "130px" }} />
      </div>

      <div className="Filter">
        <button
          className={`filter-button ${
            filter === FilterOption.Urgent ? "active" : ""
          } urgent`}
          onClick={() => handleFilterClick(FilterOption.Urgent)}
        >
          Urgent
        </button>
        <button
          className={`filter-button ${
            filter === FilterOption.Important ? "active" : ""
          } important`}
          onClick={() => handleFilterClick(FilterOption.Important)}
        >
          Important
        </button>
        <button
          className={`filter-button ${
            filter === FilterOption.Low ? "active" : ""
          } low`}
          onClick={() => handleFilterClick(FilterOption.Low)}
        >
          Low
        </button>
        <button
          className={`filter-button ${
            filter === FilterOption.All ? "active" : ""
          } all`}
          onClick={() => handleFilterClick(FilterOption.All)}
        >
          All
        </button>
      </div>

      <div className="List">
        <h1>Lista Tareas</h1>
      </div>
    </div>
  );
}

export default TareaProps;
