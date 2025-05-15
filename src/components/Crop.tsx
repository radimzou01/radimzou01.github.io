import { CropType } from "../types.ts";
import formatDate from "../utils/formatDate";

type Props = {
  crop: CropType;
  onHandleShowEditScreen: () => void;
  onHandleShowDeleteScreen: () => void;
  onGetCropId: (currentId: number) => void;
};

const Crop = ({
  crop,
  onHandleShowEditScreen,
  onHandleShowDeleteScreen,
  onGetCropId,
}: Props) => {
  const handleEditCrop = (currentId: number) => {
    onGetCropId(currentId);
    onHandleShowEditScreen();
  };

  const handleDeleteCrop = (currentId: number) => {
    onGetCropId(currentId);
    onHandleShowDeleteScreen();
  };

  return (
    <>
      <tr>
        <th scope="row">
          <input type="checkbox" checked={crop.isPlanted} disabled />
        </th>
        <td>{crop.name}</td>
        <td>{formatDate(crop.seededAt)}</td>
        <td>{formatDate(crop.harvestedAt)}</td>
        <td>
          <button onClick={() => handleEditCrop(crop.id)}>Edit</button>
        </td>
        <td>
          <button onClick={() => handleDeleteCrop(crop.id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default Crop;
