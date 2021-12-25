import React from 'react';
import './App.css';
import styled from 'styled-components'
import { Col } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import SynthEngine from './SynthEngine';

// Set the button colors using styled-components
const H2 = styled.h2`
  font-size: 24px;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zoltan</h1>
        <H2>A polyphonic Javascript synthesizer</H2>
      </header>
      <SynthEngine>
      </SynthEngine>
    </div>
  );
}

export default App;
