import styles from './Favorites.module.css';
import Banner from "../../components/Banner";
import bannerImage from "../../assets/banner-favoritos.png"
import Title from "../../components/Title";
import Card from "../../components/Card";
import { useFavoriteContext } from '../../context/Favorites';

function Favorites() {
    const { favorites } = useFavoriteContext();

    return (
        <>
            <Banner image={bannerImage} />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                {favorites.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favorites;