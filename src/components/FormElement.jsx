import "../css/formElement.css";

const FormElement = ({ forms, setForms, id, carbs, amount }) => {

  return (
    <div className="FormElement">
      <div className="inputDiv" id="foodDiv">
        <select id={`${id}food`} className="food">
          <option value="0"> </option>
          <option value="15">Apple</option>
          <option value="20">Rice</option>
          <option value="25">Banana</option>
          <option value="30">Orange</option>
          <option value="20">Bread</option>
        </select>
      </div>
      <div className="inputDiv" id="weightDiv">
        <input
          id={`${id}weight`}
          type="text"
          className="weight"
          defaultValue={amount}
        />
      </div>
      <div className="inputDiv" id="carbsDiv">
        <p id={`${id}carbs`} className="carbs">
          {carbs}
        </p>
      </div>
    </div>
  );
};

export default FormElement;
