import styled from "styled-components";
import Logo from "./components/Logo";
import Main from "./components/Main";
import Footer from "./components/Footer";

const StyledApp = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
`;

function App() {
  return (
    <StyledApp>
      <Logo />
      <Main />
      <Footer />
    </StyledApp>
  );
}

export default App;
