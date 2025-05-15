import { CropType } from "../types.ts";

type Props = {
  crop: CropType;
  onDeleteCrop: (deletedCropId: number) => void;
  onHandleShowDeleteScreen: () => void;
  // onHandleTableScreen: () => void;
};

const DeleteCropScreen = ({
  crop,
  onDeleteCrop,
  onHandleShowDeleteScreen,
}: // onHandleTableScreen,
Props) => {
  return (
    <>
      <h3>Delete crop</h3>
      <p>Do you really want to delete this crop item?</p>
      <button onClick={() => onDeleteCrop(crop.id)}>Delete</button>
      <button onClick={onHandleShowDeleteScreen}>Cancel</button>
      {/* <button onClick={onHandleTableScreen}>Cancel</button> */}
    </>
  );
};

export default DeleteCropScreen;
