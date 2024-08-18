import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#FFE9AD]">
      <section className="bg-[#FFE9AD] py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-[#BD2720]">
            About Us
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed text-justify">
            Parytatan Foundation is dedicated to enhancing the quality of life
            in rural areas through sustainable development projects. Our mission
            is to empower communities, improve livelihoods, and create a
            brighter future for all.
          </p>
        </div>
      </section>

      <section className="bg-[#FFD256] py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-[#27A744]">
            Our History, Mission, and Values
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2">
                <Image
                  src="/path-to-your-image.jpg"
                  width={600}
                  height={400}
                  alt="Our history"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-12">
                <h3 className="text-2xl font-bold text-[#BD2720]">History</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  Parytatan Foundation was established in 2010 with the goal of
                  providing sustainable development solutions to rural
                  communities. Over the years, we have grown and expanded our
                  reach, impacting thousands of lives across the country.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center">
              <div className="lg:w-1/2">
                <Image
                  src="/path-to-your-image.jpg"
                  width={600}
                  height={400}
                  alt="Our mission"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pr-12">
                <h3 className="text-2xl font-bold text-[#BD2720]">Mission</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  Our mission is to empower rural communities by providing them
                  with the tools and resources they need to improve their
                  livelihoods and achieve sustainable development. We believe in
                  the power of community-led initiatives and strive to create
                  lasting change.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2">
                <Image
                  src="/path-to-your-image.jpg"
                  width={600}
                  height={400}
                  alt="Our values"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-12">
                <h3 className="text-2xl font-bold text-[#BD2720]">Values</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  We value integrity, transparency, and accountability in all
                  our operations. Our commitment to these values ensures that we
                  remain focused on our mission and deliver the highest quality
                  of service to the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFE9AD] py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-[#BD2720]">
            Meet the Team
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member profiles - placeholders for now */}
            <div className="bg-[#FFD256] p-6 rounded-lg shadow-md text-center">
              <Image
                src="/path-to-your-image.jpg"
                width={150}
                height={150}
                alt="Team member"
                className="mx-auto rounded-full"
              />
              <h3 className="mt-4 text-xl font-bold text-[#BD2720]">
                Mr. Anil
              </h3>
              <p className="mt-2 text-gray-700">CEO</p>
            </div>
            <div className="bg-[#FFD256] p-6 rounded-lg shadow-md text-center">
              <Image
                src="/path-to-your-image.jpg"
                width={150}
                height={150}
                alt="Team member"
                className="mx-auto rounded-full"
              />
              <h3 className="mt-4 text-xl font-bold text-[#BD2720]">
                Jane Smith
              </h3>
              <p className="mt-2 text-gray-700">COO</p>
            </div>
            <div className="bg-[#FFD256] p-6 rounded-lg shadow-md text-center">
              <Image
                src="/path-to-your-image.jpg"
                width={150}
                height={150}
                alt="Team member"
                className="mx-auto rounded-full"
              />
              <h3 className="mt-4 text-xl font-bold text-[#BD2720]">
                Alex Johnson
              </h3>
              <p className="mt-2 text-gray-700">CFO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      <section className="bg-[#FFD256] py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-[#27A744]">
            Financial Transparency and Accountability
          </h2>
          <div className="mt-8 space-y-6 text-center">
            <p className="text-gray-700 leading-relaxed">
              At Parytatan Foundation, we believe in maintaining the highest
              standards of financial transparency and accountability. Our
              financial reports are available to the public, ensuring that our
              donors and stakeholders can see exactly how their contributions
              are being used to create positive change.
            </p>
            <a
              href="/financial-reports"
              className="inline-block rounded-md bg-[#BD2720] px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-[#A0211A]"
            >
              View Financial Reports
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
