import "../components/Registro.css";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import calendar from "../components/img/boton-calendar.png";
import menu from "../components/img/menuButton.png";
import datecalendar from "../components/img/calendar.png";
import triangle from "../components/img/alert-triangle.png";
import linkexternal from "../components/img/external-link.png";
import { Link, useNavigate } from "react-router-dom";

function Tasklog() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("urgent");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateTask = () => {
    if (!title || !link || !date || !priority) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }
    setTitle("");
    setLink("");
    setDate("");
    setPriority("urgent");
    setErrorMessage("");
  };

  const [menuClicked, setMenuClicked] = useState(false);
  const [calendarClicked, setCalendarClicked] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setMenuClicked(true);
    navigate("/principal");
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

  return (
    <div className="Container">
      <div className="Navbar">
        <img
          src={menu}
          className={`clickable-image ${menuClicked ? "clicked" : ""}`}
          style={{ width: "60px" }}
          onClick={handleMenuClick}
        />
        <h1>Create a new task</h1>
        <img
          src={calendar}
          className={`clickable-image ${calendarClicked ? "clicked" : ""}`}
          style={{ width: "130px" }}
          onClick={handleCalendarClick}
        />
      </div>

      <div className="Forms">
        {errorMessage && (
          <p className="error-message visible">{errorMessage}</p>
        )}

        <form>
          <div className="form-item">
            <label htmlFor="title">Enter title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="link">Enter link:</label>
            <input
              type="text"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <img src={linkexternal} />
          </div>
          <div className="form-item">
            <label htmlFor="date">Enter date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="priority">Enter priority:</label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="urgent">Urgent</option>
              <option value="important">Important</option>
              <option value="low">Low</option>
            </select>
            <img src={triangle} />
          </div>
          <button type="button" onClick={handleCreateTask}>
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default Tasklog;
