import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/Global";
import content from "../utils/content";

export default function LandingPage() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}
