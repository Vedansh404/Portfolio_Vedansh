import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      id="contact"
    >
      <h1 className="my-10 text-center text-4xl text-zinc-300">
        <span className="text-lime-500">G</span>et in{" "}
        <span className="text-lime-500">T</span>ouch
      </h1>
      <div className="text-center tracking-tighter text-zinc-300">
        <p className="my-4">
          102, Emerald Hostel , NIT Tiruchirappalli, 620015
        </p>
        <p className="my-4">+91-7694088687</p>
        <p className="gap-">
          Email:-
          <a href="#" className="border-b m-2">
            vedanshrashinkar77@gmail.com
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default Contact;
