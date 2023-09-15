import "../components/Principal.css";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import menu from "../components/img/menuButton.png";
import task from "../components/img/new-task.png";
import calendarimg from "../components/img/googletips_calendar2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { tarea } from "../models/tarea";

enum FilterOption {
  Urgent = "urgent",
  Important = "important",
  Low = "low",
  All = "all",
}

function CalendarProps() {
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
    navigate("/principal");

    setTimeout(() => {
      setCalendarClicked(false);
    }, 500);
  };

  const [filter, setFilter] = useState(FilterOption.All);

  const handleFilterClick = (value: FilterOption) => {
    setFilter(value);
  };

  return (
    <div className="Container">
      <div className="Navbar">
        <img
          src={menu}
          className="clickable-image"
          onClick={handleTaskClick}
          style={{ width: "60px" }}
        />
        <h1>Calendar</h1>
        <img
          src={task}
          className="clickable-image"
          onClick={handleTaskClick}
          style={{ width: "60px" }}
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

      <div className="Calendar">
        <img src={calendarimg} alt="Editar" />
      </div>
    </div>
  );
}

export default CalendarProps;
