const VegetableItem = ({vegetableItem, onDeleteVegetable, onCheckVegetable, onHandleShowEditScreen, onGetVegetableItemId}) => {

    const handleEdit = (currentId) => {
        onGetVegetableItemId(currentId)
        onHandleShowEditScreen()
    }
      
    return (
        <li>
            <input
                type="checkbox"
                checked={vegetableItem.isPlanted}
                onChange={() => onCheckVegetable(vegetableItem.id)}
            />
            <div>{vegetableItem.name}</div>
            <button onClick={() => handleEdit(vegetableItem.id)}>Edit</button>
            <button onClick={() => onDeleteVegetable(vegetableItem.id)}>Delete</button>
        </li>
        )
    }

export default VegetableItem