import { useState } from "react";
import { buttonStyleId } from "../constants/cssId";

type Props = {
  onAddCrop: (itemName: string) => void;
};

const AddCropScreen = ({ onAddCrop }: Props) => {
  const [cropName, setCropName] = useState("");

  const handleAddCrop = (itemName: string) => {
    onAddCrop(itemName);
    setCropName("");
  };

  return (
    <>
      <h3>Add crop</h3>
      <form onSubmit={() => handleAddCrop(cropName)}>
        <p>
          <label>
            Crop name:
            <input
              placeholder="spring carrot"
              type="text"
              value={cropName}
              onChange={(e) => {
                setCropName(e.target.value);
              }}
            />
          </label>
        </p>
        <button type="submit" id={`${buttonStyleId.primary}`}>
          Add
        </button>
      </form>
    </>
  );
};

export default AddCropScreen;
