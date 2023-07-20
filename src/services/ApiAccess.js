import axios from "axios";
import toastNotifications from "./ToastMessages";

const postItem = async (url, requestBody) => {
    axios
        .post(`${process.env.REACT_APP_API_URL}/${url}`, requestBody)
        .then((response) => {
            if (response && response?.status === 200) {
                toastNotifications.showSuccessMessage(response.data?.message);
                return true;
            }
            return false;
        })
        .catch((error) => {
            const message = error.response?.data ? error.response?.data?.message : error.message;
            toastNotifications.showFailureMessage(message);
            return false;
        });
}

export default postItem;