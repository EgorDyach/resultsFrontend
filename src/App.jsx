import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="admin" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
