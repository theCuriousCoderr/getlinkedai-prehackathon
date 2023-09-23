import React from 'react';

function Timeline({id, events, details, date}) {
    
  return (
    <div>
        <div className="relative w-full flex flex-wrap justify-between bg-red-10 lg:hidden">
            {/* stick-and-ball */}
            <div className="relative w-[2%] bg-red-30 flex flex-col text-center justify-start align-middle gap-2">
                <div className="h-[85%] w-1 bg-[#D434FE] ml-2"></div>
                <div className="w-5 h-5 text-center rounded-full bg-gradient-to-r from-getlinkedai_fuchsia to-getlinkedai_light_purple ">
                    <p className="text-gray-50 text-sm font-bold">{id}</p>
                </div>
            </div>

            <div className="w-[90%] text-sm bg-red-30 flex flex-col gap-2">
                <div className="space-y-1">
                    <p className="text-getlinkedai_fuchsia font-bold text-left">{events}</p>
                    <p className="text-gray-100 leading-6 text-left">
                    {details}
                    </p>
                </div>
                <div>
                    <p className="text-[#D434FE] font-bold text-left">{date}</p>
                </div>
            </div>
        </div>
        { (id%2)!==0 ? 
            <div className="hidden relative w-full lg:flex flex-wrap justify-between bg-red-10">
                <div className="space-y-1 bg-red-20 lg:w-[40%] lg:mt-10">
                    <p className="text-getlinkedai_fuchsia font-bold text-left lg:text-right lg:text-lg">{events}</p>
                    <p className="text-gray-100 leading-6 text-left lg:text-right lg:text-lg">
                    {details}
                    </p>
                </div>
                {/* stick-and-ball */}
                <div className="relative w-[2%] bg-red-30 flex flex-col text-center justify-start align-middle gap-2">
                    <div className="h-[78%] w-[0.3rem] bg-[#D434FE] ml-4"></div>
                    <div className="w-9 h-9 text-center rounded-full bg-gradient-to-r from-getlinkedai_fuchsia to-getlinkedai_light_purple ">
                        <p className="text-gray-50 text-2xl font-bold">{id}</p>
                    </div>
                </div>
                <div className='relative lg:w-[40%] bg-red-10 lg:flex lg:align-bottom'>
                    <div className='absolute bottom-0 bg-red-30 lg:h-10'>
                        <p className="text-[#D434FE] font-bold text-left lg:text-lg">{date}</p>
                    </div>
                </div>
            </div>
        : 
        <div className="hidden relative w-full lg:flex lg:flex-row-reverse flex-wrap justify-between bg-red-10">
            <div className="space-y-1 lg:w-[40%] lg:mt-10">
                <p className="text-getlinkedai_fuchsia font-bold text-left lg:text-lg">{events}</p>
                <p className="text-gray-100 leading-6 text-left lg:text-lg">
                {details}
                </p>
            </div>
            {/* stick-and-ball */}
            <div className="relative w-[2%] bg-red-30 flex flex-col text-center justify-start align-middle gap-2">
                <div className="h-[78%] w-[0.3rem] bg-[#D434FE] ml-4"></div>
                <div className="w-9 h-9 text-center rounded-full bg-gradient-to-r from-getlinkedai_fuchsia to-getlinkedai_light_purple ">
                    <p className="text-gray-50 text-2xl font-bold">{id}</p>
                </div>
            </div>
            <div className='relative lg:w-[40%] bg-red-10 lg:flex lg:justify-end lg:align-bottom '>
                <div className='absolute bottom-0 bg-red-30 lg:h-10'>
                    <p className="text-[#D434FE] font-bold text-left bg-red-10 lg:text-lg">{date}</p>
                </div>
            </div>
        </div>
        }
       
    </div>
   
    
  )
}

export default Timeline;