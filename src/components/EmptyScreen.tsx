import AddCropButton from "./AddCropButton.js";

type Props = {
  onHandleShowAddScreen: () => void;
};

const EmptyScreen = ({ onHandleShowAddScreen }: Props) => {
  return (
    <>
      <AddCropButton onClick={onHandleShowAddScreen} />
      <p>Just add some crop, plantery-bro!</p>
    </>
  );
};

export default EmptyScreen;
