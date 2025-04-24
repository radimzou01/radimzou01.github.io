//import { useState } from "react";
import VegetableItem from "./VegetableItem.jsx";

const VegetableItemList = ({vegetableItems, onDeleteVegetable, onCheckVegetable, onHandleShowEditScreen, onGetVegetableItem }) => {
    return (
        <ul>
        {Object.values(vegetableItems).map((vegetableItem) => (
          <VegetableItem 
            vegetableItem={vegetableItem}
            onDeleteVegetable={onDeleteVegetable}
            onCheckVegetable={onCheckVegetable}
            onHandleShowEditScreen={onHandleShowEditScreen}
            onGetVegetableItem={onGetVegetableItem}
            key={vegetableItem.id}
          />
      ))}
        </ul>
    )
}

export default VegetableItemList