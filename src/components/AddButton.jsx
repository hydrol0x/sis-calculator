import image from "../addicon.png";

const AddButton = ({ addForm }) => {
  const handleClick = (e) => {
    e.preventDefault();
    addForm();
  };
  // return <img src={image} onClick={handleClick} alt="add input" />;
};

export default AddButton;
