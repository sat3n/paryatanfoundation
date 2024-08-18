"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const PastProjectCard = ({ heading, imageSrc, title, brief, content }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="bg-[#BD2720] p-6 rounded shadow-md">
        <div onClick={openModal} className="cursor-pointer">
          <Image
            src={imageSrc}
            width={600}
            height={400}
            alt={title}
            className="rounded-lg"
          />
        </div>
        <h3 className="mt-4 text-xl font-bold text-[#FFE9AD]">{title}</h3>
        <p className="mt-2  text-justify text-[#FFE9AD]">{brief}</p>
        <button
          onClick={openModal}
          className="mt-4 bg-[#FFE9AD] hover:bg-red-300 text-black py-2 px-4 rounded"
        >
          View Details
        </button>
      </div>

      {/* Modal view */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-[#FFE9AD] p-5 rounded-lg shadow-md max-w-screen-lg w-full max-h-screen overflow-y-auto">
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-900 p-2 rounded"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-[#BD2720]">
              {heading}
            </h2>
            <hr className="my-4 border-[#BD2720]" />
            <Image
              src={imageSrc}
              width={600}
              height={400}
              alt={title}
              className="rounded mt-4 "
            />
            <h3 className="mt-4 text-2xl font-bold text-[#BD2720]">{title}</h3>
            {content.map((paragraph, index) => (
              <p key={index} className="mt-2 text-gray-700 text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PastProjectCard;
