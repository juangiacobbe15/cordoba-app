import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage, NotFoundPage } from "./pages";

export const CordobaApp = () => {
    return (
        <main className="main-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}