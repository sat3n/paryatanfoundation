import Image from "next/image";
import React from "react";
import ProjectCard from "../../_component/projectCard";
import currentProjects from "./_data/currentProjects.json";
import pastProjects from "./_data/pastProjects.json";
import PastProjectCard from "@/app/_component/pastprojectscard";

const Programs = () => {
  return (
    <div className="bg-[#FFE9AD]">
      <section className="bg-[#FFE9AD] py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-[#BD2720]">
            Our Programs
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed text-justify">
            At Parytatan Foundation, we are committed to driving sustainable
            development through a range of impactful programs and projects.
            Explore our current and past initiatives, and see how we are making
            a difference in communities across the country.
          </p>
        </div>
      </section>

      <section className="bg-[#FFD256] py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-[#BD2720]">
            Current Projects
          </h2>
          <div className="mt-8 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  heading={project.heading}
                  imageSrc={project.imageSrc}
                  title={project.title}
                  brief={project.brief}
                  content={project.content}
                />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFE9AD] py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-[#BD2720]">
            Past Projects
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastProjects.map((project, index) => (
              <PastProjectCard
                key={index}
                heading={project.heading}
                imageSrc={project.imageSrc}
                title={project.title}
                brief={project.brief}
                content={project.content}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFD256] py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-[#27A744]">
            Project Locations
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed text-center">
            Explore the locations of our various projects through our
            interactive map.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.concat(pastProjects).map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                style={{ height: "250px" }} // Set a fixed height for the images
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover border-2 rounded-xl border-white hover:border-[#BD2720] transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
