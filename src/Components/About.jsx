import { motion } from "framer-motion";
import aboutImg from "../assets/vedu.jpg";
// import { IoLogoGithub } from "react-icons/io";
function About() {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h1
        className="my-16 text-center text-4xl text-zinc-300"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        id="about"
      >
        <span className="text-lime-500">A</span>bout{" "}
        <span className="text-lime-500">M</span>e
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center">
            <img
              className="object-cover  shadow-2xl rounded-full w-96 h-96 md:mb-14 border-zinc-200 "
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center lg:justify-start">
            <p className="text-xl md:mb-1 text-gray-500 dark:text-gray-400 my-2 max-w-xl py-6 max-md:w-3/4">
              {`I'm a committed and adaptable full stack developer who thrives on
              crafting efficient and intuitive web applications. With one year
              of professional experience under my belt, I've delved into various
              technologies such as `}
              <span className="font-bold text-lime-500 ">
                React.js, Node.js, MySQL, Express.js and MongoDB
              </span>
              {`. My venture into web development stemmed from a keen interest in
              understanding the intricacies of systems, evolving into a career
              where I persistently seek out new challenges to conquer. I excel
              in team settings, relishing the opportunity to tackle intricate
              issues and deliver top-notch results. Beyond coding, I keep myself
              engaged by staying active and exploring emerging technologies.`}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
