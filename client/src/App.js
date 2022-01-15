import React from 'react'
import {BrowserRouter as Router,Routes,  Route} from 'react-router-dom';
import Homepage from './routes/Homepage';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';
import UpdatePage from './routes/UpdatePage';
function App() {
  return (
    <div className='container'>
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/restaurants/:id/update" element={<UpdatePage/>}/>
            <Route exact path="/restaurants/:id" element={<RestaurantDetailsPage/>}/>
          </Routes>
         
        </Router>
    </div>
  );
}

export default App;
