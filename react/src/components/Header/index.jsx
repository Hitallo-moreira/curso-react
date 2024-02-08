import { Link } from "react-router-dom";
import Logo from './logo.png';
import styles from './header.module.css';
import HeaderLink from "./HeaderLink/HeaderLink";

function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link to="./">
                    <img src={Logo} alt="Logo" />
                </Link>
                <nav>
                    <HeaderLink url="./">
                        Home
                    </HeaderLink>
                    <HeaderLink url="./Favoritos">
                        Favoritos
                    </HeaderLink>
                </nav>
            </header>
        </>
    )
}

export default Header;