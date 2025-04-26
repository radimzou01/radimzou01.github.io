import Crop from "./Crop.jsx";

const CropList = ({gardenItems, onDeleteCrop, onCheckCrop, onHandleShowEditScreen, onGetCropId }) => {
    return (
        <ul>
        {Object.values(gardenItems).map((gardenItem) => (
          <Crop 
          gardenItem={gardenItem}
          onDeleteCrop={onDeleteCrop}
          onCheckCrop={onCheckCrop}
            onHandleShowEditScreen={onHandleShowEditScreen}
            onGetCropId={onGetCropId}
            key={gardenItem.id}
          />
      ))}
        </ul>
    )
}

export default CropList