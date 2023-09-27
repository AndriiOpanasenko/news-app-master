import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article/:id" element={<NewsDetails />} />
            </Routes>
            <Header />
            <Home />
        </>
    );
}

export default App;
