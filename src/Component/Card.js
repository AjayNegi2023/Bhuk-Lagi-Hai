import React from 'react';
import "../styles.css";
import { CDN_URL } from './utils/contants';

const Card = (props) => {
  const { resData } = props;
  return (
    <div className='m-4 p-4 w-[270px] rounded-lg bg-gray-100 hover:bg-gray-200'>
      <div className="relative w-60 h-40 overflow-hidden rounded-lg">
        <img className='absolute inset-0 w-full h-full object-cover' alt="res logo" src={`${CDN_URL + resData.info.cloudinaryImageId}`} />
      </div>
      <div className='mx-2'>
        <h3 className='font-bold py-4 text-lg'>{resData.info.name}</h3>
        <h4 className='font-semibold'>⭐{resData.info.avgRating} {resData.info.sla.deliveryTime} mins</h4>
        <h5 className='font-sans'>{resData.info.areaName}</h5>
      </div>
    </div>
  );
}

export const withPromotedLabel = (Card) => {
  return (props) => {
    <div>
      <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Promoted</label>
      <Card {...props} />
    </div>
  }
}

export default Card;
