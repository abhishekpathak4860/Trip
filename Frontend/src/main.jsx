import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trip from "./components/Trip.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/trip",
    element: <Trip />,
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
