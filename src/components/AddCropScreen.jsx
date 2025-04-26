import { useState } from "react";

const AddCropScreen = ({ onAddGardenItem}) => {
    const [vegetableName, setVegetableName] = useState("");

    const handleAddGardenItem = (itemName) => {
      onAddGardenItem(itemName)
      setVegetableName("");
    }
  
    return (
      <>
        <h3>Add vegetable</h3>
        <input 
          type="text"
          value={vegetableName}
          onChange={(e) => {
            setVegetableName(e.target.value);
          }}
        />
        <button onClick={() => handleAddGardenItem(vegetableName)}>Add</button>
      </>
    )
}

export default AddCropScreen