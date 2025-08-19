import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Booking from "./pages/Booking.jsx";
import Contact from "./pages/Contact.jsx";
import Live from "./pages/Live.jsx";
import Error from "./components/Error.jsx"; // <-- Import Error page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />, // <-- Add errorElement here
    children: [
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "booking", element: <Booking /> },
      { path: "contact", element: <Contact /> },
      { path: "live", element: <Live /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
