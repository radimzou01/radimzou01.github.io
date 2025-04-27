import { useState } from "react";
import AddCropScreen from "./components/AddCropScreen.jsx";
import EditCropScreen from "./components/EditCropScreen.jsx";
import CropList from "./components/CropList.jsx";
import AddCropButton from "./components/AddCropButton.jsx";
import "./App.css";

let idNumber = 0
const App = () => {
  const [crops, setCrops] = useState({});
  const [processedCropId, setProcessedCropId] = useState(undefined)
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const addCrop = (itemName) => {
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

  const editCrop = (idNumber, changes) => {
    setCrops(
           {
            ...crops,
            [idNumber]: {
              ...crops[idNumber],
              ...changes
            }
          }
    );
    if (!changes.hasOwnProperty('isPlanted')) {
      handleShowEditScreen()
    }
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
  
  const cropTable = () => {
    return (
      <>
        <AddCropButton onClick={handleShowAddScreen}/>
        <CropList
          crops={crops}
          onDeleteCrop={deleteCrop}
          onEditCrop={editCrop}
          onHandleShowEditScreen={handleShowEditScreen}
          onGetCropId={getCropId}
        />
      </>
    )
  }

  const cropCrud = () => {
    if (isCreating) {
      return (<AddCropScreen onAddCrop={addCrop} />)
    } else if (isEditing) {
      return (<EditCropScreen onEditCrop={editCrop} crop={processedCrop}/>)
    } else {
      return (cropTable())
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

// nechat CSS
// typescript

// ===== 16.4.

// localStorage
// CSS flexbox

// ===== 25.4.
// přidat propsy
// localStorage
// Typescript
// další propsy pro item ... changes přidat spreadem
// XX - ternary dlouhy nepoužívat .. .dat spiše do contentu. Ternary se používá pouze pro krátké zápisy a na první pohled jasné
// form náležitosti
// checkVegetable dát do editu
// přepsat handleEdit naming
