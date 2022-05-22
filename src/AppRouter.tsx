import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Help from "./pages/Help/Help";
// import Home from "./pages/home/Home"; // lazy loading jehetu kore felsi .. tai ei vabe import kora lagbe na

// lazy loading concept.. // https://reactjs.org/docs/code-splitting.html
const Home = React.lazy(() => import("./pages/home/Home"));
const Help = React.lazy(() => import("./pages/Help/Help"));
// jokhon dorkar hobe .. tokhon load korbe .. shob shomoy load korbe na ..

type RouterProp = {
    children: React.ReactNode; // 👈️ define children prop
};

const AppRouter = (props: RouterProp) => {
    //✍ main code e :any deowa chilo na :React.FC deowa chilo
    // bole dilam .. eta functional component
    return (
        <Router>
            <div>{props.children}</div>
            {/* ekta page er data load houar thik ager muhurter loading state
                dekhanoi suspense.. */}
            <Suspense
                fallback={
                    <div>
                        <Spinner animation="border" variant="primary" />
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/help" element={<Help />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRouter;
