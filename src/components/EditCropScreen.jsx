import { useState } from "react";

const EditCropScreen = ({ onEditCropName, crop}) => {
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
        <button onClick={() => onEditCropName(crop.id, itemName)}>Save</button>
      </>
    )
}

export default EditCropScreen