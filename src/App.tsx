import { useState } from "react";
import AddCropScreen from "./components/AddCropScreen.js";
import EditCropScreen from "./components/EditCropScreen.js";
import DeleteCropScreen from "./components/DeleteCropScreen.js";
import EmptyScreen from "./components/EmptyScreen.js";
import CropList from "./components/CropList.js";
import dateToString from "./utils/dateToString.js";
import "./App.css";

export type Crop = {
  id: number;
  name: string;
  isPlanted: boolean;
  seededAt: string;
  harvestedAt: string;
};

export type Crops = {
  [id: number]: Crop;
};

const cropsStringifyName = "crops";
const currentDate: Date = new Date();
const storedCrops: Crops = JSON.parse(
  localStorage.getItem(cropsStringifyName) || ""
);
let idNumber = 0;

const App = () => {
  const [crops, setCrops] = useState<Crops>(storedCrops);
  const [processedCropId, setProcessedCropId] = useState<number>(0);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  localStorage.setItem(cropsStringifyName, JSON.stringify(crops));

  const addCrop = (itemName: string): void => {
    idNumber++;

    setCrops({
      ...crops,
      [idNumber]: {
        id: idNumber,
        name: itemName,
        isPlanted: true,
        seededAt: dateToString(currentDate),
        harvestedAt: dateToString(currentDate),
      },
    });
    handleShowAddScreen();
  };

  const editCrop = (idNumber: number, changes: Crop) => {
    setCrops({
      ...crops,
      [idNumber]: {
        ...crops[idNumber],
        ...changes,
      },
    });
    handleShowEditScreen();
  };

  const deleteCrop = (deletedCropId: number) => {
    const tempItems = { ...crops };
    delete tempItems[deletedCropId];

    setCrops(tempItems);
    handleShowDeleteScreen();
  };

  const handleShowAddScreen = () => {
    setIsCreating(!isCreating);
  };

  const handleShowEditScreen = () => {
    setIsEditing(!isEditing);
  };

  const handleShowDeleteScreen = () => {
    setIsDeleting(!isDeleting);
  };

  const getCropId = (currentId: number) => {
    setProcessedCropId(currentId);
  };

  const processedCrop = crops[processedCropId];
  const cropsTotalNumber = Object.keys(crops).length;

  const cropCrud = () => {
    if (isCreating) {
      return <AddCropScreen onAddCrop={addCrop} />;
    } else if (isEditing) {
      return (
        <EditCropScreen
          onEditCrop={editCrop}
          crop={processedCrop}
          onHandleShowEditScreen={handleShowEditScreen}
        />
      );
    } else if (isDeleting) {
      return (
        <DeleteCropScreen
          onDeleteCrop={deleteCrop}
          crop={processedCrop}
          onHandleShowDeleteScreen={handleShowDeleteScreen}
        />
      );
    } else if (cropsTotalNumber === 0) {
      return <EmptyScreen onHandleShowAddScreen={handleShowAddScreen} />;
    } else {
      return (
        <CropList
          crops={crops}
          onHandleShowAddScreen={handleShowAddScreen}
          onHandleShowEditScreen={handleShowEditScreen}
          onHandleShowDeleteScreen={handleShowDeleteScreen}
          onGetCropId={getCropId}
        />
      );
    }
  };

  return (
    <>
      <h1>Plantery space</h1>
      {cropCrud()}
    </>
  );
};

export default App;

// ===== 25.4.
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

// ----

// status do switche a do jednoho statu
