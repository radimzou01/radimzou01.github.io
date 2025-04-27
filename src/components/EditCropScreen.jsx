import { useState } from "react";

const EditCropScreen = ({ onEditCrop, crop}) => {
    const [itemName, setItemName] = useState(crop.name)
 
    return (
      <>
        <h3>Edit crop</h3>
        <input
            type="text"
            value={itemName}
            onChange={(e) => {setItemName(e.target.value)
        }}
        />
        <button onClick={() => onEditCrop(crop.id, {name: itemName})}>Save</button>
      </>
    )
}

export default EditCropScreen