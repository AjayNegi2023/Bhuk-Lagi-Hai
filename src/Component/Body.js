import React, { useEffect, useState , useContext} from 'react';
import Card ,{withPromotedLabel} from './Card';
import Shimmer from './Shimmer';
import { UserContext , Provider } from './utils/UserContext';
import '../styles.css';
import { Link } from 'react-router-dom';

import useOnlineStatus from './utils/CustomHooks/useOnlineStatus';


const Body = () => {
    
    const [listOfRestaurants ,setListOfRestaurants] = useState([]);
    const [FilterRestaurants ,setFilterRestaurants] = useState([]);
    const [serachData , setSerachData] = useState('');
    const onlineStatus = useOnlineStatus();
    const { logginInUser,setUserName} = useContext(UserContext)

    const RestaurantCardPromoted = withPromotedLabel(Card);
    useEffect(()=>{
        console.log("Fetch Data useEffect")
        fetchData();
    },[]);


    if(!onlineStatus){
        return (
            <h1 style={{color:"red"}}>OOPS! You're Offline, Please check your internet Connectivity.</h1>
        )
    }


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
                <div className='flex'>
                    <div className='search m-4 p-4'>
                            <input type='text' className='border border-solid border-black' onChange={(e)=> handleSearch(e)}/>
                            <button className='px-4 py-2 m-4 rounded-2xl bg-green-100' onClick={()=> handleSearchClick()}>Search</button>
                    </div>
                    <div className='m-4 p-4 flrx items-center '>
                    <button className='px-4 py-2 m-4 bg-gray-100 rounded-2xl' onClick={()=> {
                         const updatedListRes=    FilterRestaurants.filter((restaurant)=>{
                                return restaurant.info.avgRating > 4
                            });
                            setListOfRestaurants(updatedListRes);
                        }}>Top Rated Restaurants</button>
                    </div>
                    
                    <div className='m-4 p-4 flex items-center'>
                        <input className='border border-black p-2' value={logginInUser} placeholder='Enter User Name ' onChange={(event)=>setUserName(event.target.value)}/>
                    </div>
                </div>
            <div className="flex flex-wrap">
                {FilterRestaurants.map((restaurant, index) => (
                    <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>{restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant}/>):<Card  resData={restaurant} />}</Link>
                    
                ))}
            </div>

        </div>

    );
};

export default Body;
