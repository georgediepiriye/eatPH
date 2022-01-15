import React ,{useState,createContext} from "react";

export const RestaurantContext = createContext()

export const RestaurantsContextProvider = (props)=>{
    const {restaurants,setRestaurants} = useState([])
    return (
        <RestaurantsContextProvider.Provider value={{restaurants,setRestaurants}}>
            {props.children}
        </RestaurantsContextProvider.Provider>
    )

}