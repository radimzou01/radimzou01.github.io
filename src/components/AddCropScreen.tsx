import { useState } from "react";
import Button from "./Button/Button.tsx";

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
        <Button variant="button-primary" text="Add" type="submit" />
      </form>
    </>
  );
};

export default AddCropScreen;
