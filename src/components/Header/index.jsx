import "./index.css";

const Header = () => {
    return (
        <header>
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/about">Sobre</a>
                    </li>
                    <li>
                        <a href="/contact">Contato</a>
                    </li>
                </ul>
            </nav>    
        </header>
    );
}

export default Header;