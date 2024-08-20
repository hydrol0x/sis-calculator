import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import GradesForm from "./components/Form";
import CSVReader from "./components/CSVReader";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <Container className="CarbTrackerDiv" fluid>
        <h1 className="trackerh1"> Grade Calculator </h1>
        {/* <FileSelector /> */}
        <CSVReader setData={setData} />
        <GradesForm data={data} />
      </Container>
    </>
  );
}

export default App;
