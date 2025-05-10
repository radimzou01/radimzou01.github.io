import { useState } from "react";
import DatePicker from "react-datepicker";
import dateToString from "../utils/dateToString.tsx";

import "react-datepicker/dist/react-datepicker.css";

const EditCropScreen = ({ onEditCrop, crop, onHandleShowEditScreen }) => {
  const cropItemInit = {
    id: crop.id,
    name: crop.name,
    isPlanted: crop.isPlanted,
    seededAt: dateToString(crop.seededAt),
    harvestedAt: dateToString(crop.harvestedAt),
  };

  const [cropItem, setCropItem] = useState(cropItemInit);

  const handleName = (e) => {
    setCropItem({
      ...cropItem,
      name: e.target.value,
    });
  };

  const handleIsPlanted = () => {
    setCropItem({
      ...cropItem,
      isPlanted: !cropItem.isPlanted,
    });
  };

  const handleSeedDate = (date: Date) => {
    setCropItem({
      ...cropItem,
      seededAt: dateToString(date),
    });
  };

  const handleHarvestDate = (date: Date) => {
    setCropItem({
      ...cropItem,
      harvestedAt: dateToString(date),
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
          type="date"
          selected={cropItem.seededAt}
          onChange={handleSeedDate}
          dateFormat="d.M.yyyy"
        />
        <label>Harvest date:</label>
        <DatePicker
          type="date"
          selected={cropItem.harvestedAt}
          onChange={handleHarvestDate}
          dateFormat="d.M.yyyy"
        />
        <button type="submit">Save</button>
        <button onClick={onHandleShowEditScreen}>Cancel</button>
      </form>
    </>
  );
};

export default EditCropScreen;
