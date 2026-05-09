import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App.jsx"
import Servicios from "./pages/Servicios.jsx"
import Tecnologias from "./pages/Tecnologias.jsx"
import Experiencia from "./pages/Experiencia.jsx"
import Contacto from "./pages/Contacto.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)