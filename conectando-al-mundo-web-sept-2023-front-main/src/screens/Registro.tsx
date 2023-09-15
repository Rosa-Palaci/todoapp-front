import "../components/Registro.css";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import calendar from "../components/img/boton-calendar.png";
import menu from "../components/img/menuButton.png";
import fechacalendar from "../components/img/calendar.png";
import triangle from "../components/img/alert-triangle.png";
import linkexternal from "../components/img/external-link.png";
import { Link, useNavigate } from "react-router-dom";
import {tarea} from "../models/tarea"

function Tasklog() {
  const [nombre, setNombre] = useState("");
  const [link, setLink] = useState("");
  const [fecha, setFecha] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [tarea,setTareas]=useState([]);

  function save(){ 
    
    axios.post("http://127.0.0.1:8000/tarea/nueva",{
      nombre: nombre,
      fecha: fecha,
      link: link,
      prioridad: prioridad
    })
  }


  const handleCreateTask = () => {
    if (!nombre || !link || !fecha || !prioridad) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }
    setNombre("");
    setLink("");
    setFecha("");
    setPrioridad("urgent");
    setErrorMessage("");
  
    save();
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
            <label htmlFor="nombre">Enter nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(event) =>{
              const{value}=event.target
              setNombre(value)}}
            />
          </div>
          <div className="form-item">
            <label htmlFor="link">Enter link:</label>
            <input
              type="text"
              id="link"
              value={link}
              onChange={(event) =>{
              const{value}=event.target
              setLink(value)}}
            />
            <img src={linkexternal} />
          </div>
          <div className="form-item">
            <label htmlFor="fecha">Enter fecha:</label>
            <input
              type="text"
              id="fecha"
              value={fecha}
              onChange={(event) =>{
              const{value}=event.target  
              setFecha(event.target.value)}}
            />
          </div>
          <div className="form-item">
            <label htmlFor="prioridad">Enter prioridad:</label>
            <select
              id="prioridad"
              onChange={(event) =>{
              const{value}=event.target
              setPrioridad(value)}}
            >
              <option value="3">Urgent</option>
              <option value="2">Important</option>
              <option value="1">Low</option>
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
