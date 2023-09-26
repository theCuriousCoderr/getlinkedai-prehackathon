import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import designer from '../images/3d_graphic_designer.png';
import boy_walking from '../images/boy_walking.png';
import girl_walking from '../images/girl_walking.png';
import left_purple_lens_flare from '../images/left_Purple-Lens-Flare.png';
import successful from '../images/successful.png';
import successful_man from '../images/successful_man.png';
import wink from '../images/wink.png';
import gray_star_3x from '../images/gray_star_3x.png';
import gra_star_3x from '../images/gra_star_3x.png';
import purple_star_3x from '../images/purple_star_3x.png';
import Header from '../components/Header';
import SideBar from '../components/SideBar';


function Register({sideNav, setSideNav, handleSideBarScroll}) {
    const [success, setSuccess] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [registerData, setRegisterData] = useState({
        "email":"",
        "phone_number":"",
        "team_name": "",
        "group_size": null,
        "project_topic":"",
        "category": null,
        "privacy_poclicy_accepted": false
    })

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "privacy_poclicy_accepted"){
            value = e.target.checked
            setRegisterData({...registerData,[name]: [value] });
        }
        setRegisterData({...registerData,[name]: value});
    }

    useEffect(()=>{
        // window.scrollTo(0,0);
        fetch("https://backend.getlinked.ai/hackathon/categories-list")
        .then(res => res.json()).
        then(data => setCategoryList(data))
    },[success])

   

    async function handleSubmit(e) {
        e.preventDefault();
        let postRegisterData = {...registerData};
        let value;
        for (let items in postRegisterData) {
            if (items === "group_size"){
                value = parseInt(postRegisterData.group_size)
                postRegisterData = ({...postRegisterData, [items]: value });
            }
            if (items === "category") {
                value = categoryList.filter(data => data.name === postRegisterData.category);
                value = value[0].id;
                postRegisterData = ({...postRegisterData,[items]: value });
            }
        }
        let response = await fetch("https://backend.getlinked.ai/hackathon/registration", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(postRegisterData)
        })
        let data = await response.json();
        if (data.id) {
            alert(`REGISTRATION SUCCESSFUL.\n Your Registration Id Number is ${data.id}. `);
            setSuccess(true);
        } else {
            alert(data.email[0].toUpperCase())
        }
        
    }
    

  return (
    <div className='relative w-full bg-getlinkedai_bg pb-[1rem] md:mx-auto lg:pb-28'>
       { sideNav && <SideBar setSideNav={setSideNav} handleSideBarScroll={handleSideBarScroll} /> }

        <div>
            <Header setSideNav={setSideNav} handleSideBarScroll={handleSideBarScroll} />
        </div>
        { success && 
        <div>
        {/* background */}
        <div className='fixed top-0 z-10 bg-getlinkedai_bg opacity-90 h-full w-full'></div>

        <div className='relative z-10'>
            <div className='relative bg-red-20'>
                <div className='absolute w-[80%] md:w-[70%] h-[70vh] md:h-[55vh] right-[10%] md:right-[15%] top-[16vh]  border md:border-2 border-getlinkedai_fuchsia rounded lg:w-[45%] lg:right-[25%]'></div>
                <div className='absolute top-[18vh] left-[10%] w-[80%] md:w-[70%] md:left-[15%] bg-red-20 px-5 lg:w-[45%] lg:left-[30%]'>
                    <div className='absolute w-3 -top-10 right-0'>
                        <img src={purple_star_3x} className='w-full h-full' />
                    </div>
                    <div className='absolute w-4 top-[35%] left-[10%]'>
                        <img src={gray_star_3x} className='w-full h-full' />
                    </div>
                    <div className='absolute w-3 -bottom-[12%] right-[5%]'>
                        <img src={gra_star_3x} className='w-full h-full' />
                    </div>
                    {/* success */}
                    <div className='relative w-full bg-yellow-20 mt-2'>
                        <div className='relative w-2/3 ml-[8%] bg-red-40 md:ml-[25%] lg:ml-[25%]'>
                            <div className='relative w-44 h-44 mt-3 bg-red-20'>
                                <img src={successful} className='w-full h-full'/>
                                <div className='absolute w-48 h-48 top-0 -right-[5.4rem] bg-blue-20 '>
                                    <img src={successful_man} className='w-full h-full' />
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className='space-y-6 mt-10'>
                        <div className='text-gray-50 font-medium tex-center text-xl md:text-2xl mt-5'>
                            <p className='text-center'>Congratulations</p>
                            <p className='text-center'>you have successfully Registered!</p>
                        </div>
                        <div className='relative text-gray-300 font-medium text-center text-sm md:text-lg'>
                            <p>Yes, it was easy and you did it!</p>
                            <div className='flex justify-center'>
                                <p>check your mail box for next step</p> 
                                <img src={wink} className='w-4 h-4 mt-1' />
                            </div>
                        </div>
                        <div>
                            <button className='w-full h-14 md:h-16 rounded-md text-white font-semibold text-lg md:text-2xl bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple'>
                                <NavLink to="/" className="bg-blue-20 px-24 py-4">Back</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> }

         <div className='absolute left-0 top-12 '>
            <img src={left_purple_lens_flare} />
        </div>
       
        <div className='relative w-[70%] mx-auto py-7 bg-red-10 lg:flex lg:w-[90%] lg:justify-evenly lg:py-0  lg:h-[80vh lg:top-[10vh]'>
            <p className='text-getlinkedai_fuchsia font-bold text-lg md:text-3xl lg:hidden'>Register</p>

            <div className='lg:w-[40%] bg-red-20 lg:mt-[7%]'>
                <div className='relative bg-red-20 w-56 md:w-80 mx-auto mt-8 lg:w-full lg:h-[70%]'>
                    <img src={designer} className='w-full h-full' />
                    <div className='absolute w-4 bottom-[35%] -right-[10%]'>
                        <img src={gra_star_3x} />
                    </div>
                </div>
            </div>
            

            <div className='relative md:w-[90%] md:mx-auto lg:w-[60%] lg:h-full lg:bg-[rgba(255,255,255,0.03)] lg:p-10'>
                <div>
                    <p className='text-getlinkedai_fuchsia font-bold text-4xl hidden lg:block'>Register</p>
                    <div className='my-3'>
                        <div className='flex justify-between bg-red-20 md:justify-center md:gap-2 lg:justify-start'>
                            <p className='text-gray-50 font-normal text-[.9rem] md:text-2xl bg-red-20 mt-3 w-[75%] md:w-auto lg:w-auto'>Be part of this movement!</p>
                            <div className='w-[25%] mt-1 md:mt-2 bg-red-20 lg:w-[15%]'>
                                <div className='flex w-full justify-center bg-red-30 border-b-[1.59px] md:border-b-2 border-dashed border-getlinkedai_fuchsia'>
                                    <div>
                                        <img src={girl_walking} className='w-full h-full' />
                                    </div>
                                    <div>
                                        <img src={boy_walking} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative text-gray-50 bg-red-20 flex justify-between text-[1.4rem] font-normal md:justify-center md:gap-5 lg:justify-start lg:gap-3'>
                            <p>CREATE</p>
                            <p>YOUR</p>
                            <p>ACCOUNT</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className='relative mt-5'>
                        <div className='absolute w-4 top-5 -left-[12%]'>
                            <img src={gray_star_3x} className='w-full h-full' />
                        </div>
                        <div className='space-y-4'>
                            <div className='space-y-4 lg:flex lg:justify-between bg-red-20 lg:space-y-0'>
                                <div className='space-y-1 md:space-y-3 lg:w-[48%]'>
                                    <label htmlFor='team_name' className='text-white md:text-xl'>Team's Name</label>
                                    <input required type="text" name="team_name" value={registerData.team_name} onChange={handleChange} placeholder='Enter the name of your group' className='w-full bg-[rgba(255,255,255,0.03)] border border-white rounded h-10 md:h-16 md:text-2xl p-5 font-normal  text-gray-50 placeholder:text-slate-500 placeholder:text-[.9rem] md:placeholder:text-xl' />
                                </div>
                                <div className='space-y-1 md:space-y-3 lg:w-[48%]'>
                                    <label htmlFor='phone_number' className='text-white md:text-xl'>Phone</label>
                                    <input required type="text" name="phone_number" value={registerData.phone_number} onChange={handleChange} placeholder='Enter your phone number' className='w-full bg-[rgba(255,255,255,0.03)] border border-white rounded h-10 md:h-16 md:text-2xl p-5 font-normal text-gray-50 placeholder:text-slate-500 placeholder:text-[.9rem] md:placeholder:text-xl' />
                                </div>
                            </div>

                            <div className='space-y-4 lg:flex lg:justify-between bg-red-20 lg:space-y-0'>
                                <div className='space-y-1 md:space-y-3 lg:w-[48%]'>
                                    <label htmlFor='email' className='text-white md:text-xl'>Email</label>
                                    <input required type="email" name="email"value={registerData.email} onChange={handleChange} placeholder='Enter your email addres' className='w-full bg-[rgba(255,255,255,0.03)] border border-white rounded h-10 md:h-16 md:text-2xl p-5 font-normal text-gray-50 placeholder:text-slate-500 placeholder:text-[.9rem] md:placeholder:text-xl' />
                                </div>
                                <div className='space-y-1 md:space-y-3 lg:w-[48%]'>
                                    <label htmlFor='project_topic' className='text-white md:text-xl'>Project Topic</label>
                                    <input required type="text" name="project_topic" value={registerData.project_topic} onChange={handleChange} placeholder='What is your group project topic' className='w-full bg-[rgba(255,255,255,0.03)] border border-white rounded h-10 md:h-16 md:text-2xl p-5 font-normal text-gray-50 placeholder:text-slate-500 placeholder:text-[.9rem] md:placeholder:text-xl' />
                                </div>
                            </div>
                           
                            
                            <div className='flex justify-between'>
                                <div className='w-[65%] lg:w-[48%]'>
                                    <div className='space-y-1 md:space-y-3'>
                                        <label htmlFor='category' className='text-white md:text-xl'>Category</label>
                                        <select required name="category" value={registerData.category} onChange={handleChange}  className='w-full bg-[rgba(255,255,255,0.03)] border border-white rounded h-10 md:h-16 md:text-2xl py-2 px-1 font-semibold text-gray-50'>
                                            <option selected={true} disabled value="all">Select your category</option>
                                            {categoryList.map(items => <option key={items.name} value={items.name} className='text-gray-950 medium'>{items.name}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className='relative w-[30%] lg:w-[48%]'>
                                    <div className='absolute w-[.7rem] top-0 -right-[20%]'>
                                        <img src={purple_star_3x} className='w-full h-full' />
                                    </div>
                                    <div className='space-y-1 md:space-y-3'>
                                        <label htmlFor='group_size' className='text-white text-[.9rem] md:text-xl'>Group Size</label>
                                        <input required type="number" name="group_size" value={registerData.group_size} onChange={handleChange} placeholder='Select' className='w-full bg-[rgba(255,255,255,0.03)] border border-white rounded h-10 md:h-16 md:text-2xl p-5 font-semibold text-gray-50 placeholder:text-slate-500 placeholder:text-[.9rem] md:placeholder:text-xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text-pink-400 italic text-[.67rem] text-center font-light my-5 md:text-left lg:text-left md:text-lg lg:text-base'>Please review your registration details before submitting</p>

                        <div className='flex gap-3'>
                            <div className='bg-red-20'>
                                <input name="privacy_poclicy_accepted" onChange={handleChange} type="checkbox" className=' accent-red-300 w-4 h-4 md:w-6 md:h-6 ' />
                            </div>
                            <p className='text-gray-50 text-left text-sm leading-5 bg-red-30 md:text-xl lg:text-base' >I agreed with the event terms and conditions and privacy policy</p>
                        </div>

                        <div className='bg-red-20 w-3/5  mx-auto mt-7 md:mt-10 lg:w-full'>
                            {
                                registerData.privacy_poclicy_accepted ? 
                                <button type="submit" className='w-full h-12 md:h-16 md:text-2xl text-gray-50 font-normal rounded-md bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple '>Submit</button>
                                :  <button disabled type="submit" className='w-full h-12 md:h-16 md:text-2xl text-gray-50 font-normal rounded-md bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple opacity-50 hover:cursor-not-allowed '>Submit</button>
                            }
                        </div>
                    </form>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Register