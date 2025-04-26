import Crop from "./Crop.jsx";

const CropList = ({crops, onDeleteCrop, onCheckCrop, onHandleShowEditScreen, onGetCropId }) => {
    return (
        <ul>
        {Object.values(crops).map((crop) => (
          <Crop 
          crop={crop}
          onDeleteCrop={onDeleteCrop}
          onCheckCrop={onCheckCrop}
            onHandleShowEditScreen={onHandleShowEditScreen}
            onGetCropId={onGetCropId}
            key={crop.id}
          />
      ))}
        </ul>
    )
}

export default CropList