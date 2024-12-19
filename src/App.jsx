import { useContext, useEffect } from "react";
import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Container from "./components/Container/Container";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#130125" : "#fff",
        color: theme === "dark" ? "#fff" : "#130125",
      }}
    >
      <Container>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contacts />
      </Container>
    </div>
  );
}

export default App;
