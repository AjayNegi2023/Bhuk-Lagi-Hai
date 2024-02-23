import React from 'react';
import Header from './Component/Header';
import Body from './Component/Body';
import {BrowserRouter, createBrowserRouter,RouterProvider,Routes,Route,Outlet} from 'react-router-dom';
import About from './Component/About';
import Error from './Component/Error';
import RestaurantMenu from './Component/RestaurantMenu';
const  App= ()=> {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="*" element={<Error/>} />
        <Route path="/restaurant/:resID" element={<RestaurantMenu/>}/>
      </Routes>
    </div>
  );
}

export default App;
