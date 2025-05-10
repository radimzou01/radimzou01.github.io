import moment from "moment";

const formatDate = (date: Date): string => {
  return moment(date).format("D.M.YYYY");
};

export default formatDate;
