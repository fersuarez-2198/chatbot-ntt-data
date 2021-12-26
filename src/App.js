// 1: Imports
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/globalStyles";
import { useTheme } from "./theme/useTheme";
import * as styles from "../src/App.css";

import logo from "../src/assets/imgs/productodigital.svg";

import {
  DropdownButton,
  Dropdown,
  Col,
  Row,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  // 2: Capturar el tema seleccionado.
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const image = require("../src/assets/imgs/productodigital.svg").default;

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // 3: Renderizar si se encuentra cargado el tema.
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container
            className="app"
            style={{ color: selectedTheme.textPrimary }}
          >
            <div className="navBar">
              <Row>
                <Col sm={11}>
                  <h1 className="navTitle">{selectedTheme.chatbot_name}</h1>
                </Col>
                <Col sm={1} className="proof">
                  <DropdownButton className="btnSettings">
                    <Dropdown.Item>Reiniciar chat</Dropdown.Item>
                    <Dropdown.Item>Continuar chat</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </div>
          </Container>

          <Container className="messagges">
            <img src={require("../src/assets/imgs/"+selectedTheme.logo_img).default} />
          </Container>

          <Container className="messagges">
            <InputGroup className="mb-3 containerSendMessage">
              <FormControl
                placeholder="Escribe tu mensaje..."
                aria-label="Escribe tu mensaje..."
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <span className="icon-send"></span>
              </Button>
            </InputGroup>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
