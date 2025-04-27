const Crop = ({crop, onDeleteCrop, onEditCrop, onHandleShowEditScreen, onGetCropId}) => {

    const handleEditCrop = (currentId) => {
        onGetCropId(currentId)
        onHandleShowEditScreen()
    }

    const handleIsPlanted = (currentId) => {
        onEditCrop(currentId, {isPlanted: !crop.isPlanted})
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={crop.isPlanted}
                onChange={() => handleIsPlanted(crop.id)}
            />
            <div>{crop.name}</div>
            <button onClick={() => handleEditCrop(crop.id)}>Edit</button>
            <button onClick={() => onDeleteCrop(crop.id)}>Delete</button>
        </li>
        )
    }

export default Crop