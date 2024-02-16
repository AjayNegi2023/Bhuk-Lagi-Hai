import React from 'react';
import "../styles.css";
import { CDN_URL } from './utils/contants';
const Card = (props) => {
  const { resData } = props;
  return (
    <div className='card'>
      <img className='res-logo' alt="res logo" src={`${CDN_URL + resData.info.cloudinaryImageId}`} />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.avgRating} {resData.info.sla.deliveryTime} mins</h4>
      <h5>{resData.info.areaName}</h5>
      
    </div>
  );
}

export default Card;
