import "../components/Calendar.css";
import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, useNavigate } from "react-router-dom";

export const Calendar = (): JSX.Element => {
  const navigate = useNavigate();
  const goToMenu = () => {
    navigate("/principal");
  };
  const goToAdd = () => {
    navigate("/registro");
  };
  return (
    <div className="calendar">
        <div className="title">Calendar</div>
        <Button className="menu" onClick={goToMenu}></Button>
        <Button className="plus" onClick={goToAdd}></Button>
        <div className="monday">
          <div className="text-monday">Monday</div>
          <div className="mon_task1">
            <div className="low_task">
              <div className="task_text">Tarea 1</div>
            </div>
          </div>
          <div className="mon_task2">
            <div className="important_task">
              <div className="task_text">Tarea 2</div>
            </div>
          </div>
          <div className="mon_task3">
            <div className="urgent_task">
              <div className="task_text">Tarea 3</div>
            </div>
          </div>
        </div>
        <div className="tuesday">
          <div className="text-tuesday">Tuesday</div>
        </div>
        <div className="wednesday">
          <div className="text-wednesday">Wednesday</div>
        </div>
        <div className="thursday">
          <div className="text-thursday">Thursday</div>
        </div>
        <div className="friday">
          <div className="text-friday">Friday</div>
        </div>
        <div className="filter">
          <div className="urgent">
            <Button className="img-urgent"></Button>
              <div className="urgent-text">Urgent</div>
            </div>
          <div className="important">
            <Button className="img-important"></Button>
              <div className="important-text">Important</div>
            </div>
          <div className="low">
            <Button className="img-low"></Button>
              <div className="low-text">Low</div>
            </div>
          <div className="all">
            <Button className="img-all"></Button>
              <div className="all-text">All</div>
          </div>
        </div>
    </div>
  );
};