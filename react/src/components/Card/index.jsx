import { useFavoriteContext } from '../../context/Favorites';
import styles from './Card.module.css';
import favoriteIcon from './favorite_outline.png';
import unfavoriteIcon from './favorite.png'

function Card({ id, title, cover }) {
    const { favorites, addFavorite } = useFavoriteContext();
    const isFavorite = favorites.some((fav) => fav.id === id);
    const icon = !isFavorite ? favoriteIcon : unfavoriteIcon;

    return (
        <div className={styles.container}>
            <img src={cover} alt={title} className={styles.cover} />
            <h2>{title}</h2>
            <img src={icon} 
                alt="Favoritar filme" 
                className={styles.favorite} onClick={() => {
                    addFavorite({id, title, cover})
                }}/>
        </div>
    )
}

export default Card;