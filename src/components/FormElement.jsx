import "../css/formElement.css";

const FormElement = ({ id, category, points, assignmentName, totalPoints }) => {

  return (
    <div className="FormElement">
      <div className="inputDiv" id="foodDiv">
        { assignmentName }
      </div>
      <div className="inputDiv" id="weightDiv">
        <input
          id={`${id}weight`}
          type="text"
          className="weight"
          defaultValue={points}
        />
        <p>
          / {totalPoints}
        </p>
      </div>
      <div className="inputDiv" id="carbsDiv">
        <p id={`${id}carbs`} className="carbs">
          {category[0]} - {category[1]}%
        </p>
      </div>
    </div>
  );
};

export default FormElement;
