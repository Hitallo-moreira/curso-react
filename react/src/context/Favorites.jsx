import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favoritos";

export default function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    return (
        <FavoritesContext.Provider
            value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoriteContext() {
    const {favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        const repeatFavorite = favorite.some(item => item.id === newFavorite.id);

        let newList = [...favorite];

        if(!repeatFavorite) {
            newList.push(newFavorite);
            return setFavorite(newList);
        }

        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorite(newList);
    }

    return {
        favorite,
        addFavorite
    }
}