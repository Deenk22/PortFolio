import toast from "react-hot-toast";
const getStoredTheme = () => localStorage.getItem("theme");

const toastStyleDark = {
  duration: 3500,
  position: "top-center",
  style: {
    marginTop: "64px",
    margin: 0,
    padding: 16,
    fontFamily: "sans-serif",
    color: "#D9D8D5",
    backgroundColor: "#333332",
    border: "1px solid #944c4e",
  },
  iconTheme: {
    primary: "#D9D8D5",
    secondary: "#333332",
  },
};

const toastStyleLight = {
  duration: 3500,
  position: "top-center",
  style: {
    marginTop: "64px",
    margin: 0,
    padding: 16,
    fontFamily: "sans-serif",
    color: "#333332",
    backgroundColor: "#D9D8D5",
    border: "1px solid #944c4e",
  },
  iconTheme: {
    primary: "#333332",
    secondary: "#D9D8D5",
  },
};

export const successNotification = (notificationMessage) => {
  toast.success(
    notificationMessage,
    getStoredTheme() === "dark" ? toastStyleDark : toastStyleLight
  );
};
