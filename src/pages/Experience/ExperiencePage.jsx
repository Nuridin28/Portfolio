import React from "react";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Experience from "../../components/Experience/Experience";
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";

export default function ExperiencePage() {
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
        <Experience />
      </Container>
    </div>
  );
}
