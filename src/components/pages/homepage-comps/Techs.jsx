import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/javascript.png";
import Pandas from "../../../assets/Pandas.png";
import python from "../../../assets/python.png";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import FastAPI from "../../../assets/FastAPI.png";
import Flask from "../../../assets/Flask.png";
import MySQL from "../../../assets/MySQL.png";
import cpp from "../../../assets/cpp.png";
import NumPy from "../../../assets/NumPy.png";
import { Link as ScrollLink } from "react-scroll";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    
    {
      id: 4,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: Pandas,
      title: "Pandas",
      style: "shadow-cyan-400",
    },
    
    {
      id: 6,
      src: NumPy,
      title: "NumPy",
      style: "shadow-cyan-700",
    },
    {
      id: 7,
      src: Flask,
      title: "Flask",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: FastAPI,
      title: "FastAPI",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 11,
      src: MySQL,
      title: "MySQL",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: cpp,
      title: "C++",
      style: "shadow-blue-700",
    },
  ];

  return (
    <section
      name="Technologies"
      className="relative w-full md:h-screen h-unset"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
            Technologies
          </h2>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-110 duration-200 py-2 rounded-lg ${style}`}
            >
              <img className="w-20 mx-auto py-2 md:py-4" src={src} alt="" />
              <p className="mt-4 md:mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Education"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Techs;
