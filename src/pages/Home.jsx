import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getlinked from '../images/getlinked.png';

import left_purple_lens_flare from '../images/left_Purple-Lens-Flare.png';
import right_purple_lens_flare from '../images/right_Purple-Lens-Flare.png';
import Igniting_a_revolution from '../images/Igniting_a_revolution.png';
import purple_strand from '../images/purple_strand.png';
import chain from '../images/chain.png';
import idea_bulb from '../images/idea_bulb.png';
import banger from '../images/banger.png';
import white_star from '../images/white_star.png';
import white_star_3x from '../images/white_star_3x.png';
import gray_star from '../images/gray_star.png';
import gray_star_3x from '../images/gray_star_3x.png';
import sparkle_ball from '../images/sparkle_ball.png';
import vr_man from '../images/vr_man.png';
import the_big_idea from '../images/the_big_idea.png';
import spiral_arrow from '../images/spiral_arrow.png';
import purple_star from '../images/purple_star.png';
import purple_star_3x from '../images/purple_star_3x.png';
import gra_star_3x from '../images/gra_star_3x.png';
import sitting_woman from '../images/sitting_woman.png';
import pie_chart from '../images/pie_chart.png';
import add from '../images/add.png';
import thinking_man from '../images/thinking_man.png';
import question_mark from '../images/question_mark.png';
import trophy_cup from '../images/trophy_cup.png';
import gold_medal from '../images/gold_medal.png';
import silver_medal from '../images/silver_medal.png';
import bronze_medal from '../images/bronze_medal.png';
import liberty from '../images/liberty.png';
import liberty_company from '../images/liberty_company.png';
import white_crown from '../images/white_crown.png';
import paybox from '../images/paybox.png';
import whisper_logo from '../images/whisper_logo.png';
import check_terms from '../images/check_terms.png';
import man_lock from '../images/man_lock.png';
import shield_lock from '../images/shield_lock.png';
import linked_in from '../images/linked_in.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import location from '../images/location.png';
import call from '../images/call.png';
import Timeline from "../components/Timeline.jsx";
import extra_dark_layer from '../images/extra_dark_layer.png';
import SideBar from "../components/SideBar";
import Header from "../components/Header";


const timeline = [
	{ "events": "Hackathon Announcement ", "details": " The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register", "date": " November 18, 2023" },
	{ "events": "Teams Registration begins ", "details": " Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register", "date": " November 18, 2023" },
	{ "events": "Teams Registration ends ", "details": "Interested Participants are no longer Allowed to register ", "date": " November 18, 2023" },
	{ "events": "Announcement of the accepted teams and ideas ", "details": "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced ", "date": " November 18, 2023" },
	{ "events": "Getlinked Hackathon 1.0 Offically Begins ", "details": "Accepted teams can now proceed to build their ground breaking skill driven solutions ", "date": " November 18, 2023" },
	{ "events": "Demo Day ", "details": "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day ", "date": " November 18, 2023" }
];

const FAQs = [ 
	"Can I work on a project I started before the hackathon?", 
	"What happens if I need help during the hackathon? ",
	"What happens if I don't have an idea for a project?", 
	"Can I join a team or do I have to come with one?",
	"What happens after the hackathon ends", 
	"Can I work on a project I started before the hackathoon?"
]

