import "../components/Principal.css";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import calendar from "../components/img/boton-calendar.png";
import task from "../components/img/new-task.png";
import checkbox from "../components/img/checkbox.png";
import edit from "../components/img/edit.png";
import trash from "../components/img/trash.png";
import { Link, useNavigate } from "react-router-dom";

enum FilterOption {
  Urgent = "urgent",
  Important = "important",
  Low = "low",
  All = "all",
}

function TareaProps() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [calendarClicked, setCalendarClicked] = useState(false);
  const navigate = useNavigate();

  const handleTaskClick = () => {
    setMenuClicked(true);
    navigate("/registro");

    setTimeout(() => {
      setMenuClicked(false);
    }, 500);
  };

  const handleCalendarClick = () => {
    setCalendarClicked(true);
    navigate("/calendar");

    setTimeout(() => {
      setCalendarClicked(false);
    }, 500);
  };

  const [filter, setFilter] = useState(FilterOption.All);

  const [tasks, setTasks] = useState([
    { id: 1, name: "Tarea 1" },
    { id: 2, name: "Tarea 2" },
    { id: 3, name: "Tarea 3" }, //Falta logica
  ]);

  const handleFilterClick = (value: FilterOption) => {
    setFilter(value);
    // Agregar lógica adicional para filtrar las tareas según el valor
  };
  return (
    <div className="Container">
      <div className="Navbar">
        <img
          src={task}
          className="clickable-image"
          onClick={handleTaskClick}
          style={{ width: "60px" }}
        />
        <h1>Things to do</h1>
        <img
          src={calendar}
          className="clickable-image"
          onClick={handleCalendarClick}
          style={{ width: "130px" }}
        />
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
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <div className="task-name">{task.name}</div>
            <div className="task-buttons">
              <button className="checkbox-button">
                <img src={checkbox} alt="Editar" />
              </button>
              <button className="edit-button">
                <img src={edit} alt="Editar" />
              </button>
              <button className="delete-button">
                <img src={trash} alt="Eliminar" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TareaProps;
