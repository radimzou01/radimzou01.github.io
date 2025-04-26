import { useState } from "react";
import AddCropScreen from "./components/AddCropScreen.jsx";
import EditCropScreen from "./components/EditCropScreen.jsx";
import CropList from "./components/CropList.jsx";
import AddCropButton from "./components/AddCropButton.jsx";
import "./App.css";

let idNumber = 0
const App = () => {
  const [crops, setCrops] = useState({});
  const [processedCropId, setProcessedCropId ] = useState(undefined)
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const addGardenItem = (itemName) => {
    idNumber++
    setCrops({
      ...crops,
      [idNumber]: {
        id: idNumber,
        name: itemName,
        isPlanted: true,
      },
    },
  );
  handleShowAddScreen()
  };

  const editCropName = (idNumber, cropName) => {
    setCrops(
           {
            ...crops,
            [idNumber]: {
              ...crops[idNumber],
              name: cropName
            }
          }
    );
    handleShowEditScreen()
  };
  
  const checkCrop = (itemId) => {
    setCrops({
      ...crops,
        [itemId]: {
          ...crops[itemId],
          isPlanted: !crops[itemId].isPlanted,
        },
      },
    );
  };

  const deleteCrop = (deletedCropId) => {
    const tempItems = {...crops}
    delete tempItems[deletedCropId]

    setCrops(tempItems)
  };

  const handleShowAddScreen = () => {
    setIsCreating(!isCreating)
  }

  const handleShowEditScreen = () => {
    setIsEditing(!isEditing)
  }

  const getCropId = (currentId) => {
    setProcessedCropId(currentId)
  }

  const processedCrop = crops[processedCropId]
  
  const gardenTable = () => {
    return (
      <>
        <AddCropButton onClick={handleShowAddScreen}/>
        <CropList
          gardenItems={crops}
          onDeleteCrop={deleteCrop}
          onCheckCrop={checkCrop}
          onHandleShowEditScreen={handleShowEditScreen}
          onGetCropId={getCropId}
        />
      </>
    )
  }

  const cropCrud = () => {
    if (isCreating) {
      return (<AddCropScreen onAddGardenItem={addGardenItem} />)
    } else if (isEditing) {
      return (<EditCropScreen onEditCropName={editCropName} crop={processedCrop}/>)
    } else {
      return (gardenTable())
    }
  }

  return (
    <>
      <h1>Plantery space</h1>
      {cropCrud()}
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

// ===== 25.4.
// přejmenovat
// přidat propsy
// localStorage
// Typescript
// další propsy pro item ... changes přidat spreadem
// XX - ternary dlouhy nepoužívat .. .dat spiše do contentu. Ternary se používá pouze pro krátké zápisy a na první pohled jasné
// form náležitosti
// checkVegetable dát do editu
// přepsat handleEdit naming
