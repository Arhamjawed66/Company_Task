import React from 'react';

const sectionData = [
  {
    title: 'Shooting Stars',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    iconPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
  },
  {
    title: 'The Catalyzer',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    iconPath: 'M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12',
  },
  {
    title: 'Neptune',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    iconPath: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2',
  },
  {
    title: 'Melanchole',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    iconPath: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7',
  },
  {
    title: 'Bunker',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    iconPath: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z',
  },
  {
    title: 'Ramona Falls',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
];

const Section10Card = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto max-w-[1000px] ">
      

        <div className="flex flex-wrap -m-4">
          {sectionData.map((item, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#F0F0F0] text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d={item.iconPath} />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Section10Card;
