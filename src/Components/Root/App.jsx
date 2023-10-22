import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Banner from "../Home/Banner";

const App = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default App;