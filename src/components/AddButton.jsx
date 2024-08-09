import image from "../addicon.png";

const CreateButton = ({ addForm }) => {
  const handleClick = (e) => {
    e.preventDefault();
    addForm();
  };
  return <img src={image} onClick={handleClick} alt="add input" />;
};

export default CreateButton;
