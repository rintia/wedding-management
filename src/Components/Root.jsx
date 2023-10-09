import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ToastContainer } from "react-toastify";



const Root = () => {
    return (
        <div className=" min-h-screen">
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;