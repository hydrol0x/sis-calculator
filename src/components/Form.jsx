import { useState, useEffect } from "react";
import FormElement from "./FormElement";
import AddButton from "./AddButton";
import { Row, Col, Container } from "react-bootstrap";
import { parseAssignments } from "../scripts/parseData";

// import "../css/form.css";

const GradesForm = ({ data }) => {
  const mockData = [
    {
      id: 1,
      assignmentName: "Assignment 1",
      points: 0,
      totalPoints: 0,
      category: ["Writing", 10],
    },
    {
      id: 2,
      assignmentName: "Assignment 1",
      points: 0,
      totalPoints: 0,
      category: ["Writing", 10],
    },
    {
      id: 3,
      assignmentName: "Assignment 1",
      points: 0,
      totalPoints: 0,
      category: ["Writing", 10],
    },
    {
      id: 0,
      assignmentName: "Assignment 1",
      points: 0,
      totalPoints: 0,
      category: ["Writing", 10],
    },
  ];

  const [forms, setForms] = useState(mockData);

  useEffect(() => {
    if (data && data.length > 0) {
      const parsedData = parseAssignments(data);
      setForms(parsedData);
    }
  }, [data]);

  const addForm = () => {
    setForms([
      ...forms,
      {
        id: forms.length,
        assignmentName: "Assignment 1",
        points: 0,
        totalPoints: 0,
        category: ["Writing", 10],
      },
    ]);
  };

  const onClick = (e) => {
    e.preventDefault();
    console.log(data[0]);
    console.log("test");
    const parsedData = parseAssignments(data);
    console.log(parsedData);
  };

  // const handleSubmit = (e) => {
  //   // display form vals
  //   e.preventDefault();
  //   let total_carbs = 0;
  //   console.log(forms);
  //   forms.map((form) => {
  //     const carb = parseInt(e.target[form.id + "food"].value);
  //     const amount = parseInt(e.target[form.id + "weight"].value);
  //     const carbs = carb * amount;
  //     total_carbs += carbs;
  //     form.carbs = carbs;
  //   });
  //   setForms(forms);
  //   setTotalCarbs(total_carbs);
  //   };

  return (
    <Container className="pt-5">
      <Row className="text-center">
        <Col>
          <h1>Assignment</h1>
        </Col>
        <Col>
          <h1>Grade</h1>
        </Col>
        <Col>
          <h1>Category</h1>
        </Col>
      </Row>
      <Row>
        <form>
          {Object.keys(forms).map((key, index) => {
            const val = forms[key];
            return <FormElement {...val} />;
          })}
        </form>
      </Row>
      <Row>
        <AddButton addForm={addForm} />
      </Row>
      <p>{data[0]}</p>
      <button onClick={onClick}>test</button>
    </Container>
  );
};

export default GradesForm;
