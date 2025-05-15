import { useState } from "react";
import AddCropScreen from "./components/AddCropScreen.js";
import EditCropScreen from "./components/EditCropScreen.js";
import DeleteCropScreen from "./components/DeleteCropScreen.js";
import EmptyScreen from "./components/EmptyScreen.js";
import CropList from "./components/CropList.js";
import { CropType, CropsType, Status } from "./types.js";
import "./App.css";

let idNumber = 0;
const cropsStringifyName = "crops";
const currentDate: Date = new Date();
const storedCrops: CropsType = JSON.parse(
  localStorage.getItem(cropsStringifyName) ?? "{}"
);

const getInitState = (cropsObject: CropsType): Status => {
  const cropsTotalNumber: number = Object.keys(cropsObject).length ?? 0;
  if (cropsTotalNumber > 0) {
    return Status.Inhabited;
  } else {
    return Status.Empty;
  }
};

const App = () => {
  const [crops, setCrops] = useState<CropsType>(storedCrops);
  const [processedCropId, setProcessedCropId] = useState<number>(0);
  const [status, setStatus] = useState<Status>(getInitState(crops));

  localStorage.setItem(cropsStringifyName, JSON.stringify(crops));

  const addCrop = (itemName: string): void => {
    idNumber++;

    setCrops({
      ...crops,
      [idNumber]: {
        id: idNumber,
        name: itemName,
        isPlanted: true,
        seededAt: currentDate,
        harvestedAt: currentDate,
      },
    });
    handleShowInhabitedScreen();
  };

  const editCrop = (idNumber: number, changes: CropType) => {
    setCrops({
      ...crops,
      [idNumber]: {
        ...crops[idNumber],
        ...changes,
      },
    });
    handleShowInhabitedScreen();
  };

  const deleteCrop = (deletedCropId: number) => {
    const tempItems = { ...crops };
    delete tempItems[deletedCropId];

    setCrops(tempItems);

    // TODO: KONZULTACE
    if (Object.keys(crops).length === 1) {
      handleShowEmptyScreen();
    } else {
      handleShowInhabitedScreen();
    }
  };

  const handleShowAddScreen = () => {
    setStatus(Status.Creating);
  };

  const handleShowEditScreen = () => {
    setStatus(Status.Editing);
  };

  const handleShowDeleteScreen = () => {
    setStatus(Status.Deleting);
  };

  const handleShowInhabitedScreen = () => {
    setStatus(Status.Inhabited);
  };

  const handleShowEmptyScreen = () => {
    setStatus(Status.Empty);
  };

  const getCropId = (currentId: number) => {
    setProcessedCropId(currentId);
  };

  const processedCrop = crops[processedCropId];

  const cropCrud = () => {
    switch (status) {
      case Status.Empty:
        return <EmptyScreen onHandleShowAddScreen={handleShowAddScreen} />;
      case Status.Creating:
        return <AddCropScreen onAddCrop={addCrop} />;
      case Status.Inhabited:
        return (
          <CropList
            crops={crops}
            onHandleShowAddScreen={handleShowAddScreen}
            onHandleShowEditScreen={handleShowEditScreen}
            onHandleShowDeleteScreen={handleShowDeleteScreen}
            onGetCropId={getCropId}
          />
        );
      case Status.Editing:
        return (
          <EditCropScreen
            onEditCrop={editCrop}
            crop={processedCrop}
            onHandleShowEditScreen={handleShowEditScreen}
          />
        );
      case Status.Deleting:
        return (
          <DeleteCropScreen
            onDeleteCrop={deleteCrop}
            crop={processedCrop}
            onHandleShowInhabitedScreen={handleShowInhabitedScreen}
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

// moment - práce s datumem - odčítání, formátování datumu, času
// ---
// přidat select box - předvýběr typu plodiny
// -- dle typu plodiny se přičte i předpokládaný datum sklizně
// stahování počasí dle geolokace
// jazykové mutace dle browseru
// BE ?

// ----

// top wanted
// flex direction
// justify content
// align items

// grid

//---
// cancel button do Add componenty
// udělat komponenty pro buttony
// validace na form
