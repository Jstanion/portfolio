import Image from "next/image";
import Styles from "./styles.module.css";
import { FaDesktop, FaGithub } from "react-icons/fa";

export default function Project() {
  // Working on the toggle_visibility function to show/hide projects based on the button clicked
  //   function toggle_visibility() {
  //     for (var i = 0; i < arguments.length; i++) {
  //         var element = document.getElementById(arguments[i]);
  //         if (element.id === arguments[i]) {
  //             element.style.display = "block";
  //         } else {
  //             element.style.display = "none";
  //         }
  //     }
  // }

  return (
    <>
      <div className="flex flex-col items-center justify-evenly">
        <div className="flex flex-col items-center w-full">
          <h1 className="border-l rounded-l-full border-ltGray bg-gradient-to-r from-blue text-4xl text-ltGray py-4 w-2/3">
            <span className="pl-10">PROJECTS</span>
          </h1>
        </div>
        {/* <div className="flex justify-evenly w-full">
          <div className="flex justify-evenly text-ltGray text-xl w-full pt-10">
            <button className={Styles.button}>ALL</button>
            <button className={Styles.button}>JAVASCRIPT</button>
            <button className={Styles.button}>REACT JS</button>
            <button className={Styles.button}>NEXT JS</button>
          </div>
        </div> */}
        <div className="flex justify-center flex-wrap">
          <section id="shortStack" className="text-blue">
            <div className={Styles.icons}>
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
              width={400}
              height={200}
              alt="Short Stack Videos app thumbnail"
            />
          </section>
          <section id="weatherDashboard" className="text-blue">
            <div className={Styles.icons}>
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
              width={400}
              height={200}
              alt="Weather Forecast app thumbnail"
            />
          </section>
          <section id="mrMovie" className="text-blue">
            <div className={Styles.icons}>
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
              width={400}
              height={200}
              alt="Mr Movie app thumbnail"
            />
          </section>
          <section id="taskScheduler" className="text-blue">
            <div className={Styles.icons}>
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
              width={400}
              height={200}
              alt="Task Scheduler app thumbnail"
            />
          </section>
          <section id="littlePiggy" className="text-blue">
            <div className={Styles.icons}>
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
              width={400}
              height={200}
              alt="This Little Piggy app thumbnail"
            />
          </section>
          <section id="passwordGenerator" className="text-blue">
            <div className={Styles.icons}>
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
              width={400}
              height={200}
              alt="Password Generator app thumbnail"
            />
          </section>
        </div>
      </div>
    </>
  );
}