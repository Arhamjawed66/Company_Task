import React from "react";

const Section2 = () => {
  const data = [
    {
      img: "/Section2/Group 51.png",
      title: "$5345",
      subtitle: "Subtitle 1",
    },
    {
      img: "/Section2/Group 52.png",
      title: "$889",
      subtitle: "Subtitle 2",
    },
    {
      img: "/Section2/Group 53.png",
      title: "$8797",
      subtitle: "Subtitle 3",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto px-5 py-24"
          style={{
            width: "100%",
            maxWidth: "1000px", // Same max-width as the last component
            padding: "20px",
          }}
        >
          <div className="flex flex-col md:flex-row w-full">
            {/* Left Side: Cards Section (50%) */}
            <div className="w-full md:w-1/2 flex flex-wrap">
              {data.map((item, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                  <div className="bg-[#F0F0F0] p-4 rounded-lg shadow-md">
                    <img
                      className="h-60 rounded-lg w-full object-cover object-center mb-4"
                      src={item.img}
                      alt={item.subtitle}
                    />
                    <h3 className="tracking-widest text-indigo-500 font-bold text-2xl text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Description Section (50%) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-left">
              <h3 className="font-bold text-4xl mb-4">
                Trade For{" "}
                <span className="text-blue-500">
                  Modern Pop<br /> Trading
                </span>{" "}
                Firm
              </h3>
              <p className="text-black max-w-md text-xl font-semibold">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom
                neutra air plant cold-pressed tacos poke beard tote bag.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
