import { CropType } from "../types.ts";
import Button from "./Button/Button.tsx";

type Props = {
  crop: CropType;
  onDeleteCrop: (deletedCropId: number) => void;
  onHandleShowInhabitedScreen: () => void;
};

const DeleteCropScreen = ({
  crop,
  onDeleteCrop,
  onHandleShowInhabitedScreen,
}: Props) => {
  return (
    <>
      <h3>Delete crop</h3>
      <p>Do you really want to delete this crop item?</p>
      <Button
        variant="button-delete"
        text="Delete"
        onClick={() => onDeleteCrop(crop.id)}
      />
      <Button
        variant="button-secondary"
        text="Cancel"
        onClick={onHandleShowInhabitedScreen}
      />
    </>
  );
};

export default DeleteCropScreen;
