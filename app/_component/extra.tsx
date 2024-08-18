import React from 'react'

const Extra = () => {
  return (
    <div>
      {/* SlideShow Section */}
      <section className="h-screen bg-[#FD542B] relative flex items-center justify-center text-white">
        <img
          src="/atul-pandey.jpg"
          alt="Slideshow"
          className="h-full w-full object-cover"
        />
        <div className="absolute text-center">
          <h1 className="text-5xl font-bold text-black">Paryanta Foundation</h1>
          <p className="mt-2 text-lg">Helping the ones in need</p>
        </div>
      </section>
    </div>
  );
}

export default Extra