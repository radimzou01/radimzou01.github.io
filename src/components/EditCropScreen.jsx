import { useState } from "react";
import DatePicker from "react-datepicker";
import dateToString from "../utils/dateToString";

import "react-datepicker/dist/react-datepicker.css";


const EditCropScreen = ({ onEditCrop, crop, onHandleShowEditScreen}) => {
  const cropItemInit = {
    id: crop.id,
    name: crop.name,
    isPlanted: crop.isPlanted,
    seedDate: dateToString(crop.seedDate),
    harvestDate: dateToString(crop.harvestDate)
  }

  const [cropItem, setCropItem] = useState(cropItemInit)

  const handleName = (e) => {
    setCropItem({
      ...cropItem,
      name: e.target.value
    })
  }

  const handleIsPlanted = () => {
    setCropItem({
        ...cropItem,
        isPlanted: !cropItem.isPlanted
      })
  }

  const handleSeedDate = (date) => {
    setCropItem({
      ...cropItem,
      seedDate: dateToString(date)
    })
  }

  const handleHarvestDate = (date) => {
    setCropItem({
      ...cropItem,
      harvestDate: dateToString(date)
    })
  }

  return (
      <>
        <h3>Edit crop</h3>
        <input
          type="checkbox"
          checked={cropItem.isPlanted}
          onChange={handleIsPlanted}
        />
        <input
          type="text"
          value={cropItem.name}
          onChange={handleName}
        />
        <DatePicker
          type="date"
          selected={cropItem.seedDate}
          onChange={handleSeedDate}
          dateFormat="d.M.yyyy"
        />
        <DatePicker
          type="date"
          selected={cropItem.harvestDate}
          onChange={handleHarvestDate}
          dateFormat="d.M.yyyy"
        />
        <button onClick={() => onEditCrop(crop.id, cropItem)}>Save</button>
        <button onClick={onHandleShowEditScreen}>Cancel</button>
      </>
    )
}

export default EditCropScreen