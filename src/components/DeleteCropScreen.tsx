import { CropType } from "../types.ts";
import { buttonStyleId } from "../constants/cssId";

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
      <button
        onClick={() => onDeleteCrop(crop.id)}
        id={`${buttonStyleId.delete}`}
      >
        Delete
      </button>
      <button
        onClick={onHandleShowInhabitedScreen}
        id={`${buttonStyleId.secondary}`}
      >
        Cancel
      </button>
    </>
  );
};

export default DeleteCropScreen;
