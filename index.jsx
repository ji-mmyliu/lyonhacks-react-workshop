import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { Tasks } from "./components/tasks";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tasks />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
