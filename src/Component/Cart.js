import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from './utils/Redux/cartSlice';
const Cart =()=> {
    //Subscribe the store 
   const cartItems =  useSelector((store)=>store.cart.items);
//    const cartItems = store.cart.items//less Efficent 
//    console.log("Store" , store)

  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(clearCart())
  }
  return (
    <div className='text-center m-4 p-4'>
        <h2 className='text-2xl font-bold'>Cart</h2>
        <div className='w-6/12 m-auto'>
            {cartItems.length==0 ? <h4 className='text-center m-auto  text-red-500 font-bold'>Cart is Empty! Add some items.</h4>: <button className='p-2 m-2 bg-red-800 rounded-md shadow-md text-white' onClick={()=> handleClick()}>Clear Cart </button>}
            <ItemList items={cartItems}/>
        </div>
    </div>
  )
}

export default Cart