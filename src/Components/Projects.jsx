import { PROJECTS } from "../assets/constants";
import { motion } from "framer-motion";
function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4 mb-4">
      <motion.h2
        className="my-20 text-center text-4xl text-zinc-300"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        id="projects"
      >
        <span className="text-lime-500">P</span>rojects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full md:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <a href={project.url} target="_blank">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 rounded-xl border-2  border-slate-400"
                />
              </a>
            </motion.div>
            <motion.div
              className=" ml-16 max-w-xl max-md:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h6 className="mb-4 text-zinc-200 font-semibold">
                {project.title}
              </h6>
              <p className="mb-3 max-md:mx-auto text-neutral-400">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" max-md:w-1/2 px-1 py-1 font-medium text-green-500 "
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
