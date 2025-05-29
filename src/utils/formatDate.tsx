import moment from "moment";
// import { DatepickerType } from "../App";

const formatDate = (date: any): string => {
  return moment(date).format("D.M.YYYY");
};

export default formatDate;
