import Button from "./Button/Button.tsx";

type Props = {
  onHandleShowAddScreen: () => void;
};

const EmptyScreen = ({ onHandleShowAddScreen }: Props) => {
  return (
    <>
      <Button
        variant="button-primary"
        text="Add Crop"
        onClick={onHandleShowAddScreen}
      />
      <p>Just add some crop, plantery-bro!</p>
    </>
  );
};

export default EmptyScreen;
