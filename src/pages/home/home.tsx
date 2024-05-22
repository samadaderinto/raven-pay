import { Header } from "../../layouts";
import { Outlet } from "react-router-dom";
import { Transact } from "../../components";
import "./home.css";


export const Home = () => {
    return (
        <div className="home">
            <Header />
            <Outlet />
            <Transact />

        </div>
    );
};
