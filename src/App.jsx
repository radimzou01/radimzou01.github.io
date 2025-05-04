import { useState, useEffect } from "react";
import AddCropScreen from "./components/AddCropScreen.jsx";
import EditCropScreen from "./components/EditCropScreen.jsx";
import DeleteCropScreen from "./components/DeleteCropScreen.jsx";
import AddCropButton from "./components/AddCropButton.jsx";
import EmptyScreen from "./components/EmptyScreen.jsx";
import CropList from "./components/CropList.jsx";
import dateToString from "./utils/dateToString.jsx";
import "./App.css";

const cropsStringifyName = 'crops'
const currentDate = new Date()
let storedCrops = {}
let idNumber = 0

const App = () => {
  const [crops, setCrops] = useState(storedCrops);
  const [processedCropId, setProcessedCropId] = useState(undefined)
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    storedCrops = JSON.parse(localStorage.getItem(cropsStringifyName))
    localStorage.setItem(cropsStringifyName, JSON.stringify(crops))
  }, [crops])

  const addCrop = (itemName) => {
    idNumber++

    setCrops({
      ...crops,
      [idNumber]: {
        id: idNumber,
        name: itemName,
        isPlanted: true,
        seededAt: dateToString(currentDate),
        harvestedAt: dateToString(currentDate)
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
    handleShowEditScreen()
  };
  
  const deleteCrop = (deletedCropId) => {
    const tempItems = {...crops}
    delete tempItems[deletedCropId]

    setCrops(tempItems)
    handleShowDeleteScreen()
  };

  const handleShowAddScreen = () => {
    setIsCreating(!isCreating)
  }

  const handleShowEditScreen = () => {
    setIsEditing(!isEditing)
  }

  const handleShowDeleteScreen = () => {
    setIsDeleting(!isDeleting)
  }

  const getCropId = (currentId) => {
    setProcessedCropId(currentId)
  }

  const processedCrop = crops[processedCropId]
  const cropsTotalNumber = Object.keys(crops).length
  
  const cropCrud = () => {
    if (isCreating) {
      return (<AddCropScreen onAddCrop={addCrop} />)
    } else if (isEditing) {
      return (<EditCropScreen onEditCrop={editCrop} crop={processedCrop} onHandleShowEditScreen={handleShowEditScreen} />)
    } else if (isDeleting) {
      return (<DeleteCropScreen onDeleteCrop={deleteCrop} crop={processedCrop} onHandleShowDeleteScreen={handleShowDeleteScreen} />)
    } else if (cropsTotalNumber === 0) {
      return (<EmptyScreen onHandleShowAddScreen={handleShowAddScreen}/>)
    } else {
      return (
        <CropList
          crops={crops}
          onHandleShowAddScreen={handleShowAddScreen}
          onHandleShowEditScreen={handleShowEditScreen}
          onHandleShowDeleteScreen={handleShowDeleteScreen}
          onGetCropId={getCropId}
        />)
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
// tabulka
// Typescript
// CSS flexbox

// ----

// moment - práce s datumem - odčítání, formátování datumu, času

// ---
// přidat select box - předvýběr typu plodiny
// -- dle typu plodiny se přičte i předpokládaný datum sklizně
// stahování počasí dle geolokace
// jazykové mutace dle browseru
// BE ?


