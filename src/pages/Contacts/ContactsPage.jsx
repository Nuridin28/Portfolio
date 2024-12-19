import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";

export default function ContactsPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#130125" : "#fff",
        color: theme === "dark" ? "#fff" : "#130125",
        height: "100vw",
      }}
    >
      <Container>
        <Header />
        <Contacts />
      </Container>
    </div>
  );
}
