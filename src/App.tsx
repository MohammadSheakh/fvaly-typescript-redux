import React from "react";
import AppRouter from "./AppRouter";
import Header from "./components/common/Header";

function App() {
    return (
        <div className="App">
            <AppRouter>
                <Header />
            </AppRouter>
        </div>
    );
}

export default App;
