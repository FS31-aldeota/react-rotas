import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import PageLayout from "../layouts/PageLayout";
import AboutLayout from "../layouts/AboutLayout";
import Mission from "../pages/About/partials/Mission";
import Vision from "../pages/About/partials/Vision";
import Principles from "../pages/About/partials/Principles";
// import * as RComponents from "react-router-dom";
// import * as FC from "../components/formComponents";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path={"/about"} element={<AboutLayout />}>
                            <Route index element={<Mission />} />
                            <Route path={"/about/vision"} element={<Vision />} />
                            <Route path={"/about/principles"} element={<Principles />} />
                        </Route>
                        <Route path={"/contact"} element={<Contact />} />
                    </Route>
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;