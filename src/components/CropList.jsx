import Crop from "./Crop.jsx";

const cropsStringifyName = 'crops'

const CropList = ({crops, onHandleShowEditScreen, onHandleShowDeleteScreen, onGetCropId }) => {

  const storedCrops = JSON.parse(localStorage.getItem(cropsStringifyName)) || crops
  localStorage.setItem(cropsStringifyName, JSON.stringify(crops))

    return (
        <ul>
        {Object.values(storedCrops).map((crop) => (
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