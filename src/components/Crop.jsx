const Crop = ({gardenItem, onDeleteCrop, onCheckCrop, onHandleShowEditScreen, onGetCropId}) => {

    const handleEdit = (currentId) => {
        onGetCropId(currentId)
        onHandleShowEditScreen()
    }
      
    return (
        <li>
            <input
                type="checkbox"
                checked={gardenItem.isPlanted}
                onChange={() => onCheckCrop(gardenItem.id)}
            />
            <div>{gardenItem.name}</div>
            <button onClick={() => handleEdit(gardenItem.id)}>Edit</button>
            <button onClick={() => onDeleteCrop(gardenItem.id)}>Delete</button>
        </li>
        )
    }

export default Crop