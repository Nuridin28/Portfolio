import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";

export default function Hero() {
  const handleOpenCV = () => {
    const cvUrl = "/cv2024.pdf";
    window.open(cvUrl, "_blank");
  };
  return (
    <section className="hero  md:py-40 py-12 text-center lg:text-start">
      <h2 className=" md:text-6xl text-3xl font-bold ">
        Hi, I’m Nuridin, <br /> I build things for the web.
      </h2>
      <p className="mt-8 text-xl font-light">
        I’m software developer and this is my portfolio.
      </p>
      <ButtonPrimary onClick={handleOpenCV}>Check out my CV</ButtonPrimary>
    </section>
  );
}
