import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showSuccessMessage = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000
    });
}

const showFailureMessage = (message) => {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000
    });
}

const toastNotifications = {
    showFailureMessage,
    showSuccessMessage
}

export default toastNotifications;