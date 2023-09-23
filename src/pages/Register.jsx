import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import designer from '../images/3d_graphic_designer.png';
import boy_walking from '../images/boy_walking.png';
import girl_walking from '../images/girl_walking.png';
import left_purple_lens_flare from '../images/left_Purple-Lens-Flare.png';
import successful from '../images/successful.png';
import successful_man from '../images/successful_man.png';
import wink from '../images/wink.png';


function Register() {
    const [success, setSuccess] = useState(false);
    // const [policy, setPolicy] = useState(false);
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
        window.scrollTo(0,0);
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
            alert(`REGISTRATION SUCCESSFUL.\n Your Id Number is ${data.id}. `);
            setSuccess(true);
        } else {
            alert(data.email[0].toUpperCase())
        }
        
    }
    

  return (
    <div className='relative w-full bg-getlinkedai_bg pb-[10rem] '>
        { success && 
        <div>
        {/* background */}
        <div className='fixed top-0 z-10 bg-getlinkedai_bg opacity-90 h-full w-full'></div>

        <div className='relative z-10'>
            <div className='relative bg-red-20'>
                <div className='absolute w-[80%] h-[70vh] right-[10%] top-[16vh]  border-2 border-getlinkedai_fuchsia rounded lg:w-[45%] lg:right-[25%]'></div>
                <div className='absolute top-[18vh] left-[10%] w-[80%] bg-red-20 px-5 lg:w-[45%] lg:left-[30%]'>
                    {/* success */}
                    <div className='relative w-full bg-yellow-20 mt-2'>
                        <div className='relative w-2/3 ml-[8%] bg-red-40 lg:ml-[25%]'>
                            <div className='relative w-44 h-44 mt-3 bg-red-20'>
                                <img src={successful} className='w-full h-full'/>
                                <div className='absolute w-48 h-48 top-0 -right-[5.4rem] bg-blue-20 '>
                                    <img src={successful_man} className='w-full h-full' />
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className='space-y-6 mt-10'>
                        <div className='text-gray-50 font-medium tex-center text-xl mt-5'>
                            <p className='text-center'>Congratulations</p>
                            <p className='text-center'>you have successfully registered</p>
                        </div>
                        <div className='relative text-gray-300 font-medium text-center text-sm'>
                            <p>Yes, it was easy and you did it!</p>
                            <div className='flex justify-center'>
                                <p>check your mail box for next step</p> 
                                <img src={wink} className='w-4 h-4 mt-1' />
                            </div>
                        </div>
                        <div>
                            <button className='w-full h-14 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple'>
                                <NavLink to="/" className="bg-blue-20 px-24 py-4">Back</NavLink>
                                {/* Back */}
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
        <header className="bg-getlinkedai_bg px-10 py-7 align-middle flex justify-between border-b border-gray-800
			lg:px-20 lg:py-5 ">
            <div>
                <span className="text-white text-[15px] font-bold font-['Clash Display'] lg:text-3xl">get</span>
                <span className="text-fuchsia-500 text-[15px] font-bold font-['Clash Display'] lg:text-3xl">linked</span>
            </div>
            <ul className="hidden gap-5 lg:flex mt-2">
                <li className="text-gray-50 font-normal text-sm">Timeline</li>
                <li className="text-gray-50 font-normal text-sm">Overview</li>
                <li className="text-gray-50 font-normal text-sm">FAQs</li>
                <li className="text-gray-50 font-normal text-sm">Contact</li>
                <li className="relative ml-12 w-36">
                    <button className="absolute top-1 w-full h-10 rounded-lg -mt-3 bg-gradient-to-t from-pink-500 to-getlinkedai_light_purple text-gray-50 text-sm lg:p-[.1rem] hover:text-pink-500">
                        <div className='bg-getlinkedai_bg rounded-md w-full h-full pt-2'>
                            Register
                        </div>
                    </button>
                </li>
            </ul>
        </header>
        <div className='relative w-[70%] mx-auto py-5 bg-red-10 lg:flex lg:w-[90%] lg:justify-evenly lg:py-0  lg:h-[80vh lg:top-[10vh]'>
            <p className='text-getlinkedai_fuchsia font-bold text-lg lg:hidden'>Register</p>

            <div className='lg:w-[40%] bg-red-20 lg:mt-[7%]'>
                <div className='bg-red-20 w-56 mx-auto mt-8 lg:w-full lg:h-[70%]'>
                    <img src={designer} className='w-full h-full' />
                </div>
            </div>
            

            <div className='relative lg:w-[60%] lg:h-full lg:bg-[rgba(255,255,255,0.03)] lg:p-10'>
                <div>
                    <p className='text-getlinkedai_fuchsia font-bold text-4xl'>Register</p>
                    <div className='my-3'>
                        <div className='flex justify-between bg-red-20 lg:justify-start'>
                            <p className='text-gray-50 font-medium text-[.9rem] bg-red-20 mt-3 w-[75%] lg:w-auto'>Be part of this movement!</p>
                            <div className='w-[25%] mt-1 bg-red-20 lg:w-[15%]'>
                                <div className='flex w-full justify-center bg-red-30 border-b-[1.59px] border-dashed border-getlinkedai_fuchsia'>
                                    <div>
                                        <img src={girl_walking} className='w-full h-full' />
                                    </div>
                                    <div>
                                        <img src={boy_walking} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative text-gray-50 flex justify-between text-[1.4rem] font-semibold lg:justify-start lg:gap-3'>
                            <p>CREATE</p>
                            <p>YOUR</p>
                            <p>ACCOUNT</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className='mt-5'>
                        <div className='space-y-4'>
                            <div className='lg:flex lg:justify-between bg-red-20'>
                                 <div className='space-y-1 lg:w-[48%]'>
                                    <label htmlFor='team_name' className='text-white'>Team's Name</label>
                                    <input required type="text" name="team_name" value={registerData.team_name} onChange={handleChange} placeholder='Enter the name of your group' className='w-full bg-[rgba(255,255,255,0.03)] border-2 border-white rounded h-10 p-5 font-semibold text-gray-50 placeholder:text-slate-500 placeholder:text-[.9rem]' />
                                </div>
                                <div className='space-y-1 lg:w-[48%]'>
                                    <label htmlFor='phone_number' className='text-white'>Phone</label>
                                    <input required type="text" name="phone_number" value={registerData.phone_number} onChange={handleChange} placeholder='Enter your phone number' className='w-full bg-[rgba(255,255,255,0.03)] border-2 border-white rounded h-10 p-5 font-semibold text-gray-50 placeholder:text-slate-500 placeholder:text-[.9rem]' />
                                </div>
                            </div>

                            <div className='lg:flex lg:justify-between bg-red-20'>
                                <div className='space-y-1 lg:w-[48%]'>
                                    <label htmlFor='email' className='text-white'>Email</label>
                                    <input required type="text" name="email"value={registerData.email} onChange={handleChange} placeholder='Enter your email addres' className='w-full bg-[rgba(255,255,255,0.03)] border-2 border-white rounded h-10 p-5 font-semibold text-gray-50 placeholder:text-slate-500 placeholder:text-[.9rem]' />
                                </div>
                                <div className='space-y-1 lg:w-[48%]'>
                                    <label htmlFor='project_topic' className='text-white'>Project Topic</label>
                                    <input required type="text" name="project_topic" value={registerData.project_topic} onChange={handleChange} placeholder='What is your group project topic' className='w-full bg-[rgba(255,255,255,0.03)] border-2 border-white rounded h-10 p-5 font-semibold text-gray-50 placeholder:text-slate-500 placeholder:text-[.9rem]' />
                                </div>
                            </div>
                           
                            
                            <div className='flex justify-between'>
                                <div className='w-[65%] lg:w-[48%]'>
                                    <div className='space-y-1'>
                                        <label htmlFor='category' className='text-white'>Category</label>
                                        <select required name="category" value={registerData.category} onChange={handleChange}  className='w-full bg-[rgba(255,255,255,0.03)] border-2 border-white rounded h-10 py-2 px-1 font-semibold text-gray-50'>
                                            <option selected={true} disabled value="all">Select your category</option>
                                            {categoryList.map(items => <option key={items.name} value={items.name} className='text-gray-950 medium'>{items.name}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className='w-[30%] lg:w-[48%]'>
                                    <div className='space-y-1'>
                                        <label htmlFor='group_size' className='text-white text-[.9rem]'>Group Size</label>
                                        <input required type="number" name="group_size" value={registerData.group_size} onChange={handleChange} placeholder='Select' className='w-full bg-[rgba(255,255,255,0.03)] border-2 border-white rounded h-10 p-5 font-semibold text-gray-50 placeholder:text-slate-500 placeholder:text-[.9rem]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text-getlinkedai_fuchsia italic text-[.67rem] text-center font-light my-4 lg:text-left lg:text-base'>Please review your registration details before submitting</p>

                        <div className='flex gap-3'>
                            <div className='bg-red-20'>
                                <input name="privacy_poclicy_accepted" onChange={handleChange} type="checkbox" className=' accent-red-300 w-4 h-4 ' />
                            </div>
                            <p className='text-gray-50 text-left text-sm leading-5 bg-red-30 lg:text-base' >I agreed with the event terms and conditions and privacy policy</p>
                        </div>

                        <div className='bg-red-20 w-3/5  mx-auto mt-7 lg:w-full'>
                            {
                                registerData.privacy_poclicy_accepted ? 
                                <button type="submit" className='w-full h-12 text-gray-50 font-semibold rounded-md bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple '>Submit</button>
                                :  <button disabled type="submit" className='w-full h-12 text-gray-50 font-semibold rounded-md bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple opacity-50 hover:cursor-not-allowed '>Submit</button>
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