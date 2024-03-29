import React from "react";
import Image from "next/image";
import Styles from "./styles.module.css";
import { FaDesktop, FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col justify-between items-center h-full">
        <div className={`${Styles.titleDiv} flex justify-end w-full`}>
          <h1 className="border-l-4 rounded-l-full border-y border-yellow bg-gradient-to-r from-blue sm:text-4xl text-ltGray font-extralight py-4 w-9/12 shadow-lg shadow-black">
            <span className="pl-10 text-yellow">MY</span>
            <span className="text-xs"> </span>
            <span className="font-bold">PROJECTS</span>
          </h1>
        </div>
        <div className="container flex justify-center items-start h-full">
          <div className="flex justify-center items-center flex-wrap h-full">
            <section
              id={Styles.shortStack}
              className={`${Styles.projectSection} text-blue`}
            >
              <div className={`${Styles.icons} place-self-center`}>
                <a
                  className="hover:text-yellow"
                  href="https://shortstack.vercel.app/"
                >
                  <FaDesktop className="text-5xl ml-2" />
                  <p>Website</p>
                </a>
                <a
                  className="hover:text-yellow"
                  href="https://github.com/Jstanion/ShortStack"
                >
                  <FaGithub className="text-5xl ml-1" />
                  <p>GitHub</p>
                </a>
              </div>
              <Image
                className={Styles.img}
                src="/shortStack.png"
                width={325}
                height={200}
                alt="Short Stack Videos app thumbnail"
              />
            </section>
            <section
              id={Styles.weatherDashboard}
              className={`${Styles.projectSection} text-blue`}
            >
              <div className={`${Styles.icons} place-self-center`}>
                <a
                  className="hover:text-yellow"
                  href="https://jstanion.github.io/weather-dashboard/"
                >
                  <FaDesktop className="text-5xl ml-2" />
                  <p>Website</p>
                </a>
                <a
                  className="hover:text-yellow"
                  href="https://github.com/Jstanion/weather-dashboard"
                >
                  <FaGithub className="text-5xl ml-1" />
                  <p>GitHub</p>
                </a>
              </div>
              <Image
                className={Styles.img}
                src="/weatherForecast.png"
                width={325}
                height={200}
                alt="Weather Forecast app thumbnail"
              />
            </section>
            <section
              id={Styles.mrMovie}
              className={`${Styles.projectSection} text-blue`}
            >
              <div className={`${Styles.icons} place-self-center`}>
                <a
                  className="hover:text-yellow"
                  href="https://jstanion.github.io/Mr-Movie/"
                >
                  <FaDesktop className="text-5xl ml-2" />
                  <p>Website</p>
                </a>
                <a
                  className="hover:text-yellow"
                  href="https://github.com/Jstanion/Mr-Movie"
                >
                  <FaGithub className="text-5xl ml-1" />
                  <p>GitHub</p>
                </a>
              </div>
              <Image
                className={Styles.img}
                src="/mrMovie.png"
                width={325}
                height={200}
                alt="Mr Movie app thumbnail"
              />
            </section>
            <section
              id={Styles.taskScheduler}
              className={`${Styles.projectSection} text-blue`}
            >
              <div className={`${Styles.icons} place-self-center`}>
                <a
                  className="hover:text-yellow"
                  href="https://jstanion.github.io/work-day-scheduler/"
                >
                  <FaDesktop className="text-5xl ml-2" />
                  <p>Website</p>
                </a>
                <a
                  className="hover:text-yellow"
                  href="https://github.com/Jstanion/work-day-scheduler"
                >
                  <FaGithub className="text-5xl ml-1" />
                  <p>GitHub</p>
                </a>
              </div>
              <Image
                className={Styles.img}
                src="/taskScheduler.png"
                width={325}
                height={200}
                alt="Task Scheduler app thumbnail"
              />
            </section>
            <section
              id={Styles.littlePiggy}
              className={`${Styles.projectSection} text-blue`}
            >
              <div className={`${Styles.icons} place-self-center`}>
                <a
                  className="hover:text-yellow"
                  href="https://this-little-piggy-a60cf3e8f6ed.herokuapp.com/"
                >
                  <FaDesktop className="text-5xl ml-2" />
                  <p>Website</p>
                </a>
                <a
                  className="hover:text-yellow"
                  href="https://github.com/Jstanion/This-Little-Piggy"
                >
                  <FaGithub className="text-5xl ml-1" />
                  <p>GitHub</p>
                </a>
              </div>
              <Image
                className={Styles.img}
                src="/thisLittlePiggy.png"
                width={325}
                height={200}
                alt="This Little Piggy app thumbnail"
              />
            </section>
            <section
              id={Styles.passwordGenerator}
              className={`${Styles.projectSection} text-blue`}
            >
              <div className={`${Styles.icons} place-self-center`}>
                <a
                  className="hover:text-yellow"
                  href="https://jstanion.github.io/password-generator/"
                >
                  <FaDesktop className="text-5xl ml-2" />
                  <p>Website</p>
                </a>
                <a
                  className="hover:text-yellow"
                  href="https://github.com/Jstanion/password-generator"
                >
                  <FaGithub className="text-5xl ml-1" />
                  <p>GitHub</p>
                </a>
              </div>
              <Image
                className={Styles.img}
                src="/passwordGenerator.png"
                width={325}
                height={200}
                alt="Password Generator app thumbnail"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
