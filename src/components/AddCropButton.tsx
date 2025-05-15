import { buttonStyleId } from "../constants/cssId";

const AddCropButton = ({ ...props }) => {
  return (
    <button {...props} id={`${buttonStyleId.primary}`}>
      Add crop
    </button>
  );
};

export default AddCropButton;
