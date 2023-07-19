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
            console.log(error);
            toastNotifications.showFailureMessage(error?.message);
            return false;
        });
}

export default postItem;