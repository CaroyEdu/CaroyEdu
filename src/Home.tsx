import { Container } from "@mui/material";
import AppBar from "./components/AppBar";
import Experience from "./components/Experience";
import Presentation from "./components/Presentation";

interface AppProps {
  toggleTheme: () => void;
  isDark: boolean;
}

function Home({ toggleTheme, isDark }: AppProps) {
  return (
    <>
      <AppBar toggleTheme={toggleTheme} isDark={isDark} />
      <Container>
        <Presentation />
        <Experience />
      </Container>
    </>
  );
}

export default Home;