function Home({sideNav, setSideNav, handleSideBarScroll}) {

	useEffect(()=> {
		window.scrollTo(0, 0);
		setSideNav(false);
		let hash = window.location.hash;
		if (hash !== "") {
			hash = hash.replace("#", "");
			handleSideBarScroll(hash);
		}
	}, [])
	

	const judingCriteria = [
		{"title": "Innovation and Creativity:", "content": "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features. "},
		{"title": "Functionality:", "content": "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution. "},
		{"title": "Impact and Relevance:", "content": "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits. "},
		{"title": "Technical Complexity:", "content": "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution. "},
		{"title": "Adherence to Hackathon Rules:", "content": "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements. "}
	]


	return (
		<div className="relative :bg-red-300">
			{ sideNav && <SideBar setSideNav={setSideNav} handleSideBarScroll={handleSideBarScroll} /> }

			<div>
				<Header setSideNav={setSideNav} handleSideBarScroll={handleSideBarScroll} />
			</div>

			<div className="relative bg-getlinkedai_bg">
				<div className="absolute -top-10">
					<img src={left_purple_lens_flare} />
				</div>

				<div className="relative text-center mx-auto pt-8 bg-red-20 lg:pt-5">
					{/* <div className="relative"> */}
					<div className="relative w-full mx-auto bg-red-20">
						<div className="relative w-[17rem] mx-auto bg-red-30 lg:w-full">
							<p className="bg-red-20  text-white text-center text-[.9rem] font-bold italic lg:text-[2rem] lg:px-14 lg:text-right">Igniting a Revolution in HR Innovation</p>
							<div className="absolute right-[3%] top-6 w-24 lg:w-40 lg:top-11 lg:right-14">
								<img src={purple_strand} className="w-full" />
							</div>
						</div>
						
					</div>
				</div>

				<div className="lg:flex bg-red-30 lg:h-[80vh]">
				{/* getlinked Tech */}
					<div className="relative w-[90%] mx-auto mt-14 text-center bg-red-20 lg:w-[60%] lg:text-left lg:pl-28 lg:mt-32">
						<div className="relative bg-red-20">
							<div className="relative w-72 mx-auto bg-red-40 lg:w-full">
								<p className=" text-gray-50 text-4xl font-bold font-['Clash Display'] lg:text-[4.3rem]">getlinked Tech</p>
								<div className="lg:absolute lg:w-10 lg:h-14 lg:right-[10%] lg:-top-12 bg-red-30 ">
									<div className="absolute w-5 h-6 -top-[20%] right-[13%] bg-red-20 lg:w-10 lg:h-12 lg:-left-[5.5rem] lg:top-2">
										<img src={idea_bulb} className="w-full h-full" />
									</div>
									{/* <div className="absolute w-5 h-6 -top-2 right-9 bg-red-20">
										<img src={idea_bulb} className="w-full h-full" />
									</div> */}
								</div>
								
							</div>
							
							
							<div className="absolute -top-5 left-28">
								<img src={white_star} />
							</div>
							<div className="absolute -top-3 right-6">
								<img src={gray_star} />
							</div>
						</div>
						

						<div className="relative flex justify-center lg:justify-start lg:mt-8" >
							<div className="text-4xl inline-block lg:text-[4.3rem] bg-red-20">
								<span className="text-gray-50 font-bold font-['Clash Display'] ">Hackathon </span>
								<span className="text-fuchsia-500 font-bold font-cabin lg:font-extrabold">1.0</span>
							</div>

							<div className="flex align-middle mt-1 bg-red-20 lg:-mt-3">
								<div className="mt-1">
									<img src={chain} className="w-8 h-8 lg:w-16 lg:h-16" />
								</div>
								<div  className="relative last:mt-2">
									<img src={banger} className="w-7 h-7 lg:w-14 lg:h-14" />
								</div>
							</div>
							
						</div>

						<div className="text-center text-gray-50 text-[.95rem] font-normal space-y-1 mt-2">
							<div className="lg:hidden font-normal">
								<p>Participate in getlinked tech Hackathon</p>
								<p>2023 stand a chance to win a Big prize</p>
							</div>
							<div className="hidden lg:block text-left text-[1.1rem] lg:text-xl lg:font-semibold lg:w-[70%]">
								<p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
							</div>
							
						</div>

						<div className="relative w-2/3 mx-auto text-center bg-red-20 my-5 lg:mx-0 lg:w-1/3">
							<div className="absolute w-2 right-0 top-[40%]">
								<img src={gray_star_3x} className="w-full h-full" />
							</div>
							<button className="w-2/3 h-12 rounded-md bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple text-gray-50 font-medium lg:w-full">
								<NavLink to="/register" className="py-3 px-10 bg-blue-20">Register</NavLink>
							</button>
						</div>

						<div className="w-[60%] mx-auto bg-red-20 flex justify-between bg-red-20 font-medium lg:mx-0 lg:w-1/3 lg:mt-16">
							<div className="flex gap-1">
								<div className="relative text-gray-50 text-4xl flex gap-1 bg-red-20">
									<p className="sofia">0</p>
									<p className="sofia">0</p>
									<div className="absolute -bottom-1 -right-4 text-gray-50 text-[.9rem]">
										<p>H</p>
									</div>
								</div>
							</div>
							<div className="flex gap-1">
								<div className="relative text-gray-50 text-4xl flex gap-1 bg-red-20">
									<p className="sofia">0</p>
									<p className="sofia">0</p>
									<div className="absolute  -bottom-1 -right-4 text-gray-50 text-[.9rem]">
										<p>M</p>
									</div>
								</div>
							</div>
							<div className="flex gap-1">
								<div className="relative text-gray-50 text-4xl flex gap-1 bg-red-20">
									<p className="sofia">0</p>
									<p className="sofia">0</p>
									<div className="absolute  -bottom-1 -right-3 text-gray-50 text-[.9rem]">
										<p>S</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* vr man */}
					<div className="relative bg-getlinkedai_bg mt-8 lg:w-1/2 ">
						<div className="absolute -top-3 left-[3%] w-[20rem] h-[20rem] bg-red-20 lg:w-[33rem] lg:h-[33rem] lg:left-[4%]">
							<img src={sparkle_ball} className="w-full h-full" />
						</div>
						<div className="bg-red-20 w-full h-full"> 
							<img src={vr_man} className="w-full h-full" />
						</div>
					</div>
				</div>

				<hr className="border-gray-600" />

				
				{/* the big idea */}
				<div className="w-[80%] mx-auto text-center py-16 bg-red-30 lg:flex lg:justify-between">
					<div className="lg:w-[40%] bg-red-40">
						<div className="bg-red-30 w-full flex justify-center relative text-center bg-red-30">
							<img src={the_big_idea} className="w-full h-full" />
							<div className="bg-red-40 flex flex-wrap justify-center absolute top-[45%] text-center text-gray-50 font-medium lg:text-2xl">
								<div>
									<p>The Big</p>
									<p>Idea!</p>
								</div>
							</div>
							<div className="absolute w-3 h-4 left-0 top-[5.2rem]">
								<img src={purple_star_3x} className="w-full h-full" />
							</div>
						</div>
						<div className="relative bg-red-20">
							<div className="flex justify-center mt-2 bg-red-30 lg:absolute lg:w-20 lg:left-[90%] lg:-top-12">
								<img src={spiral_arrow} className="bg-blue-20 w-8 h-8 lg:w-full lg:h-full" />
							</div>
						</div>
					</div>
					

					<div className="relative text-center mt-7 lg:w-[50%] lg:mt-20">
						<div className="absolute w-3 right-[5%] top-6">
							<img src={purple_star_3x} className="w-3 h-3" />
						</div>
						<p className="text-xl font-bold text-gray-100 lg:text-left lg:text-3xl lg:font-extrabold">Introduction to getlinked</p>
						<p className="text-getlinkedai_fuchsia font-bold text-xl lg:text-left lg:text-3xl lg:font-extrabold">techHackathon 1.0</p>
							<p className="text-gray-200 font-normal leading-7 lg:text-left lg:text-lg lg:font-semibold">
								Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as 
								day: to shape the future. Whether you're a coding genius, a design maverick, or a 
								concept wizard, you'll have the chance to transform your ideas into reality. Solving 
								real-world problems, pushing the boundaries of technology, and creating solutions 
								that can change the world, that's what we're all about!
							</p>
					</div>
				</div>


				<hr className="border-gray-600" />
				

				{/* Sitting woman */}
				<div className="bg-red-30 relative">
					<div className="absolute -top-12">
						<img src={left_purple_lens_flare} className="w-full"  />
					</div>
					<div className="absolute top-48 right-0">
						<img src={right_purple_lens_flare}  />
					</div>
					<div className="relative z-10 w-[80%] mx-auto text-center py-16 bg-red-30 lg:flex lg:flex-row-reverse lg:justify-between lg:pt-16 lg:pb-12">
						<div className="bg-red-30 flex justify-center relative bg-red-40 w-full lg:w-[40%]">
							<div className="bg-blue-40 -mt-12 w-full">
								<img src={sitting_woman} className="w-full h-full" />
							</div>
							
							<div className="absolute w-3 h-4 bottom-[55%] left-0">
								<img src={white_star_3x} className="w-full h-full" />
							</div>
						</div>

						<div className="relative text-center mt-3 lg:w-[50%] lg:mt-16">
							<p className="text-xl font-bold text-gray-100 lg:text-left lg:text-3xl lg:font-extrabold">Rules and</p>
							<p className="text-getlinkedai_fuchsia font-bold text-xl lg:text-left lg:text-3xl lg:font-extrabold">Guidelines</p>
							<div className="relative w-full bg-red-30">
								<p className="text-gray-200  font-normal leading-7 lg:text-left lg:text-xl lg:font-semibold">
									Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as 
									day: to shape the future. Whether you're a coding genius, a design maverick, or a 
									concept wizard, you'll have the chance to transform your ideas into reality. Solving 
									real-world problems, pushing the boundaries of technology, and creating solutions 
									that can change the world, that's what we're all about!
								</p>
								<div className="absolute w-3 h-4 -right-2 -top-4">
									<img src={gray_star_3x} className="w-full h-full" />
								</div>
								<div className="absolute w-3 -bottom-9 left-[20%]">
									<img src={white_star_3x} className="w-full h-full"/>
								</div>
							</div>
							
						</div>
					</div>
				</div>

				<hr className="border-gray-600" />
				
				
				

				{/*pie chart  */}
				<div id="Overview" className="relative bg-red-30">
					<div className="absolute left-0 top-16">
						<img src={left_purple_lens_flare} />
					</div>
					<div className="absolute right-0 bottom-1">
						<img src={right_purple_lens_flare} />
					</div>

					{/* <img src={pie_chart} className="w-full h-full"/> */}
					<div className="relative w-[80%] mx-auto text-center py-16 bg-red-20 lg:flex lg:w-[90%]">
						<div className="lg:w-[50%] bg-blue-20 lg:mt-24">
							<div className="absolute top-5 left-[41%]">
								<img src={purple_star_3x} className="w-4 h-5" />
							</div>
							<div className="bg-red-30 w-full  flex justify-center relative bg-red-40 lg:h-full">
								<div className="relative lg:w-full lg:h-[30rem]">
									<img src={pie_chart} className="w-full h-full"/>
								</div>
								<div className="absolute w-3 top-[52%] left-[56%]">
									<img src={gray_star_3x} className="w-full h-full"  />
								</div>
							</div>
						</div>
						

						<div className="relative text-center mt-3 lg:w-[50%] bg-red-40">
							<p className="text-xl font-bold text-gray-100 lg:text-3xl lg:font-extrabold lg:text-left">Judging Criteria</p>
							<p className="text-getlinkedai_fuchsia font-bold text-xl lg:text-3xl lg:font-extrabold lg:text-left">Key attributes</p>
							<div className="relative w-full bg-red-30 mt-5 space-y-">
								<div className="absolute bottom-6 right-1">
									<img src={white_star_3x} className="w-3 h-3" />
								</div>

								<div className="lg:space-y-3">
									{
										judingCriteria.map(items => {
											return (
												<div key={items.title} className="text-center lg:text-left">
													<span className="text-[rgba(255,38,185,1)] font-medium text-[1rem]">{items.title}</span>
													<span className="text-gray-200 font-normal text-[.9rem] ml-1 leading-6">{items.content}</span>
												</div>
											)
										})
									}
								</div>

								<div className="w-full bg-red-40 lg:float-left">
									<div className="relative w-2/3 mx-auto text-center bg-red-20 lg:w-1/3 lg:mx-0 lg:mt-7">
										<button className="w-2/3 h-10 rounded-lg  bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple text-gray-50 font-normal lg:w-full">Read More</button>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>


				<hr className="border-gray-600" />

				{/* Frequent;y ask question */}
				<div id="FAQs" className="relative w-full">
					<div className="absolute w-5 h-6 top-8 left-[15%]">
						<img src={purple_star_3x} className="w-full h-full" />
					</div>
					<div className="relative w-[80%] mx-auto text-center py-10 bg-red-30 lg:flex lg:justify-between">
						<div className="lg:w-2/5 bg-red-20 lg:mt-16">
							<div>
								<p className="text-xl font-bold text-gray-100 lg:text-left lg:text-3xl lg:font-extrabold">Frequently Ask</p>
								<p className="text-getlinkedai_fuchsia font-bold text-xl lg:text-left lg:text-3xl lg:font-extrabold">Question</p>
								<p className="text-gray-200 leading-6 mt-3 font-bold text-[.9rem] lg:text-left">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
							</div>
							<div className="space-y-5 mt-12">
								{ FAQs.map(items => 
										<button key={items} className="relative w-full flex flex-wrap justify-between bg-red-20 pb-1 border-b-2 border-[rgba(212,52,254,1)]">
											<p className="text-[.9rem] font-normal text-gray-50 w-[88%] bg-red-40 text-left">{items}</p>
											<div className="w-1/ bg-blue-30 absolute bottom-4 right-0">
												<img src={add} className="w-3 h-3" />
											</div>
										</button>
									)
								}
							</div>
						</div>
						

						<div className="relative w-full mt-28 bg-red-40 lg:w-[50%] lg:mt-14">
							<div className="absolute w-11 left-[32%] -top-12 bg-red-10">
								<div className="absolute">
									<img src={question_mark} className="h-14" />
								</div>
								<div className="">
									<img src={question_mark} className="h-14" />
								</div>
							</div>
							<div className="absolute -top-3 right-[5.6rem] w-10 bg-red-20">
								<div className="">
									<img src={question_mark} className="h-10" />
								</div>
							</div>
							<div className="absolute -top-4 left-8 w-10 bg-red-20">
								<div className="">
									<img src={question_mark} className="h-10" />
								</div>
							</div>
							<div className="absolute -top-7 left-[8.5rem] bg-red-20">
								<div>
									<img src={purple_star_3x} className="w-3 h-3" />
								</div>
							</div>
							<div className="absolute top-20 left-14 bg-red-20">
								<div>
									<img src={purple_star_3x} className="w-2 h-3" />
								</div>
							</div>
							<div className="absolute top-36 left-4 bg-red-20">
								<div>
									<img src={gray_star_3x} className="w-3 h-3" />
								</div>
							</div>
							<div className="absolute -bottom-3 right-12 bg-red-20">
								<div>
									<img src={white_star_3x} className="w-5 h-6" />
								</div>
							</div>
							
							<div>
								<img src={thinking_man} className="w-full h-full" />
							</div>
						</div>
					</div>
				</div>

				<hr className="border-gray-600" />

				{/*Timeline  */}
				<div id="Timeline" className="relative w-full bg-getlinkedai_bg ">
					<div  className="relative w-[80%] mx-auto text-center py-10 bg-red-30">
						<div className="space-y-3 bg-red-20 lg:w-[50%] lg:mx-auto">
							<p className="text-xl font-bold text-gray-50 lg:text-3xl lg:font-extrabold">Timeline</p>
							<p className="text-gray-200 font-normal text-[.9rem] ml-1 leading-7 lg:text-xl">Here is the breakdown of the time we anticipate using for the upcoming events.</p>
						</div>

						<ul className="relative w-full space-y-7 mt-14 bg-red-10">
							<div className="absolute w-4 -top-10 left-[15%]">
								<img src={purple_star_3x} className="w-full h-full" />
							</div>
							<div className="absolute w-3 top-[23rem] right-[10%]">
								<img src={white_star_3x} className="w-3 h-3" />
							</div>
							<div className="absolute w-4 -bottom-8 -left-5">
								<img src={gray_star_3x} className="w-full h-full" />
							</div>
							{ timeline.map((items, index ) => {
								return (
									<Timeline key={items.events} id={index + 1} events={items.events} details={items.details} date={items.date} />
								)
							}) }
						</ul>
					</div>
				</div>

				{/* prizes and rewards */}
				<div className="relative w-full bg-[rgba(13,4,39,0.8)] mt-10">
					<div className="absolute opacity-30">
						<img src={extra_dark_layer} />
					</div>
					<div className="absolute">
						<img src={left_purple_lens_flare} />
					</div>
					<div className="absolute right-0 -bottom-10">
						<img src={right_purple_lens_flare} />
					</div>
					
					<div className="relative w-[80%] mx-auto text-center py-10  lg:w-full lg:pb-20">
						<div className="relative bg-red-20 lg:w-[40%] lg:float-right lg:text-left lg:mr-[10%]">
							<div className="absolute w-2">
								<img src={gra_star_3x} className="w-full h-full" />
							</div>
							<div className="absolute w-2 right-[20%] top-[20%]">
								<img src={gra_star_3x} className="w-full h-full" />
							</div>
							<p className="text-xl font-bold text-gray-100 lg:text-3xl lg:font-extrabold">Prizes and</p>
							<p className="text-getlinkedai_fuchsia font-bold text-xl lg:text-3xl lg:font-extrabold">Rewards</p>
							<p className="text-gray-200 leading-7 mt-1 font-sans text-[.9rem] font-normal lg:text-lg">Highlight of the prizes or rewards for winners and for participants.</p>
						</div>

						<div className="relative lg:flex lg:flex-wrap lg:justify-evenly lg:w-full bg-blue-20 lg:mt-64">
							<div className="relative mt-10 lg:w-[35%] lg:h-full bg-red-40 lg:-mt-32">
								<div className="absolute w-3 bottom-0 left-5">
									<img src={white_star_3x} className="w-full h-full" />
								</div>
								<img src={trophy_cup} className="w-full h-full " />
							</div>
							<div className="relative bg-yellow-40 flex flex-wrap justify-between h-36 mt-28 lg:w-[50%] lg:mt-24">
								<div className="absolute w-3 right-0 -top-[50%]">
									<img src={white_star_3x} className="w-full h-full" />
								</div>
								<div className="absolute w-3 right-[30%] -bottom-[15%]">
									<img src={gray_star_3x} className="w-full h-full" />
								</div>
								{/* silver medal */}
								<div className="bg-blue-40 relative w-[30%] h-[85%] bg-[rgba(212,52,254,0.12)] border border-getlinkedai_fuchsia rounded lg:h-52">
									<div className="relative ">
										<div className="absolute text-center w-full -top-12 left-0 bg-red-20 lg:w-44 lg:-top-20 lg:left-2">
											<div className="">
												<img src={silver_medal} className="w-full h-full" />	
											</div>
											
											<div className="mt-1 text-[.9rem] flex flex-col justify-center text-gray-50 font-bold lg:text-xl">
												<p>2nd</p>
												<p>Runner</p>
												<p className="text-getlinkedai_fuchsia font-bold">N300,000</p>
											</div>
										</div>
									</div>
								</div>
								{/* gold medal */}
								<div className="bg-blue-40 relative w-[30%] h-[90%] bg-[rgba(144,58,255,0.12)] border border-[rgba(144,58,255,1)] rounded-lg lg:h-[14rem]">
									<div className="relative ">
										<div className="absolute text-center w-[8rem] -top-20 -left-6 bg-red-20 lg:w-[17rem] lg:-top-[10rem] lg:-left-[3rem]">
											<div className="">
												<img src={gold_medal} className="w-full h-full" />	
											</div>
											
											<div className="mt-1 text-[.9rem] flex flex-col justify-center text-gray-50 font-bold lg:text-xl">
												<p>1st</p>
												<p>Runner</p>
												<p className="text-getlinkedai_fuchsia font-bold">N400,000</p>
											</div>
										</div>
									</div>
								</div>
								{/* bronze medal */}
								<div className="bg-blue-40 relative w-[30%] h-[85%] bg-[rgba(212,52,254,0.12)] border border-getlinkedai_fuchsia rounded lg:h-52">
									<div className="relative ">
										<div className="absolute text-center w-full -top-12 left-0 bg-red-20 lg:w-44 lg:-top-20 lg:left-2">
											<div className="">
												<img src={bronze_medal} className="w-full h-full" />	
											</div>
											
											<div className="mt-1 text-[.9rem] flex flex-col justify-center text-gray-50 font-bold lg:text-xl">
												<p>3rd</p>
												<p>Runner</p>
												<p className="text-getlinkedai_fuchsia font-bold">N150,000</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


				{/* partners */}
				<div className="relative w-full bg-getlinkedai_bg">
					<div className="absolute  -left-20 -top-28">
						<img src={left_purple_lens_flare} />
					</div>
					<div className="relative z-10 w-[80%] mx-auto text-center pt-10 pb-28 bg-red-30">
						<div>
							<p className="text-xl font-bold text-gray-100 lg:font-extrabold lg:text-3xl">Partners and Sponsors</p>
							{/* <p className="text-getlinkedai_fuchsia font-semibold text-xl">Rewards</p> */}
							<p className="text-gray-200 leading-5 mt-1 font-sans text-[.8rem] font-normal">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
						</div>

						<div className="relative py-6 px-12 bg-[rgba(255, 255, 255, 0.01)] border border-getlinkedai_fuchsia mt-10 rounded lg:p-24">
							<div className="absolute w-2 top-1 left-[5%]">
								<img src={purple_star_3x} className="w-full h-full" />
							</div>
							<div className="absolute w-2 bottom-1 right-[10%]">
								<img src={white_star_3x} className="w-full h-full" />
							</div>
							<div className="flex flex-col w-full bg-red-20 ">
								{/* top row */}
								<div className="flex flex-wrap justify-between bg-red-30 h-7">
									<div className="relative w-[25%] h-full bg-red-30 lg:h-auto">
										<div className="flex flex-wrap justify-center">
											<div className="absolute bg-blue-40 h-full w-[60%] mx-auto">
												<img src={liberty} className="w-full h-full" />
											</div>
										</div>
									</div>
									<div className="relative w-[40%] h- border-r-[.15rem] border-l-[.15rem] border-getlinkedai_fuchsia bg-red-30">
										<div className="flex flex-wrap justify-center mt-3">
											<div className="absolute bottom-3 bg-blue-40 w-[70%] mx-auto">
												<img src={liberty_company} className="w-full h-full"  />
											</div>
										</div>
									</div>
									<div className="relative w-[25%] h-full bg-red-30 lg:h-auto">
										<div className="flex flex-wrap justify-center">
											<div className="absolute bg-blue-40 bottom-1 w-[60%] mx-auto">
												<img src={white_crown} className="w-full h-full" />
											</div>
										</div>
									</div>
								</div>
								{/* middle row */}
								<div className="flex flex-wrap justify-between h-4">
									<div className="w-[27%] h-[16%] bg-getlinkedai_fuchsia mt-1"></div>
									<div className="w-[6%] rounded-full bg-red-40"></div>
									<div className="w-[29%] h-[16%] bg-getlinkedai_fuchsia mt-1"></div>
									<div className="w-[6%] rounded-full bg-red-40"></div>
									<div className="w-[27%] h-[16%] bg-getlinkedai_fuchsia mt-1"></div>
								</div>
								{/* bottom row */}
								<div className="flex flex-wrap justify-between bg-red-20 h-7">
									<div className="relative w-[25%] h- bg-red-30">
										<div className="flex flex-wrap justify-center">
											<div className="absolute bg-blue-40 w-[60%] mx-auto mt-1 ml-2">
												<img src={whisper_logo}  className="w-full h-full" />
											</div>
										</div>
									</div>
									<div className="relative w-[40%] h- border-r-[.15rem] border-l-[.15rem] border-getlinkedai_fuchsia bg-red-30">
										<div className="flex flex-wrap justify-center mt-3">
											<div className="absolute top-0 bg-blue-40 w-[70%] mx-auto">
												<img src={paybox} className="w-full h-full"  />
											</div>
										</div>
									</div>
									<div className="w-[25%] h- bg-red-30">
										<div className="relative">
											<div className="relative text-[.5rem] bg-blue-20 mt-1">
												<span className="text-white">Vuzual</span><span className="text-red-600 ml-1 font-bold">Plus</span>
												<div className="absolute -bottom-1 -right-0 text-[.2rem] text-gray-50 font-medium">
													<p>Design Studios</p>
												</div>
											</div>
											
										</div>
									</div>
									{/* <img src={liberty} /> */}
								</div>
							</div>
						</div>

					</div>
				</div>

				<hr className="relative z-20 border-gray-400" />

				{/* privacy policy */}
				<div className="relative w-full bg-[rgba(20, 13, 39)]">
					<div className="absolute right-0 -top-52">
						<img src={right_purple_lens_flare} />
					</div>
					<div className="relative w-[80%] mx-auto text-center pt-16 pb-48 bg-red-30 lg:flex">
						<div className="lg:w-[50%]">
							<div className="relative lg:text-left">
								<div className="absolute w-3 right-[20%] -top-[15%]">
									<img src={gray_star_3x} className="w-full h-full"/>
								</div>
								<p className="text-xl font-bold text-gray-100 lg:font-extrabold lg:text-3xl">Privacy Policy and</p>
								<p className="text-getlinkedai_fuchsia font-bold text-xl lg:font-extrabold lg:text-3xl">Terms</p>
								<p className="text-gray-300 leading-7 mt-1 font-sans text-[.9rem] font-normal">Last updated on September 12, 2023</p>
								<p className="text-gray-200 leading-6 mt-7 font-sans text-[.9rem] font-normal">
									Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
								</p>
							</div>
							<div className="relative">
								<div className="absolute -left-36 bottom-0">
									<img src={left_purple_lens_flare} />
								</div>
								<div className="relative w-full mt-10 pt-8 pb-16 px-5 bg-[rgba(217,217,217,0.03)] border border-getlinkedai_fuchsia rounded-md lg:p-12">
									<div className="absolute w-4 -top-[5%] right-[6%]">
										<img src={purple_star_3x} />
									</div>
									
									<div className="">
										<p className="text-center leading-7 text-gray-50 text-[.9rem] font-normal lg:text-left">
											At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect,
											use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you 
											consent to the practices described in this policy.
										</p>

										<div className="space-y-6 mt-8">
											<div className="text-left font-bold text-gray-50 space-y-1">
												<p className="text-getlinkedai_fuchsia text-[.9rem]">Licensing Policy</p>
												<p className="text-gray-50 leading-6 text-[.9rem]">Here are terms of our Standard License:</p>
											</div>

											<ul className="space-y-5">
												<li className="flex gap-1 lg:justify-start lg:gap-3">
													<div className="w-2/5 mt-2 bg-red-20 lg:w-[15%]">
														< img src={check_terms} className="w-5 h-5" />
													</div>
													<p className="text-left text-gray-50 font-normal leading-6 text-[.9rem] lg:mt-1">
														The Standard License grants you a non-exclusive right to navigate and register for our event
													</p>
												</li>
												<li className="flex gap-1">
													<div className="w-2/5 mt-2 bg-red-20 lg:w-[15%]">
														< img src={check_terms} className="w-5 h-5" />
													</div>
													<p className="text-left text-gray-50 font-normal leading-6 text-[.9rem] lg:mt-1">
														You are licensed to use the item available at any free source sites, for your project developement
													</p>
												</li>
											</ul>

											<div className="relative w-2/3 mx-auto text-center bg-red-20">
												<button className="w-2/3 h-10 rounded-md  bg-gradient-to-r from-pink-500 to-getlinkedai_light_purple text-gray-50 font-normal">Read More</button>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute z-30 bottom-52 -left-6">
									<img src={purple_star_3x} className="w-4 h-6" />
								</div>
							</div>
						</div>

						<div className="relative text-center bg-red-10 mt-20 lg:w-[40%]">
							<div className="absolute w-[80%] top-[5.2rem] right-[15%] bg-red-20">
								<img src={man_lock} />
								<div className="absolute w-3 bottom-[15%] left-[15%]">
									<img src={white_star_3x} className="w-full h-full" />
								</div>
								<div className="absolute w-2 bottom-[15%] -right-[2%]">
									<img src={gray_star_3x} className="w-full h-full" />
								</div>
							</div>
							<div className="relative bg-blue-20 w-[75%] mx-auto lg:w-full">
								<div className="absolute w-4 top-[24%] -left-[15%]">
									<img src={purple_star_3x} className="w-full h-full" />
								</div>
								<div className="absolute w-2 top-[30%] right-[20%]">
									<img src={white_star_3x} className="w-full h-full" />
								</div>
								<img src={shield_lock} className="w-full h-full" />
							</div>
						</div>
					</div>
				</div>

				{/* footer */}
				<div className="relative bg-[rgba(16,11,32,1)] lg:pb-14">
					<div className="absolute top-[8rem] left-3">
						<img src={white_star_3x} className="w-3 h-3" />
					</div>
					<div className="absolute w-4 top-[25rem] left-[52%]">
						<img src={gray_star_3x} className="w-4 h-5" />
					</div>
					<div className="absolute w-4 bottom-52 right-[15%]">
						<img src={white_star} className="" />
					</div>
					<div className="absolute w-4 bottom-24 left-[32%]">
						<img src={purple_star_3x} className="w-2 h-3" />
					</div>

					<div className="relative w-[80%] mx-auto text-left pt-10 pb-14 bg-red-30 lg:flex lg:flex-wrap lg:justify-between lg:pb-0">
						<div className="lg:w-[40%] bg-blue-20">
							<div className="font-bold text-2xl text-left lg:font-extrabold lg:text-3xl">
								<span className="text-white">get</span><span className="text-getlinkedai_fuchsia">linked</span>
							</div>
							<p className="text-gray-50 text-[.9rem] font-normal mt-5 lg:text-[1rem] lg:font-normal lg:mt-3">
							Getlinked Tech Hackathon is a technology innovation program established by a group 
							of organizations with the aim of showcasing young and talented individuals in the field of technology
							</p>

							<div className="flex gap-3 bg-red-30 w-[80%] my-10 text-[.9rem] lg:mt-20 lg:my-0">
								<p className="text-gray-50 font-normal">Terms of Use</p>
								<div className="w-[1%] bg-getlinkedai_fuchsia"></div>
								<p className="text-gray-50 font-normal">Privacy Policy</p>
							</div>
						</div>
						

						<div className="relative lg:w-[50%] lg:flex lg:justify-between bg-yellow-20 lg:mt-[3%]">
							<div className=" bg-red-20 lg:bottom-0 lg:w-56">
								<div className="space-y-3 lg:w-full bg-red-20">
									<p className="text-getlinkedai_fuchsia font-semibold text-[1.1rem]">Useful Links</p>
									<p className="text-white font-normal text-base">Overview</p>
									<p className="text-white font-normal text-base">Timeline</p>
									<p className="text-white font-normal text-base">FAQs</p>
									<p className="text-white font-normal text-base">Register</p>

									<div className="relative flex bg-red-20 gap-3 mb-20">
										<p className=" text-base text-getlinkedai_fuchsia font-semibold mt-2">Follow us</p>
										<div className="flex gap-3 bg-red-20 mt-1 ml-4">
											<div className="w-7 h-7">
												<img src={instagram} className="w-full h-full"/>
											</div>
											<div className="w-5 h-5 mt-1">
												<img src={twitter} className="w-full h-full" />
											</div>
											<div className="w-3 h-6">
												<img src={facebook} className="w-full h-full" />
											</div>
											<div className="w-7 h-7">
												<img src={linked_in} className="w-full h-full" />
											</div>
										</div>
									</div>
								</div>
							</div>
							

							<div className=" bg-red-20 lg:w-52 lg:right-0 lg:top-0">
								<div className="relative mt-20 bg-red-40 lg:w-full lg:mt-0">
									<p className="text-getlinkedai_fuchsia font-semibold text-[1.1rem]">Contact Us</p>
									<ul className="space-y-4 mt-2">
										<li className="flex gap-5">
											<div className="w-4 h-4 mt-1">
												<img src={call} className="w-full h-full" />
											</div>
											<p className="text-left text-white font-normal text-[.9rem]">+234  6707653444</p>
										</li>
										<li className="flex gap-5">
											<div className="w-4 h-4 mt-1">
												<img src={location} className="w-full h-full" />
											</div>
											<div className="text-left text-white font-normal text-[.9rem]">
												<p>27, Alara Street</p>
												<p>Yaba 100012</p>
												<p>Lagos State</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							
						</div>
						

						<p className="text-gray-50 font-sm text-center mt-16 font-normal text-sm lg:w-full lg:text-xl">All rights reserved. © getlinked Ltd.</p>

					</div>
				</div>


			</div>

		</div>
	)
}

export default Home;
