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
    const {favorites, setFavorites } = useContext(FavoritesContext);
    
    function addFavorite(newFavorite) {
        const repeatFavorite = favorites.some(item => item.id === newFavorite.id);

        let newList = [...favorites];

        if(!repeatFavorite) {
            newList.push(newFavorite);
            return setFavorites(newList);
        }

        newList = favorites.filter((fav) => fav.id !== newFavorite.id);
        return setFavorites(newList);
    }

    return {
        favorites,
        addFavorite
    }
}