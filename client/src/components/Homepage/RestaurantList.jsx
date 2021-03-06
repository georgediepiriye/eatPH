import React from 'react'

function RestaurantList() {
    return (
        <div className='list-group'>
            <table className='table table-hover table-dark'>
                <thead>
                    <tr className='bg-primary'>
                        <th scope='col'>Restaurant</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Price Range</th>
                        <th scope='col'>Ratings</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr>
                        <td>Asia Town</td>
                        <td>5 Aggrey Road</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className='btn btn-warning'>Update</button></td>
                        <td> <button className='btn btn-danger'>Delete</button></td>
                        

                    </tr>
                </tbody>

            </table>
            
        </div>
    )
}

export default RestaurantList
