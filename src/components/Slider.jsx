import React, { useRef, useState, useEffect } from "react";
import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";
const Slider = () => {
  const slides = [
    {
      image: group1,
      heading: "Accreditation & Compliance",
      text: "Bring real-time monitoring for all users’ accreditation requirements for continuous quality improvement",
    },
    {
      image: group2,
      heading: "ILMS",
      text: "Customise the learning system by giving users a unified platform for all academic needs with easy-to-use technology",
    },
    {
      image: group3,
      heading: "Exam Management System",
      text: "Streamline the examination process with Interactive Examinations, Live Proctoring, and Exam Evaluation modules",
    },
  ];
  const sliderRef = useRef(null);
  const scrollbarRef = useRef(null);
  const thumbRef = useRef(null);
  const [scrollbarWidth, setScrollbarWidth] = useState(185);

  useEffect(() => {
    const handleResize = () => {
      const scrollArea = sliderRef.current;
      const scrollbarTrack = scrollbarRef.current;

      const thumbWidth =
        (scrollArea.clientWidth / scrollArea.scrollWidth) *
        scrollbarTrack.offsetWidth;
      thumbRef.current.style.width = `${thumbWidth}px`;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Drag handler for the scrollbar thumb
  const handleDrag = (e) => {
    const scrollArea = sliderRef.current;
    const scrollbarTrack = scrollbarRef.current;
    const thumb = thumbRef.current;

    const startX = e.clientX;
    const thumbLeft = thumb.offsetLeft;

    const onMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newLeft = Math.min(
        scrollbarTrack.offsetWidth - thumb.offsetWidth,
        Math.max(0, thumbLeft + deltaX)
      );

      const scrollRatio =
        newLeft / (scrollbarTrack.offsetWidth - thumb.offsetWidth);
      scrollArea.scrollLeft =
        scrollRatio * (scrollArea.scrollWidth - scrollArea.clientWidth);

      thumb.style.left = `${newLeft}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleScroll = () => {
    const scrollArea = sliderRef.current;
    const thumb = thumbRef.current;
    const scrollbarTrack = scrollbarRef.current;

    const scrollRatio =
      scrollArea.scrollLeft / (scrollArea.scrollWidth - scrollArea.clientWidth);
    thumb.style.left = `${
      scrollRatio * (scrollbarTrack.offsetWidth - thumb.offsetWidth)
    }px`;
  };

  return (
    <div className="w-[100%] mx-auto p-16 sliderMain">
      <div className="text my-6">
        {" "}
        <h1>
          Learn more about <span>what we solve</span>{" "}
        </h1>
      </div>
      {/* Slider Container */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex space-x-6 overflow-x-auto scrollbar-hide p-8 sliderContainer"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slider flex-shrink-0 w-[540px] h-[372px] p-6 flex flex-col items-start bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-16 h-16 mb-4 "
            />
            <h2 className="text-2xl font-semibold mb-2 text-[#EA4722]">
              {slide.heading}
            </h2>
            <p className="text-gray-600 mb-6">{slide.text}</p>
            <button className="border-[2px] border-black rounded-[62px] text-black px-4 py-2 hover:bg-[#30A981] hover:text-white hover:border-transparent">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar */}
      <div
        ref={scrollbarRef}
        className="relative w-[185px] h-4 bg-gray-300 mx-auto mt-6 rounded-full"
      >
        <div
          ref={thumbRef}
          onMouseDown={handleDrag}
          className="absolute h-4 bg-blue-500 rounded-full custom-slider cursor-pointer"
          style={{ left: 0 }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
