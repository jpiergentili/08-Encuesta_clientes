import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav"

function App() {
    return  <>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />

                    {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </>
}

export default App