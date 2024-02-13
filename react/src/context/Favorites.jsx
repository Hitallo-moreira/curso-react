import { createContext, useState } from "react";

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