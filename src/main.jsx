import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import ContactsPage from "./pages/Contacts/ContactsPage.jsx";
import ExperiencePage from "./pages/Experience/ExperiencePage.jsx";
import ProjectsPage from "./pages/Projects/ProjectsPage.jsx";
import { ThemeProvider } from "./Context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="About" element={<AboutPage />} />
          <Route path="Contacts" element={<ContactsPage />} />
          <Route path="Experience" element={<ExperiencePage />} />
          <Route path="Projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
