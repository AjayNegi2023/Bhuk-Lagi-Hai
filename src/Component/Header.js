import React, { useContext, useState } from 'react';
import "../styles.css";
import { LOGO_URL } from './utils/contants';
import { Link } from 'react-router-dom';
import useOnlineStatus from './utils/CustomHooks/useOnlineStatus';
import {UserContext} from './utils/UserContext';
import {useSelector} from 'react-redux';

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const {logginInUser} = useContext(UserContext);
  const [btnName , setBtnName] = useState("Login");

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store)=>store.cart.items);
  return (
    <div className="flex justify-between shadow-lg ">
      <div>
        <img className="w-20" src={LOGO_URL} alt="LOGO"/>
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4 '>
          <li className='px-4'>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className='px-4'><Link className = "headerLink" to='/'> Home </Link></li>
          <li className='px-4'><Link className = "headerLink" to='/about' >About US </Link></li>
          <li className='px-4'><a className = "headerLink" href="/contact"> Contact Us </a></li>
          <li className='px-4'><Link className = "headerLink" to="/cart"> Card -{cartItems.length} Items  </Link></li>
          <li className='px-4'><Link className='headerLink' to="/grocery" >Grocery</Link></li>
          <button className='px-4 ' onClick={()=>{btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
          <li className='px-4'>{logginInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
