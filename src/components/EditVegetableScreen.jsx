import { useState } from "react";

const EditVegetableScreen = ({ onEditVegetableName, vegetableItem}) => {
    const [itemName, setItemName] = useState(vegetableItem.name)
 
    return (
      <>
        <h3>Edit vegetable</h3>
        <input
            type="text"
            value={itemName}
            onChange={(e) => {setItemName(e.target.value)
        }}
        />
        <button onClick={() => onEditVegetableName(vegetableItem.id, itemName)}>Save</button>
      </>
    )
}

export default EditVegetableScreen