import React, { useEffect, useState } from 'react';
import Card from './Card';
import Shimmer from './Shimmer';
import { Res } from './utils/DATA';
import '../styles.css';
import { Link } from 'react-router-dom';

const Body = () => {
    
    const [listOfRestaurants ,setListOfRestaurants] = useState([]);
    const [FilterRestaurants ,setFilterRestaurants] = useState([]);
    const [serachData , setSerachData] = useState('');

    useEffect(()=>{
        console.log("Fetch Data useEffect")
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json =  await  data.json();
        //Optional Chaining
        const restaurant = json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurants(restaurant);
        setFilterRestaurants(restaurant)
        // console.log(restaurant);
        
       
    }
    const handleSearch = (e)=>{
            setSerachData(e.target.value)

    }

    const handleSearchClick = ()=>{

           const filterdData =  listOfRestaurants.filter((res)=>{
                return res.info.name.toLowerCase().includes(serachData.toLowerCase())
            });

            setFilterRestaurants(filterdData)
    }
   
    return listOfRestaurants.length === 0 ? <Shimmer/>: (

        <div>
                <div className='filter'>
                    <div className='search'>
                            <input type='text' className='search-box' onChange={(e)=> handleSearch(e)}/>
                            <button onClick={()=> handleSearchClick()}>Search</button>
                    </div>
                        <button className='filter-btn' onClick={()=> {
                         const updatedListRes=    FilterRestaurants.filter((restaurant)=>{
                                return restaurant.info.avgRating > 4
                            });
                            setListOfRestaurants(updatedListRes);
                        }}>Top Rated Restaurants</button>
                </div>
            <div className="card-container">
                {FilterRestaurants.map((restaurant, index) => (
                    <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}><Card  resData={restaurant} /></Link>
                    
                ))}
            </div>

        </div>

    );
};

export default Body;
