import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { RiTailwindCssFill } from "react-icons/ri";
function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        className="my-20 text-center text-4xl text-zinc-300"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        id="technologies"
      >
        <span className="text-lime-500">T</span>echnologies
      </motion.h1>
      <div className="flex flex-wrap  items-center justify-center gap-4">
        <div className="rounded-2xl animate-bounce  border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>

        <div className="rounded-2xl border-4 animate-bounce  border-neutral-800 p-4">
          <SiExpress className="text-7xl text-zinc-300" />
        </div>
        <div className="rounded-2xl border-4 animate-bounce  border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 animate-bounce  border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-lime-500" />
        </div>
        <div className="rounded-2xl border-4 animate-bounce border-neutral-800 p-4">
          <FaBootstrap className="text-7xl text-purple-600" />
        </div>
        <div className="rounded-2xl border-4 animate-bounce border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
