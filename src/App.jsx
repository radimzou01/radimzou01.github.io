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
    const formattedDate = new Date().toLocaleString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })
    // const currentDate = new Date()
    setCrops({
      ...crops,
      [idNumber]: {
        id: idNumber,
        name: itemName,
        isPlanted: true,
        seedDate: String(formattedDate),
        harvestDate: String(formattedDate)
      }})
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

// ===== 25.4.
// Vyřešit datum
// localStorage
// Typescript
// form náležitosti
// CSS flexbox
// tabulka
