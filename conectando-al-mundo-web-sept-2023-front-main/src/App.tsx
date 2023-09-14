import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Example";
import Principal from "./models/Principal";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CreateUserForm from "./screens/CreateUserForm";

const router = createBrowserRouter([
  {
    path: "/principal",
    element: <Principal></Principal>,
  },
  {
    path: "/user-form",
    element: <CreateUserForm></CreateUserForm>,
  },
]);
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
