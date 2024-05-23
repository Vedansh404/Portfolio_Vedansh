import veduImage from "../assets/vedu.jpg";
import { motion } from "framer-motion";

function Landing() {
  return (
    <section className="flex border-b border-neutral-900 pb-4 " id="landing">
      <div className="grid  px-4 py-4 mx-auto md:py-16 lg:grid-cols-12">
        <div className="place-self-center md:col-span-7">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-w-2xl mt-8 md:mb-2 font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400"
          >
            --Hello
          </motion.p>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white"
          >
            {`I'm Vedansh Rashinkar`}
          </motion.h1>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl font-bold dark:text-gray-400"
          >
            {`Full Stack Developer`}
          </motion.div>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="max-w-3xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            {`Hi there!, My name is Vedansh Rashinkar, I secured AIR 3 in NIMCET 2022 and currently I'm pursuing my Master in Computer Applications
            from NIT, Tiruchirappalli.`}
          </motion.p>
          <div className="text-center  md:w-full pb-5">
            <motion.button
              className="text-2xl drop-shadow-2xl max-md:m-5"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.25 }}
            >
              <a
                href="https://drive.google.com/file/d/1_seKdMxhWmPnQAc9qqTGh5bessx88QQn/view?usp=sharing"
                target="_blank"
                className="text-zinc-200  max-md:p-1 md:m-4  hover:bg-blue-700  font-bold py-2 px-4 rounded-full border border-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105 "
              >
                Download Resume
              </a>
            </motion.button>
            <motion.button
              className="text-2xl drop-shadow-2xl max-md:m-5 "
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.25 }}
            >
              <a
                href="https://www.linkedin.com/in/vedansh-rashinkar"
                target="_blank"
                className="text-zinc-200  max-md:p-1 md:m-4  hover:bg-blue-700  font-bold py-2 px-4 rounded-full border border-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105 "
              >
                Connect
              </a>
            </motion.button>
          </div>
        </div>

        <div className="md:mt-2 md:col-span-5 md:flex mx-auto">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="object-cover shadow-2xl rounded-full md:w-96 md:h-96 md:m-14 "
            src={veduImage}
            alt="Vedansh Rashinkar"
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
