import { useState } from "react";

const AddVegetableInput = ({ onAddVegetable}) => {
    const [vegetableName, setVegetableName] = useState("");

    const handleAddVegetable = (itemName) => {
      onAddVegetable(itemName)
      setVegetableName("");
    }
  
    return (
      <>
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

export default AddVegetableInput