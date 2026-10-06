import { Box } from "@mui/material";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  const lintErrorCheck: number = "String";
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <About />
      </main>
      <Contact />
    </Box>
  );
}
