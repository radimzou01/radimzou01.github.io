const Crop = ({crop, onDeleteCrop, onHandleShowEditScreen, onGetCropId}) => {

    const handleEditCrop = (currentId) => {
        onGetCropId(currentId)
        onHandleShowEditScreen()
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={crop.isPlanted}
                disabled
            />
            <div>{crop.name}</div>
            <div>{crop.seedDate}</div>
            <div>{crop.harvestDate}</div>
            <button onClick={() => handleEditCrop(crop.id)}>Edit</button>
            <button onClick={() => onDeleteCrop(crop.id)}>Delete</button>
        </li>
        )
    }

export default Crop