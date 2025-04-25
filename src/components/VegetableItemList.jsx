//import { useState } from "react";
import VegetableItem from "./VegetableItem.jsx";

const VegetableItemList = ({vegetableItems, onDeleteVegetable, onCheckVegetable, onHandleShowEditScreen, onGetVegetableItemId }) => {
    return (
        <ul>
        {Object.values(vegetableItems).map((vegetableItem) => (
          <VegetableItem 
            vegetableItem={vegetableItem}
            onDeleteVegetable={onDeleteVegetable}
            onCheckVegetable={onCheckVegetable}
            onHandleShowEditScreen={onHandleShowEditScreen}
            onGetVegetableItemId={onGetVegetableItemId}
            key={vegetableItem.id}
          />
      ))}
        </ul>
    )
}

export default VegetableItemList