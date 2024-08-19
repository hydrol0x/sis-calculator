import { useState } from "react";
import { Container } from "react-bootstrap";
// import "./App.css";
import GradesForm from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container className="CarbTrackerDiv" fluid>
        <h1 className="trackerh1"> Grade Calculator </h1>
        <GradesForm />
      </Container>
    </>
  );
}

export default App;
