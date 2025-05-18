import Crop from "./Crop.tsx";
import Button from "./Button/Button.tsx";
import { CropsType } from "../types.ts";

type Props = {
  crops: CropsType;
  onHandleShowAddScreen: () => void;
  onHandleShowEditScreen: () => void;
  onHandleShowDeleteScreen: () => void;
  onGetCropId: (currentId: number) => void;
};

const CropList = ({
  crops,
  onHandleShowAddScreen,
  onHandleShowEditScreen,
  onHandleShowDeleteScreen,
  onGetCropId,
}: Props) => {
  return (
    <>
      <Button
        variant="button-primary"
        text="Add Crop"
        onClick={onHandleShowAddScreen}
      />
      <table>
        <thead>
          <tr>
            <th scope="col">Planted</th>
            <th scope="col">Crop name</th>
            <th scope="col">Seed date</th>
            <th scope="col">Harvest date</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(crops).map((crop) => (
            <Crop
              crop={crop}
              onHandleShowEditScreen={onHandleShowEditScreen}
              onHandleShowDeleteScreen={onHandleShowDeleteScreen}
              onGetCropId={onGetCropId}
              key={crop.id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CropList;
