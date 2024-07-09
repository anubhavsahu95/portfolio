import React from "react";
import guess from "../assets/portfolio/guess.png";
import pass from "../assets/portfolio/pass.png";
import sort from "../assets/portfolio/sort.png";
import weather from "../assets/portfolio/weather.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: sort,
      link: 'https://charming-speculoos-7cdf96.netlify.app/',
      repo: 'https://github.com/anubhavsahu95/SortingVisualizer'    
    },
    {
      id: 2,
      src: pass,
      link: 'https://anubhavsahu95.github.io/passcode/',
      repo: 'https://github.com/anubhavsahu95/passcode'
    },
    {
      id: 3,
      src: guess,
      link: 'https://zippy-cheesecake-b092ee.netlify.app/',
      repo: 'https://github.com/anubhavsahu95/Guess-the-Number'
    },
    {
      id: 4,
      src: weather,
      link: 'https://funny-kitsune-4116a8.netlify.app/',
      repo: 'https://github.com/anubhavsahu95/Weather-app'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
