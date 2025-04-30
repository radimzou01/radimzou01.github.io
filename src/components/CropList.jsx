import Crop from "./Crop.jsx";

const CropList = ({crops, onDeleteCrop, onEditCrop, onHandleShowEditScreen, onGetCropId }) => {
    return (
        <ul>
        {Object.values(crops).map((crop) => (
          <Crop
            crop={crop}
            onDeleteCrop={onDeleteCrop}
            onEditCrop={onEditCrop}
            onHandleShowEditScreen={onHandleShowEditScreen}
            onGetCropId={onGetCropId}
            key={crop.id}
          />
      ))}
        </ul>
    )
}

export default CropList