import { useState } from "react";
import DatePicker from "react-datepicker";
import dateToString from "../utils/dateToString";

import "react-datepicker/dist/react-datepicker.css";


const EditCropScreen = ({ onEditCrop, crop, onHandleShowEditScreen}) => {
  const cropItemInit = {
    id: crop.id,
    name: crop.name,
    isPlanted: crop.isPlanted,
    seededAt: dateToString(crop.seededAt),
    harvestedAt: dateToString(crop.harvestedAt)
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
      seededAt: dateToString(date)
    })
  }

  const handleHarvestDate = (date) => {
    setCropItem({
      ...cropItem,
      harvestedAt: dateToString(date)
    })
  }

  return (
      <>
        <h3>Edit crop</h3>
        <form onSubmit={() => onEditCrop(crop.id, cropItem)}>
          <p>
            <label>
              Is crop planted?
              <input
                type="checkbox"
                checked={cropItem.isPlanted}
                onChange={handleIsPlanted}
              />
            </label>
          </p>
          <p>
            <label>
              Crop name: 
              <input
                type="text"
                value={cropItem.name}
                onChange={handleName}
              />
            </label>
          </p>
          <p>
            <label>
              Seed date:
              <DatePicker
                type="date"
                selected={cropItem.seededAt}
                onChange={handleSeedDate}
                dateFormat="d.M.yyyy"
              />
            </label>
          </p>
          <p>
            <label>
              Harvest date:
              <DatePicker
                type="date"
                selected={cropItem.harvestedAt}
                onChange={handleHarvestDate}
                dateFormat="d.M.yyyy"
              />
            </label>
          </p>
          <button type="submit">Save</button>
          <button onClick={onHandleShowEditScreen}>Cancel</button>
        </form>
      </>
    )
}

export default EditCropScreen