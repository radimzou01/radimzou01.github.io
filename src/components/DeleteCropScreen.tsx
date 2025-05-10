import { Crop as CropType } from "../App";

type Props = {
  crop: CropType;
  onDeleteCrop: (deletedCropId: number) => void;
  onHandleShowDeleteScreen: () => void;
};

const DeleteCropScreen = ({
  crop,
  onDeleteCrop,
  onHandleShowDeleteScreen,
}: Props) => {
  return (
    <>
      <h3>Delete crop</h3>
      <p>Do you really want to delete this crop item?</p>
      <button onClick={() => onDeleteCrop(crop.id)}>Delete</button>
      <button onClick={onHandleShowDeleteScreen}>Cancel</button>
    </>
  );
};

export default DeleteCropScreen;
