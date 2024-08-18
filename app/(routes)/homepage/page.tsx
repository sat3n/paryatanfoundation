"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SlideShow from "@/app/_component/homepage-components/slideshow";

const fadeInUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const HomePage = () => {
  return (
    <div className="bg-[#FFE9AD]">
      {/* SlideShow Section */}
      <SlideShow />

      {/* Welcome Message and Overview Section */}
      <motion.section
        className="py-12 bg-[#FFE9AD]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-[#BD2720]">
            Welcome to Paryatan Foundation
          </h2>
          <p className="mt-4 text-gray-700">
            Paryatan is a non-governmental organization dedicated to educating
            children from various underprivileged areas. The NGO focuses on
            providing quality education and learning opportunities to children
            who lack access to basic educational resources. By collaborating
            with local communities, volunteers, and educational experts,
            Paryatan aims to bridge the educational gap and empower these
            children with the knowledge and skills they need to succeed.
          </p>
        </div>
      </motion.section>

      {/* Our Impact Section */}
      <motion.section
        className="py-12 bg-[#FFD256]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-[#BD2720]">Our Impact</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeInUp}>
              {/* <h3 className="text-5xl font-bold text-[#BD2720]">+</h3> */}
              <Image
                src="/edu.png"
                width={400}
                height={250}
                alt="School Children"
                className="w-1/2 h-48 rounded-3xl object-cover mx-auto"
              />
              <p className="mt-2 text-lg text-center font-semibold text-gray-700">
                Children
              </p>
              <p className="mt-2 text-gray-500 text-center">Educated</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              {/* <h3 className="text-5xl font-bold text-[#BD2720]">+</h3> */}
              <Image
                src="/volun.png"
                width={400}
                height={250}
                alt="Volunteers"
                className="w-1/2 h-48 rounded-3xl object-cover mx-auto"
              />
              <p className="mt-2 text-lg font-semibold text-gray-700 text-center">
                Volunteers
              </p>
              <p className="mt-2 text-gray-500 text-center">Engaged</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              {/* <h3 className="text-5xl font-bold text-[#BD2720]">+</h3> */}
              <Image
                src="/globe.jpg"
                width={400}
                height={250}
                alt="Programs"
                className="w-1/2 h-48 rounded-3xl object-cover mx-auto"
              />
              <p className="mt-2 text-lg font-semibold text-gray-700 text-center">
                Programs
              </p>
              <p className="mt-2 text-gray-500 text-center">Conducted</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              {/* <h3 className="text-5xl font-bold text-[#BD2720]">+</h3> */}
              <Image
                src="/communities.png"
                width={400}
                height={250}
                alt="Communities"
                className="w-1/2 h-48 rounded-3xl object-cover mx-auto"
              />
              <p className="mt-2 text-lg font-semibold text-gray-700 text-center">
                Communities
              </p>
              <p className="mt-2 text-gray-500 text-center">Served</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Featured Projects Section */}

      <motion.section
        className="py-12 bg-[#FFE9AD]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#BD2720] text-center">
            Featured Projects
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="bg-[#FFD256] rounded shadow-md overflow-hidden"
              variants={fadeInUp}
            >
              <Image
                src="/globe.jpg"
                width={400}
                height={250}
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#BD2720]">
                  <a href="programs">Pad Bank</a>
                </h3>
                <p className="mt-2 text-gray-700">
                  Pad Bank, an initiative by Paryatan NGO, addresses menstrual
                  hygiene among underprivileged girls and women. Boys within the
                  NGO pledge to donate one sanitary pad on their birthday,
                  fostering responsibility and empathy. The collected pads are
                  distributed to girls in the NGO and women in nearby areas,
                  alleviating period poverty and promoting gender sensitivity
                  and awareness.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-[#FFD256] rounded shadow-lg overflow-hidden"
              variants={fadeInUp}
            >
              <Image
                src="/schoolChildren.jpg"
                width={400}
                height={250}
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#BD2720]">
                  <a href="programs">Meal for children</a>
                </h3>
                <p className="mt-2 text-gray-700">
                  The "Meal for Children" initiative by Paryatan NGO provides a
                  banana and a glass of milk every morning to children, ensuring
                  they start their day with essential nutrients. This support
                  helps them focus on their education, despite traveling long
                  distances on an empty stomach. During summer, the NGO adds
                  refreshing fruits and drinks to keep them hydrated and
                  energized.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Latest News and Success Stories Section */}
      <motion.section
        className="py-12 bg-[#FFE9AD]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#BD2720] text-center">
            Latest News and Success Stories
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="bg-[#FFD256] rounded-lg shadow-md p-6"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-[#BD2720]">News Title 1</h3>
              <p className="mt-2 text-gray-700">
                Brief description of the news or success story.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#FFD256] rounded-lg shadow-md p-6"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-[#BD2720]">News Title 2</h3>
              <p className="mt-2 text-gray-700">
                Brief description of the news or success story.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Donations and Volunteer Opportunities Section */}
      <motion.section
        className="py-12 bg-[#FFE9AD]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-[#BD2720]">Get Involved</h2>
          <p className="mt-4 text-gray-700">
            Join us in making a difference. Your contributions can help us
            achieve our goals and create a lasting impact.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              className="rounded bg-[#BD2720]  px-5 py-3 text-sm font-medium text-white shadow transition hover:bg-[#FD542B] hover:text-white "
              href="/contribute"
            >
              Donate Now
            </a>
            <a
              className="rounded bg-[#BD2720] px-5 py-3 text-sm font-medium text-white shadow transition hover:bg-[#FD542B] hover:text-white"
              href="/contribute"
            >
              Volunteer with Us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
