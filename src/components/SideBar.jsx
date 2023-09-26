import React from 'react';
import close from '../images/close.png';
import { NavLink, useNavigate } from 'react-router-dom';

function SideBar({setSideNav, handleSideBarScroll}) {
    let navigate = useNavigate();

    function handleClick(param) {
        setSideNav(false);
        let url = window.location.pathname;
        if (url === '/') {
            param = param.replace("/#","")
			handleSideBarScroll(param)
		} else{
            navigate(param);
        }
    }
  return (
    <div className="fixed z-20 bg-getlinkedai_bg h-full w-full p-10">
        <div onClick={()=> setSideNav(false)} className="float-right bg-red-20 hover:cursor-pointer">
            <div className="bg-gradient-to-t from-pink-500 to-getlinkedai_light_purple w-8 h-8 md:h-12 md:w-12 p-[2px] rounded-full flex justify-center align-middle">
                <div className="bg-getlinkedai_bg w-full h-full flex pt-[7.5px] md:pt-[15px] justify-center rounded-full" >
                    <img src={close} className="w-[.8rem] h-[.8rem] md:w-4 md:h-4" />
                </div>
            </div>
        </div>
        <ul className="bg-red-10 mt-20">
            <div className="text-gray-200 font-semibold text-lg md:text-2xl md:space-y-5 space-y-3">
                <li className='hover:text-pink-500'>
                    <button onClick={()=> handleClick("/#Timeline")}>Timeline</button>
                    {/* <NavLink to="/#Timeline">Timeline</NavLink> */}
                </li>
                <li className='hover:text-pink-500'>
                    <button onClick={()=> handleClick("/#Overview")}>Overview</button>
                </li>
                <li className='hover:text-pink-500'>
                    <button onClick={()=> handleClick("/#FAQs")}>FAQs</button>
                </li>
                <li className='hover:text-pink-500'>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </div>
            
            <li className="bg-red-20 w-2/3 mt-7 md:mt-10">
                <button onClick={()=> setSideNav(false)} className="w-full bg-blue-20 h-14 md:h-20 md:text-3xl rounded-md text-white text-lg font-semibold bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-500 transition-all">
                    <NavLink to="/register" className="bg-red-40 px-14 py-4">Register</NavLink>
                </button>
            </li>
        </ul>
    </div> 
  )
}

export default SideBar;