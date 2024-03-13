import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
    return (
        <div>
            <h1>This is our MainLayout section</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;