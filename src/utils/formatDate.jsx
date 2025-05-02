import moment from "moment";

const formatDate = (date) => {
    return moment(date).format('D.M.YYYY')
}

export default formatDate