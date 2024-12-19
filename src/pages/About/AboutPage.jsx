import React from "react";
import Container from "../../components/Container/Container";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";

export default function AboutPage() {
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
        <About />
      </Container>
    </div>
  );
}
