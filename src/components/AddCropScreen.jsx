import { useState } from "react";


const AddCropScreen = ({ onAddCrop }) => {
    const [cropName, setCropName] = useState("");

    const handleAddCrop = (itemName) => {
      onAddCrop(itemName)
      setCropName("")
    }
  
    return (
      <>
        <h3>Add crop</h3>
        <form onSubmit={() => handleAddCrop(cropName)}>
          <p>
            <label>Crop name:
              <input
                placeholder="spring carrot"
                type="text"
                value={cropName}
                onChange={(e) => {
                  setCropName(e.target.value);
                }}
              />
            </label>
          </p>
          <button type="submit">Add</button>
        </form>
      </>
    )
}

export default AddCropScreen