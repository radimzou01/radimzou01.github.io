import formatDate from "../utils/formatDate";

const Crop = ({crop, onHandleShowEditScreen, onHandleShowDeleteScreen, onGetCropId}) => {

    const handleEditCrop = (currentId) => {
        onGetCropId(currentId)
        onHandleShowEditScreen()
    }

    const handleDeleteCrop = (currentId) => {
        onGetCropId(currentId)
        onHandleShowDeleteScreen()
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={crop.isPlanted}
                disabled
            />
            <div>{crop.name}</div>
            <div>{formatDate(crop.seedDate)}</div>
            <div>{formatDate(crop.harvestDate)}</div>
            <button onClick={() => handleEditCrop(crop.id)}>Edit</button>
            <button onClick={() => handleDeleteCrop(crop.id)}>Delete</button>
        </li>
        )
    }

export default Crop