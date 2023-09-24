import React from 'react';
import stair_hamburger from '../images/stair_hamburger.png';
import { NavLink, useNavigate } from 'react-router-dom';

function Header({setSideNav, handleSideBarScroll}) {
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
    <>
        <header className="bg-getlinkedai_bg px-10 py-5 align-middle flex justify-between border-b border-gray-800 lg:px-20 lg:py-10 lg:hidden">
            <div>
                <NavLink to="/">
                    <span className="text-white text-[15px] font-bold font-['Clash Display'] lg:text-3xl">get</span>
                    <span className="text-fuchsia-500 text-[15px] font-bold font-['Clash Display'] lg:text-3xl">linked</span>
                </NavLink>
                
            </div>
            <div className="lg:hidden bg-red-20 relative z-10 cursor">
                <button onClick={()=> setSideNav(true)} className='w-full h-full'><img src={stair_hamburger}/></button>
            </div>
        </header>
        <header className="hidden z-30 bg-getlinkedai_bg px-10 py-7 align-middle lg:flex justify-between border-b border-gray-800
			lg:px-20 lg:py-5">
                <NavLink to="/">
                    <div>
                        <span className="text-white text-[15px] font-bold font-['Clash Display'] lg:text-3xl">get</span>
                        <span className="text-fuchsia-500 text-[15px] font-bold font-['Clash Display'] lg:text-3xl">linked</span>
                    </div>
                </NavLink>
           
            <ul className="hidden gap-10 lg:flex mt-2">
                <li className="text-gray-50 font-normal text-sm hover:text-pink-500">
                    <button onClick={()=> handleClick("/#Timeline")}>Timeline</button>
                </li>
                <li className="text-gray-50 font-normal text-sm hover:text-pink-500">
                    <button onClick={()=> handleClick("/#Overview")}>Overview</button>
                </li>
                <li className="text-gray-50 font-normal text-sm hover:text-pink-500">
                    <button onClick={()=> handleClick("/#FAQs")}>FAQs</button>
                </li>
                <li className="text-gray-50 font-normal text-sm hover:text-pink-500">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="relative ml-12 w-36">
                    <button className="absolute top-1 w-full h-10 rounded-lg -mt-3 bg-gradient-to-t from-pink-500 to-getlinkedai_light_purple text-gray-50 text-sm lg:p-[.1rem] hover:text-pink-500">
                        <div className='bg-getlinkedai_bg rounded-md w-full h-full pt-2'>
                            <NavLink to="/register" className="bg-red-40 px-12 py-4">Register</NavLink>
                        </div>
                    </button>
                </li>
            </ul>
        </header>
    </>
    
  )
}

export default Header;