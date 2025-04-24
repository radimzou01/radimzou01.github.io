import { useState } from "react";

const AddVegetableScreen = ({ onAddVegetable}) => {
    const [vegetableName, setVegetableName] = useState("");

    const handleAddVegetable = (itemName) => {
      onAddVegetable(itemName)
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
        <button onClick={() => handleAddVegetable(vegetableName)}>Add</button>
      </>
    )
}

export default AddVegetableScreen