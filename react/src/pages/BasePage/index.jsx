import Header from "../../components/Header";
import Container from "../../components/Container/index";
import FavoritesProvider from "../../context/Favorites";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

function BasePage() {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    )
}  

export default BasePage;