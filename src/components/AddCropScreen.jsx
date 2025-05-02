import { useState } from "react";

const AddCropScreen = ({ onAddCrop}) => {
    const [cropName, setCropName] = useState("");

    const handleAddCrop = (itemName) => {
      onAddCrop(itemName)
      setCropName("")
      localStorage.setItem('crop', cropName)
    }
  
    return (
      <>
        <h3>Add crop</h3>
        <input 
          type="text"
          value={cropName}
          onChange={(e) => {
            setCropName(e.target.value);
          }}
        />
        <button onClick={() => handleAddCrop(cropName)}>Add</button>
      </>
    )
}

export default AddCropScreen