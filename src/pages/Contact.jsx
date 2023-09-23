import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import back_arrow from '../images/back_arrow.png';
import linked_in from '../images/linked_in.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import left_purple_lens_flare from '../images/left_Purple-Lens-Flare.png';



function Contact() {
    const [success, setSuccess] = useState(false);
    const [contactData, setContactData] = useState({
        "email":"",
        "first_name": "",
        "message": ""
    })

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setContactData({...contactData,[name]: value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        alert("Uo");
        alert(JSON.stringify(contactData))
        let response = await fetch("https://backend.getlinked.ai/hackathon/contact-form", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(contactData)
        })
        
        let data = await response.json();
        alert(JSON.stringify(data))
        // if (data.id) {
        //     alert(`REGISTRATION SUCCESSFUL.\n Your Id Number is ${data.id}. `);
        //     setSuccess(true);
        // } else {
        //     alert(data.email[0].toUpperCase())
        // }
    }
    
  return (
    <div className='relative w-full bg-getlinkedai_bg p-10'>
        <div className='absolute -left-10 -top-4'>
            <img src={left_purple_lens_flare} />
        </div>
        <NavLink to="/" className="z-10 relative lg:hidden">
            <div className="float-left bg-red-20">
                <div className="bg-gradient-to-t from-pink-500 to-getlinkedai_light_purple w-7 h-7 p-[2px] rounded-full flex justify-center align-middle">
                    <div className="bg-getlinkedai_bg w-full h-full flex pt-[8px] pr-[2px] justify-center rounded-full" >
                    <img src={back_arrow} className="w-[.5rem] h-[.5rem]" />
                    </div>
                </div>
            </div>
        </NavLink>
        <header className="bg-getlinkedai_bg px-10 py-7 align-middle flex justify-between border-b border-gray-800
			lg:px-20 lg:py-10">
            <div>
                <span className="text-white text-[15px] font-bold font-['Clash Display'] lg:text-3xl">get</span>
                <span className="text-fuchsia-500 text-[15px] font-bold font-['Clash Display'] lg:text-3xl">linked</span>
            </div>
            {/* <div className="lg:hidden">
                <button onClick={()=> setSideNav(true)}><img src={stair_hamburger}/></button>
            </div> */}
            <ul className="hidden gap-5 lg:flex">
                <li className="text-gray-50 font-normal text-sm">Timeline</li>
                <li className="text-gray-50 font-normal text-sm">Overview</li>
                <li className="text-gray-50 font-normal text-sm">FAQs</li>
                <li className="text-gray-50 font-normal text-sm">Contact</li>
                <li className="relative ml-10 w-40">
                    <button className="w-full h-12 rounded-lg -mt-3 bg-gradient-to-r from-getlinkedai_fuchsia to-getlinkedai_light_purple text-gray-50 text-lg">Register</button>
                </li>
            </ul>
        </header>

        <div className='z-10 relative'>
        <div className='text-getlinkedai_fuchsia text-xl font-bold mt-14 text-left'>
            <p>Questions or need assistance?</p>
            <p>Let us know about it</p>
        </div>
        <p className='text-sm text-white font-medium my-5'>Email us below to any question related to our event</p>
        <form onSubmit={handleSubmit} className='space-y-5 mt-8'>
            <div>
                <input type="text" name="email" value={contactData.email} onChange={handleChange} placeholder="Email" className='text-lg w-full bg-[rgba(255,255,255,0.03)] border-2 border-white rounded h-10 px-6 py-6 font-semibold text-gray-50 placeholder:text-slate-500 placeholder:text-lg' />
            </div>
            <div>
                <input type="text" name="first_name" value={contactData.first_name} onChange={handleChange} placeholder="Team's name" className='text-lg w-full bg-[rgba(255,255,255,0.03)] border-2 border-white rounded h-10 px-6 py-6 font-semibold text-gray-50 placeholder:text-slate-500 placeholder:text-lg' />
            </div>
            <div>
                <textarea type="text" name="message" value={contactData.message} onChange={handleChange} placeholder="Message" className='text-lg w-full bg-[rgba(255,255,255,0.03)] border-2 border-white rounded h-40 px-6 pt-3 font-semibold text-gray-50 placeholder:text-slate-500 placeholder:text-lg' />
            </div>
            <div className='w-3/5 mx-auto'>
                <button type="submit" className='w-full h-12 text-gray-50 font-semibold rounded-md bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple '>Submit</button>
            </div>
        </form>

        <div className='text-center mt-10'>
            <p className='text-getlinkedai_fuchsia font-semibold text-sm'>Share on</p>
            <div className="flex justify-center gap-3 bg-red-20 mt-1">
                <div className="w-5 h-5">
                    <img src={instagram} className="w-full h-full"/>
                </div>
                <div className="w-3 h-3 mt-1">
                    <img src={twitter} className="w-full h-full" />
                </div>
                <div className="w-2 h-4">
                    <img src={facebook} className="w-full h-full" />
                </div>
                <div className="w-5 h-5">
                    <img src={linked_in} className="w-full h-full" />
                </div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Contact