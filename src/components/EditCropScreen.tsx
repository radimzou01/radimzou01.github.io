import { useState, ChangeEvent } from "react";
import DatePicker from "react-datepicker";
import { CropType, DatepickerType } from "../types.ts";
import Button from "./Button/Button.tsx";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  crop: CropType;
  onEditCrop: (idNumber: number, changes: CropType) => void;
  onHandleShowEditScreen: () => void;
};

const EditCropScreen = ({
  onEditCrop,
  crop,
  onHandleShowEditScreen,
}: Props) => {
  const cropItemInit: CropType = {
    id: crop.id,
    name: crop.name,
    isPlanted: crop.isPlanted,
    seededAt: crop.seededAt,
    harvestedAt: crop.harvestedAt,
  };

  const [cropItem, setCropItem] = useState(cropItemInit);

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    setCropItem({
      ...cropItem,
      name: event.target.value,
    });
  };

  const handleIsPlanted = () => {
    setCropItem({
      ...cropItem,
      isPlanted: !cropItem.isPlanted,
    });
  };

  const handleSeedDate = (date: DatepickerType) => {
    setCropItem({
      ...cropItem,
      seededAt: date,
    });
  };

  const handleHarvestDate = (date: DatepickerType) => {
    setCropItem({
      ...cropItem,
      harvestedAt: date,
    });
  };

  return (
    <>
      <h3>Edit crop</h3>
      <form onSubmit={() => onEditCrop(crop.id, cropItem)}>
        <label>
          Is crop planted?
          <input
            type="checkbox"
            checked={cropItem.isPlanted}
            onChange={handleIsPlanted}
          />
        </label>
        <label>
          Crop name:
          <input type="text" value={cropItem.name} onChange={handleName} />
        </label>
        <label>Seed date:</label>
        <DatePicker
          selected={cropItem.seededAt}
          onChange={handleSeedDate}
          dateFormat="d.M.yyyy"
        />
        <label>Harvest date:</label>
        <DatePicker
          selected={cropItem.harvestedAt}
          onChange={handleHarvestDate}
          dateFormat="d.M.yyyy"
        />
        <Button variant="button-primary" text="Save" type="submit" />
        <Button
          variant="button-secondary"
          text="Cancel"
          onClick={onHandleShowEditScreen}
        />
      </form>
    </>
  );
};

export default EditCropScreen;
