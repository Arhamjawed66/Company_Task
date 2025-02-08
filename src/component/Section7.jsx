import { Button } from '@mui/material';
import React from 'react';

const Section7 = () => {
  return (
    <section className="text-gray-600 body-font relative">
      {/* Background Div */}
      <div
        className="hidden sm:block absolute bg-sky-200 rounded-[20px] md:rounded-[40px] lg:rounded-[60px]"
        style={{
          width: '1000px',
          height: '150px',
          top: '400px',
          left: '180px',
        }}
      ></div>

      <div className="container mx-auto max-w-[1000px] px-5 py-24 md:flex-row flex-col items-center flex relative z-10">
        {/* Left Section - Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded  h-90 w-80"
            alt="hero"
            src="/section4/Untitled-1 1.png"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            Join The Team Of
            <br className="hidden lg:inline-block" />
            Our <span className="text-blue-600">Successful
              <br className="hidden lg:inline-block" />
              Traders
            </span>
          </h1>

          <p className="mb-8 leading-relaxed text-gray-700">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed
            tacos poke beard tote bag.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="contained" color="primary" sx={{ borderRadius: '100px' }}>
              Learn More
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: 'black',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '100px',
                fontWeight: 'bold',
              }}
            >
              Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
