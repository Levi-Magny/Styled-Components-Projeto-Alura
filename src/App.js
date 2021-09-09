import React from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from './Components/GlobalStyle';
import { BtnTema } from "./Components/UI";
import SwitcherTemas from "./Components/SwitcherTemas";
import { useState } from "react";

function App() {
  const [tema, setTema] = useState(true);

  const handleTema = ()=>{
    setTema(!tema);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={handleTema}>
         <SwitcherTemas tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
