import { useState } from "react";
import AddVegetableScreen from "./components/AddVegetableScreen.jsx";
import EditVegetableScreen from "./components/EditVegetableScreen.jsx";
import VegetableItemList from "./components/VegetableItemList.jsx";
import AddVegetableButton from "./components/AddVegetableButton.jsx";
import "./App.css";

let idNumber = 0
const App = () => {
  const [vegetableItems, setVegetableItems] = useState({});
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const addVegetable = (itemName) => {
    idNumber++
    setVegetableItems({
      ...vegetableItems,
      [idNumber]: {
        id: idNumber,
        name: itemName,
        isPlanted: true,
      },
    },
  );
  handleShowAddScreen()
  };

  const editVegetableName = (idNumber, vegetableItemName) => {
    setVegetableItems(
           {
            ...vegetableItems,
            [idNumber]: {
              ...vegetableItems[idNumber],
              name: vegetableItemName
            }
          }
    );
  };
  
  const checkVegetable = (itemId) => {
    setVegetableItems({
      ...vegetableItems,
        [itemId]: {
          ...vegetableItems[itemId],
          isPlanted: !vegetableItems[itemId].isPlanted,
        },
      },
    );
  };

  const deleteVegetable = (deletedVegetableId) => {
    const tempItems = {...vegetableItems}
    delete tempItems[deletedVegetableId]

    setVegetableItems(
      tempItems
    )
  };

  const handleShowAddScreen = () => {
    setIsCreating(!isCreating)
  }

  const handleShowEditScreen = () => {
    setIsEditing(!isEditing)
  }

  const getVegetableItem = (currentId) => {
    return vegetableItems[currentId]
  }


  const mainPageContent = () => {
    return (
      <>
        <AddVegetableButton onClick={handleShowAddScreen}/>
        <VegetableItemList
          vegetableItems={vegetableItems}
          onDeleteVegetable={deleteVegetable}
          onCheckVegetable={checkVegetable}
          onHandleShowEditScreen={handleShowEditScreen}
          onGetVegetableItem={getVegetableItem}
        />
      </>
    )
  }

  return (
    <>
      <h1>Plantery space</h1>
      { isCreating
        ? (<AddVegetableScreen onAddVegetable={addVegetable} />)
        : ( isEditing ? (<EditVegetableScreen onEditVegetableName={editVegetableName} vegetableItem={/*object from getVegetableItem*/}/>) : (mainPageContent()))}
    </>
  );
};

export default App;

// spread operator na funkci
// pořadí spreadu a itemu v objektu ... nejdřív původní a pak, co přepisuji

// opravit ssh config
// opravit bugy
// přepsat zápis
// udělat komponenty
// nechat CSS
// typescript
// editační rozhraní, které překreslí tabulku ... na základě isEditing

// map je drahá operace ... radši používat dictionary

// ===== 16.4.

// napojit fork na jiný repo
// opravit bugy, vyčistit, přejmenovat
// CRUD layouty
// localStorage

// CSS flexbox
