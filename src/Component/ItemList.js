import React from 'react'
import { CDN_URL } from './utils/contants'

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) =>
            (<div key={item.card.info.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                <div className='w-9/12'>
                    <div className='py-2 '>
                        <span className='font-semibold'>{item?.card?.info?.name}</span><br></br>
                        <span className='font-normal'>₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                    </div>
                    <p className='text-xs'>
                        {item?.card?.info?.description}
                    </p>
                </div>

                <div className='w-3/12 p-4 relative'>
                    <div className='absolute bottom-0 left-0 w-full text-center'>
                        <button className='p-3 bg-white shadow-md rounded-lg'>Add</button>
                    </div>
                    <img src={`${CDN_URL + item?.card?.info?.imageId}`} className="w-full rounded-lg shadow-md" alt="NAN" />
                </div>
            </div>)
            )}
        </div>
    )
}

export default ItemList