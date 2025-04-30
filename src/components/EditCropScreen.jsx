import { useState } from "react";

const EditCropScreen = ({ onEditCrop, crop}) => {
    const [itemName, setItemName] = useState(crop.name)
    const [cropSeedDate, setCropSeedDate] = useState(new Date(crop.seedDate))

    const handleIsPlanted = (currentId) => {
      onEditCrop(currentId, {isPlanted: !crop.isPlanted})
  }


const handleDate = (date) => {
  console.log(date);
  setCropSeedDate(date)
  onEditCrop(crop.id, {seedDate: cropSeedDate})
  console.log(cropSeedDate);
}

    return (
      <>
        <h3>Edit crop</h3>
        <input
          type="checkbox"
          checked={crop.isPlanted}
          onChange={() => handleIsPlanted(crop.id)}
        />
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="date"
          value={cropSeedDate}
          onChange={(e) => handleDate(e)}
        />
        <button onClick={() => onEditCrop(crop.id, {name: itemName})}>Save</button>
      </>
    )
}

export default EditCropScreen