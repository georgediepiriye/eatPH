import React from 'react'
import AddRestaurant from '../components/Homepage/AddRestaurant'
import Heading from '../components/Homepage/Heading'
import RestaurantList from '../components/Homepage/RestaurantList'

function Homepage() {
    return (
        <div>
            <Heading/>
            <AddRestaurant/>
            <RestaurantList/>
        </div>
    )
}

export default Homepage
