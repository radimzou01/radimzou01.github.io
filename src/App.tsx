import { useState } from "react";
import AddCropScreen from "./components/AddCropScreen.js";
import EditCropScreen from "./components/EditCropScreen.js";
import DeleteCropScreen from "./components/DeleteCropScreen.js";
import EmptyScreen from "./components/EmptyScreen.js";
import CropList from "./components/CropList.js";
// import appStatus from "./constants/appStatus.js";
import "./App.css";

export type DatepickerType = Date | null;

export type Crop = {
  id: number;
  name: string;
  isPlanted: boolean;
  seededAt: DatepickerType;
  harvestedAt: DatepickerType;
};

export type Crops = {
  [id: number]: Crop;
};

// type Status =
//   | typeof appStatus.empty
//   | typeof appStatus.creating
//   | typeof appStatus.editing
//   | typeof appStatus.deleting
//   | typeof appStatus.inhabited;

const cropsStringifyName = "crops";
const currentDate: Date = new Date();
const storedCrops: Crops = JSON.parse(
  localStorage.getItem(cropsStringifyName) ?? "{}"
);

// const cropsTotalNumber: number = Object.keys(storedCrops).length ?? 0;

// const setInitState = (): string => {
//   if (cropsTotalNumber === 0) {
//     return appStatus.empty;
//   } else {
//     return appStatus.inhabited;
//   }
// };
// console.log(cropsTotalNumber === 0);
// console.log(cropsTotalNumber);
// console.log(setInitState());

let idNumber = 0;
console.log("mounted");

const App = () => {
  const [crops, setCrops] = useState<Crops>(storedCrops);
  const [processedCropId, setProcessedCropId] = useState<number>(0);
  // const [status, setStatus] = useState<Status>(setInitState());

  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  localStorage.setItem(cropsStringifyName, JSON.stringify(crops));
  const cropsTotalNumber = Object.keys(crops).length;

  // const handleTableScreen = () => {
  //   if (cropsTotalNumber > 0) {
  //     setStatus(appStatus.inhabited);
  //   } else {
  //     setStatus(appStatus.empty);
  //   }
  // };

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
    // handleTableScreen();
    handleShowDeleteScreen();
  };

  const handleShowAddScreen = () => {
    // setStatus(appStatus.creating);
    setIsCreating(!isCreating);
  };

  const handleShowEditScreen = () => {
    // setStatus(appStatus.editing);
    setIsEditing(!isEditing);
  };

  const handleShowDeleteScreen = () => {
    // setStatus(appStatus.deleting);
    setIsDeleting(!isDeleting);
  };

  const getCropId = (currentId: number) => {
    setProcessedCropId(currentId);
  };

  const processedCrop = crops[processedCropId];

  // const cropCrud = () => {
  //   switch (status) {
  //     case appStatus.empty:
  //       return <EmptyScreen onHandleShowAddScreen={handleShowAddScreen} />;
  //     case appStatus.creating:
  //       return <AddCropScreen onAddCrop={addCrop} />;
  //     case appStatus.inhabited:
  //       return (
  //         <CropList
  //           crops={crops}
  //           onHandleShowAddScreen={handleShowAddScreen}
  //           onHandleShowEditScreen={handleShowEditScreen}
  //           onHandleShowDeleteScreen={handleShowDeleteScreen}
  //           onGetCropId={getCropId}
  //         />
  //       );
  //     case appStatus.editing:
  //       return (
  //         <EditCropScreen
  //           onEditCrop={editCrop}
  //           crop={processedCrop}
  //           onHandleShowEditScreen={handleShowEditScreen}
  //         />
  //       );
  //     case appStatus.deleting:
  //       return (
  //         <DeleteCropScreen
  //           onDeleteCrop={deleteCrop}
  //           crop={processedCrop}
  //           onHandleShowDeleteScreen={handleShowDeleteScreen}
  //           // onHandleTableScreen={handleTableScreen}
  //         />
  //       );
  //   }
  // };

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
