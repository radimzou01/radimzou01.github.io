import { CropType } from "../types.ts";
import formatDate from "../utils/formatDate";
import Button from "./Button/Button.tsx";

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
          <Button
            variant="button-secondary"
            text="Edit"
            onClick={() => handleEditCrop(crop.id)}
          />
        </td>
        <td>
          <Button
            variant="button-secondary"
            text="Delete"
            onClick={() => handleDeleteCrop(crop.id)}
          />
        </td>
      </tr>
    </>
  );
};

export default Crop;
