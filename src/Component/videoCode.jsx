import React, { useEffect, useRef, useState } from 'react';

const VideoCode = () => {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [headingIndex, setHeadingIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoIntervalRef = useRef(null);

  const stateVideos = [
    { name: 'INDIA', src: '/allOne.mp4' },
  ];

  const headingLines = [
    "It's Time To Travel India",
    "It's Time To Adventure India",
    "It's Time To Experience India",
    "It's Time To Discover India",
  ];
  
  useEffect(() => {
    if (!isPaused) {
      videoIntervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % stateVideos.length);
      }, 4000);
    }
    return () => clearInterval(videoIntervalRef.current);
  }, [isPaused]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const headingInterval = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % headingLines.length);
    }, 3000);
    return () => clearInterval(headingInterval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + stateVideos.length) % stateVideos.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % stateVideos.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-xl border border-gray-300 h-[500px]">

      <button
        onClick={handlePrev}
        className="absolute z-40 left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white text-3xl px-3 py-1 rounded-full hover:bg-black/70"
      >
        &#8249;
      </button>

      <button
        onClick={handleNext}
        className="absolute z-40 right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white text-3xl px-3 py-1 rounded-full hover:bg-black/70"
      >
        &#8250;
      </button>

      <div className="relative w-full h-full">
        {stateVideos.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
            } group`}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.src}
              muted
              className="w-full h-full object-cover"
              controls={false}
            />

            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-10 z-30">
              <p className="text-md md:text-lg font-medium mb-2 drop-shadow-lg">
                Make Your Hassle-free Travel Plan Now!
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
                <span className="text-white">It's Time To </span>
                <span className="text-yellow-400">
                  {headingLines[headingIndex].split(' ')[3]}
                </span>
                <span className="text-white"> India</span>
              </h2>
              <p className="text-md md:text-lg mt-4 font-medium drop-shadow-lg">
                Start Your Next Adventure Today: Find Your Perfect Trip Now
              </p>

              <button
                onClick={() => {
                  const currentVideo = videoRefs.current[index];
                  if (isPaused) {
                    currentVideo?.play();
                    setIsPaused(false);
                  } else {
                    currentVideo?.pause();
                    setIsPaused(true);
                  }
                }}
                className="mt-6 bg-white/20 text-white font-semibold py-2 px-6 rounded hover:bg-white/40 transition duration-300 backdrop-blur-sm shadow-md"
              >
                PAUSE
              </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-white text-xl font-bold bg-black/50 py-2 text-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCode;