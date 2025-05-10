import AddCropButton from "./AddCropButton.js";

const EmptyScreen = ({ onHandleShowAddScreen }) => {
  return (
    <>
      <AddCropButton onClick={onHandleShowAddScreen} />
      <p>Just add some crop, plantery-bro!</p>
    </>
  );
};

export default EmptyScreen;
