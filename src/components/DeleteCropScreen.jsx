import { useState } from "react";

const DeleteCropScreen = ({ onDeleteCrop, crop, onHandleShowDeleteScreen}) => {

  return (
      <>
        <h3>Delete crop</h3>
        <p>Do you really want to delete this crop item?</p>
        <button onClick={() => onDeleteCrop(crop.id)}>Delete</button>
        <button onClick={onHandleShowDeleteScreen}>Cancel</button>
      </>
    )
}

export default DeleteCropScreen