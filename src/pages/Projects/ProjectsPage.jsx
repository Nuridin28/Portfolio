import React from "react";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";

export default function ProjectsPage() {
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
        <Projects />
      </Container>
    </div>
  );
}
