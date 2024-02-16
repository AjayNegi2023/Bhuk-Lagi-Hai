import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';

const  RestaurantMenu= ()=> {
    const [resInfo , setResInfo] = useState(null);

    const params= useParams();
    const resID = params.resID;
    // console.log("Paramss ", params)
    useEffect(()=>{
            fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resID}`);
        const json = await data.json();
        setResInfo(json.data)
    }
    if(resInfo===null){
        return <Shimmer/>;
    }
   
    const { name, city,cuisines , costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        console.log("Item Cards" , itemCards)
  return (
    <div>
        <h2>{name}</h2>
        <h2>{city}</h2>
        <p>{cuisines.join(",")}-{costForTwoMessage}</p>
       
       <h3>Menu</h3>
       <ul>
        {
            itemCards?.map((item,index)=><li key={index}>{item.card.info.name}- {item?.card?.info?.price/100} RS</li>)
        }
       </ul>
    </div>
  )
}

export default RestaurantMenu