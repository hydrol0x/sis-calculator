// import "../css/formElement.css";
import { Row, Col, Container, Form } from "react-bootstrap";

const FormElement = ({ id, category, points, assignmentName, totalPoints }) => {
  return (
    <Container className="FormElement py-1">
      <Row className="justify-content-md-center">
        <Col className="d-flex justify-content-center">
          <div className="inputDiv" id="foodDiv">
            {assignmentName}
          </div>
        </Col>

        <Col className="d-flex justify-content-center">
          <input
            id={`${id}weight`}
            type="text"
            className="weight"
            defaultValue={points}
          />
          <p>/ {totalPoints}</p>
        </Col>
        <Col className="d-flex justify-content-center">
          <div className="inputDiv" id="carbsDiv">
            <p id={`${id}carbs`} className="carbs">
              {category[0]} - {category[1]}%
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormElement;
