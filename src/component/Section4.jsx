import React, { useState } from 'react';

const Section4 = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
 
    return (
        <section className="text-black body-font ">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
                style={{
                    maxWidth: "1000px",
                }}
            >
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Know Your <span className='text-blue-600'>Trading
                            <br className="hidden lg:inline-block" />
                            Objectives</span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                        plant cold-pressed tacos poke beard tote bag.
                    </p>
                    <div className="flex justify-center gap-4">
                        <div className='gap-4'>
                        <h2 className='font-bold text-black text-lg ml-3  '>Currency:</h2>

                    <select
                    
              value={selectedOption}
              onChange={handleChange}
              className=" p-2 border border-gray-300 rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="" disabled>
                USD
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            </div>
                        <div>
                        <h2 className='font-bold text-black text-lg ml-3  '>Risk:</h2>

                    <select
                    
              value={selectedOption}
              onChange={handleChange}
              className=" p-2 border border-gray-300 rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="" disabled>
                Risk
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            </div>
                       <div> 
                        <h2 className='font-bold text-black text-lg ml-3  '>Balance:</h2>

                    <select
                    
              value={selectedOption}
              onChange={handleChange}
              className=" p-2 border border-gray-300 rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="number" disabled>
                Balance
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            </div>
                        



                       
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="/section4/1.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default Section4;