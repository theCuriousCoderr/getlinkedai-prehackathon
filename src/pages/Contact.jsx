import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import back_arrow from "../images/back_arrow.png";
import linked_in from "../images/linked_in.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import left_purple_lens_flare from "../images/left_Purple-Lens-Flare.png";
import Header from "../components/Header";
import white_star_3x from "../images/white_star_3x.png";
import chip from "../images/chip.png";

function Contact({ sideNav, setSideNav, handleSideBarScroll }) {
  const [success, setSuccess] = useState(false);
  const [contactData, setContactData] = useState({
    email: "",
    first_name: "",
    message: "",
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setContactData({ ...contactData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://backend.getlinked.ai/hackathon/contact-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactData),
        }
      );

      let data = await response.json();
      if (data.id) {
        alert(
          `MESSAGE SUCCESSFULLY SENT.\nYour Message Id Number Is ${data.id}.`
        );
      }
    } catch (error) {
      alert(
        `Error in sending request.\nThis is possibly due to a error in the server or an interruption in your network connection.\nBear with us and try again later.`
      );
    }
  }
 

  return (
    // <div className="relative w-full bg-getlinkedai_bg p-10 md:pb-32 lg:p-0">
    <div className="relative w-full bg-getlinkedai_bg p-1 md:pb-32 lg:p-0">
      
      --------------------------

      <div className="absolute z-10 -left-10 -top-4">
        <img src={left_purple_lens_flare} />
      </div>
      <NavLink to="/" className="z-10 relative lg:hidden">
        <div className="float-left bg-red-20">
          <div className="bg-gradient-to-t from-pink-500 to-getlinkedai_light_purple w-7 h-7 md:w-10 md:h-10 p-[2px] rounded-full flex justify-center align-middle">
            <div className="bg-getlinkedai_bg w-full h-full flex pt-[8px] md:pt-3 pr-[2px] justify-center rounded-full">
              <img
                src={back_arrow}
                className="w-[.5rem] h-[.5rem] md:w-3 md:h-3 "
              />
            </div>
          </div>
        </div>
      </NavLink>

      <div className="hidden lg:block relative w-full">
        <Header
          setSideNav={setSideNav}
          handleSideBarScroll={handleSideBarScroll}
        />
      </div>

     

      <div className="z-30 md:w-[70%] md:mx-auto relative lg:flex lg:mt-14 lg:pb-28">
        <div className="lg:w-[40%]">
          <div className="lg:hidden">
            <div className="text-getlinkedai_fuchsia text-xl md:text-2xl font-semibold mt-16 text-left">
              <p>Questions or need assistance?</p>
              <p>Let us know about it</p>
            </div>
            <p className="text-sm md:text-lg text-white font-normal my-5">
              Email us below to any question related to our event
            </p>
          </div>
          <div className="hidden lg:block bg-red-20 px-28 lg:mt-16">
            <p className="text-getlinkedai_fuchsia font-semibold text-3xl">
              Get in touch
            </p>
            <div className="text-white font-normal space-y-3 text-sm mt-5">
              <div className="space-y-0">
                <p>Contact</p>
                <p>Information</p>
              </div>

              <div className="text-left text-white font-normal text-[.9rem]">
                <p>27, Alara Street</p>
                <p>Yaba 100012</p>
                <p>Lagos State</p>
              </div>
              <p>Call Us : 07067981819</p>
              <p>
                we are open from Monday-Friday
                <br />
                08:00am - 05:00pm
              </p>
            </div>
            <div className="text-left mt-5">
              <p className="text-getlinkedai_fuchsia font-normal text-sm lg:text-base">
                Share on
              </p>
              <div className="flex justify-start gap-3 bg-red-20 mt-1">
                <div className="w-6 h-6">
                  <img src={instagram} className="w-full h-full" />
                </div>
                <div className="w-4 h-4 mt-1">
                  <img src={twitter} className="w-full h-full" />
                </div>
                <div className="w-3 h-5">
                  <img src={facebook} className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <img src={linked_in} className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative lg:w-[45%] lg:bg-[rgba(255,255,255,0.03)] lg:p-16 lg:h-[75vh] ">
          <div className="">
            <div className="hidden lg:block text-getlinkedai_fuchsia text-xl font-semibold mt-16 text-left lg:mt-0 lg:mb-10">
              <p>Questions or need assistance?</p>
              <p>Let us know about it</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-8 mt-8 lg:mt-0 bg-red-20"
            >
              <div>
                <input
                  required
                  type="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="text-lg w-full bg-[rgba(255,255,255,0.03)] border border-white rounded h-10 md:h-16 md:text-2xl px-6 py-6 font-normal text-gray-50 placeholder:text-slate-500 placeholder:text-lg md:placeholder:text-xl"
                />
              </div>
              <div>
                <input
                  required
                  type="text"
                  name="first_name"
                  value={contactData.first_name}
                  onChange={handleChange}
                  placeholder="Team's name"
                  className="text-lg w-full bg-[rgba(255,255,255,0.03)] border border-white rounded h-10 md:h-16 md:text-2xl px-6 py-6 font-normal text-gray-50 placeholder:text-slate-500 placeholder:text-lg md:placeholder:text-xl"
                />
              </div>
              <div>
                <textarea
                  required
                  type="text"
                  name="message"
                  value={contactData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="text-lg w-full bg-[rgba(255,255,255,0.03)] border border-white rounded h-40 md:text-2xl lg:h-28 px-6 pt-3 font-normal text-gray-50 placeholder:text-slate-500 placeholder:text-lg md:placeholder:text-xl"
                />
              </div>
              <div className="w-3/5 mx-auto">
                <button
                  type="submit"
                  className="w-full h-12 md:h-16 md:text-2xl text-gray-50 font-normal rounded-md bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple "
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="text-center mt-10 md:mt-14 lg:hidden">
              <p className="text-getlinkedai_fuchsia font-normal text-sm md:text-xl">
                Share on
              </p>
              <div className="flex justify-center gap-3 md:gap-4 bg-red-20 mt-1 md:mt-2">
                <div className="w-5 h-5 md:w-8 md:h-8">
                  <img src={instagram} className="w-full h-full" />
                </div>
                <div className="w-3 h-3 md:w-6 md:h-6 mt-1">
                  <img src={twitter} className="w-full h-full" />
                </div>
                <div className="w-2 h-4 md:w-4 md:h-7">
                  <img src={facebook} className="w-full h-full" />
                </div>
                <div className="w-5 h-5 md:w-8 md:h-8">
                  <img src={linked_in} className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
