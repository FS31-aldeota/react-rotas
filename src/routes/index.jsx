import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import PageLayout from "../layouts/PageLayout";
// import * as RComponents from "react-router-dom";
// import * as FC from "../components/formComponents";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path={"/about"} element={<About />} />
                        <Route path={"/contact"} element={<Contact />} />
                    </Route>
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;