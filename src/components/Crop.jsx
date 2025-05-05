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
        <>
            <tr>
                <th scope="row">
                    <input
                        type="checkbox"
                        checked={crop.isPlanted}
                        disabled
                    />
                </th>
                <td>{crop.name}</td>
                <td>{formatDate(crop.seededAt)}</td>
                <td>{formatDate(crop.harvestedAt)}</td>
                <td>
                    <button onClick={() => handleEditCrop(crop.id)}>Edit</button>
                </td>
                <td>
                    <button onClick={() => handleDeleteCrop(crop.id)}>Delete</button>
                </td>
            </tr>
        </>
        )
    }

export default Crop