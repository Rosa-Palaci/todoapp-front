import "../components/Registro.css";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import calendar from "../components/img/boton-calendar.png";
import menu from "../components/img/menuButton.png";
import datecalendar from "../components/img/calendar.png";
import triangle from "../components/img/alert-triangle.png";
import linkexternal from "../components/img/external-link.png";

function Tasklog() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("urgent");

  const handleCreateTask = () => {
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // a través de una solicitud axios u otro método.
    // Por ejemplo, puedes enviarlos a tu servidor para crear la tarea.

    // Limpia los campos después de crear la tarea
    setTitle("");
    setLink("");
    setDate("");
    setPriority("urgent");
  };
  return (
    <div className="Container">
      <div className="Navbar">
        <img src={menu} style={{ width: "60px" }} />
        <h1>Create a new task</h1>
        <img src={calendar} style={{ width: "130px" }} />
      </div>

      <div className="Forms">
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
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <img src={datecalendar} />
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
