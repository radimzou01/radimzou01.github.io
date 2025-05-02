import Crop from "./Crop.jsx";

const CropList = ({crops, onHandleShowEditScreen, onHandleShowDeleteScreen, onGetCropId }) => {
    return (
        <ul>
        {Object.values(crops).map((crop) => (
          <Crop
            crop={crop}
            onHandleShowEditScreen={onHandleShowEditScreen}
            onHandleShowDeleteScreen={onHandleShowDeleteScreen}
            onGetCropId={onGetCropId}
            key={crop.id}
          />
      ))}
        </ul>
    )
}

export default CropList