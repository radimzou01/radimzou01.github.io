const Crop = ({crop, onDeleteCrop, onCheckCrop, onHandleShowEditScreen, onGetCropId}) => {

    const handleEdit = (currentId) => {
        onGetCropId(currentId)
        onHandleShowEditScreen()
    }
      
    return (
        <li>
            <input
                type="checkbox"
                checked={crop.isPlanted}
                onChange={() => onCheckCrop(crop.id)}
            />
            <div>{crop.name}</div>
            <button onClick={() => handleEdit(crop.id)}>Edit</button>
            <button onClick={() => onDeleteCrop(crop.id)}>Delete</button>
        </li>
        )
    }

export default Crop