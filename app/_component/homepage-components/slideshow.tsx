import React from 'react'
import { ImagesSlider } from "../imageSlider";
import { motion } from "framer-motion";



const SlideShow = () => {
    const images = [
      "./atul-pandey.jpg",
      "./soildpic.jpg",
      "./schoolchildren.jpg",
    ];
  return (
    <div>
      <div className="min-h-screen">
        <ImagesSlider className="h-[60rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Paryatan Foundation <br />{" "}
              <p className="text-3xl">Help us to help others</p>
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-[#BD2720]">
              <span>Learn More →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>
      </div>
    </div>
  );
}

export default SlideShow