import Crop from "./Crop.jsx";
import AddCropButton from "./AddCropButton.jsx"

const CropList = ({crops, onHandleShowAddScreen, onHandleShowEditScreen, onHandleShowDeleteScreen, onGetCropId }) => {

    return (
      <>
        <AddCropButton onClick={onHandleShowAddScreen}/>
        <table>
          <thead>
            <tr>
              <th scope="col">Planted</th>
              <th scope="col">Crop name</th>
              <th scope="col">Seed date</th>
              <th scope="col">Harvest date</th>
            </tr>
          </thead>
          <tbody>
          {Object.values(crops).map((crop) => (
            <Crop
              crop={crop}
              onHandleShowEditScreen={onHandleShowEditScreen}
              onHandleShowDeleteScreen={onHandleShowDeleteScreen}
              onGetCropId={onGetCropId}
              key={crop.id}
            />
            ))}
          </tbody>
        </table>
      </>
    )
}

export default CropList