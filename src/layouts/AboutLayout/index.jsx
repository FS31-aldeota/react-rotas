import { Outlet } from "react-router-dom";

const AboutLayout = () => {
    return (
        <>
            <ul>
                <li>
                    <a href="/about">Missão</a>
                </li>
                <li>
                    <a href="/about/vision">Visão</a>
                </li>
                <li>
                    <a href="/about/principles">Valores</a>
                </li>
            </ul>
            <Outlet />
        </>
    );
}

export default AboutLayout;