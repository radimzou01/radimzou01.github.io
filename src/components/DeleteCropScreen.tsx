import { CropType } from "../types.ts";

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
      <button onClick={() => onDeleteCrop(crop.id)}>Delete</button>
      <button onClick={onHandleShowInhabitedScreen}>Cancel</button>
    </>
  );
};

export default DeleteCropScreen;
