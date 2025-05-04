import Crop from "./Crop.jsx";
import AddCropButton from "./AddCropButton.jsx"

const CropList = ({crops, handleShowAddScreen, onHandleShowEditScreen, onHandleShowDeleteScreen, onGetCropId }) => {

    return (
      <>
        <AddCropButton onClick={handleShowAddScreen}/>
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
      </>
    )
}

export default CropList