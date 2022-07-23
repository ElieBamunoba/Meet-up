import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
});

function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = userState([]);


    function addFavoritesHandler(favoriteMeetup) {
        setUserFavorites((prevUserFarorites) => {
            return prevUserFarorites.concat(favoriteMeetup);
        })
    }
    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFarorites) => {
            return prevUserFarorites.filter(meetup => meetup.id !== meetupId);
        })
    }
    function itemIsFavoritedHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }



    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider;