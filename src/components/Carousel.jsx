import React, { useEffect, useState } from "react";
import frame2 from "../assets/Frame.png";
import frame1 from "../assets/Layer_1.png";
import frame3 from "../assets/Layer_2.png";
import frame4 from "../assets/Group.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000; // Auto slide every 5 seconds

  const slides = [
    {
      heading:
        "A power-packed solution to streamline all educational and institutional processes.",
      details:
        "Campus Tech is a robust solution packed with best-in-class software, consulting, audits, and empowerment activities rolled into one for your institution.",
      image: frame1,
    },
    {
      heading: "Enables efficient segregation of tasks",
      details:
        "Campus Tech presents you with multiple dashboards to review the status of various accreditation tasks, including the tasks that are overdue, non-compliant, or need attention.",
      image: frame2,
    },
    {
      heading: "Helps cater to accreditation requirements",
      details:
        "Campus Tech has created an associated full-fledged and robust campus automation software along with a dedicated mobile app for students that can cater to multiple accreditation and compliance requirements.",
      image: frame3,
    },
    {
      heading: "Live reports and comparative analysis made availabl",
      details:
        "Get live reports on data added for multiple accreditations, AI-based alerts for tracking of tasks assigned and completed.",
      image: frame4,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentSlide]); // Re-run on slide change
  return (
    <div
      className="relative hero h-[90vh] mx-auto  z-10 px-8"
      onMouseEnter={() => clearInterval(interval)}
      onMouseLeave={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
    >
      {/* Carousel Content */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${100}%`,
          }}
        >
          {/* slide 1 */}
          <div
            className="carouselMain w-full flex-shrink-0 flex flex-col md:flex-row items-center  bg-white rounded-lg "
            style={{ width: "100%" }}
          >
            {/* Left Content */}
            <div className="firstCarousel w-[50%] p-4 slide1">
              <div className=" flex flex-col gap-4 items-start">
                <h2 className="text-xl md:text-2xl font-bold ">
                  A <span>power-packed solution</span> to streamline all
                  educational and institutional processes.
                </h2>
                <p className="text-gray-600 mb-4">
                  Campus Tech is a robust solution packed with best-in-class
                  software, consulting, audits, and empowerment activities
                  rolled into one for your institution.
                </p>
                <button
                  className="bg-[#30A981]
 text-white px-4 py-2 rounded-[62px] hover:bg-blue-600  "
                >
                  Get a Demo
                </button>
              </div>
            </div>
            {/* Right Image */}
            <div className=" p-4">
              <img
                src={frame1}
                alt={"frame1"}
                className="rounded-lg object-contain w-full h-full w-[660px] h-[492px]"
              />
            </div>
          </div>
          {/* slide 2 */}
          <div
            className="carouselMain w-full flex-shrink-0 flex flex-col md:flex-row items-center  p-4 bg-white rounded-lg "
            style={{ width: "100%" }}
          >
            {/* Left Content */}
            <div className="firstCarousel w-[50%] p-4">
              <div className="flex flex-col gap-4 slide2">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Enables <span>efficient segregation</span> of tasks
                </h2>
                <p className="text-gray-600 mb-4">
                  Campus Tech presents you with multiple dashboards to review
                  the status of various accreditation tasks, including the tasks
                  that are overdue, non-compliant, or need attention.
                </p>
                <button className="bg-[#30A981] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Accreditation & Compliance
                </button>
              </div>
            </div>
            {/* Right Image */}
            <div className=" p-4">
              <img
                src={frame2}
                alt={"frame1"}
                className="rounded-lg object-contain w-full h-full w-[660px] h-[492px]"
              />
            </div>
          </div>
          {/* slide 3 */}
          <div
            className="carouselMain w-full flex-shrink-0 flex flex-col md:flex-row items-center  p-4 bg-white rounded-lg "
            style={{ width: "100%" }}
          >
            {/* Left Content */}
            <div className="firstCarousel w-[50%] p-4">
              <div className="flex flex-col slide3">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Helps cater to <span>accreditation requirements</span>
                </h2>
                <p className="text-gray-600 mb-4">
                  Campus Tech has created an associated full-fledged and robust
                  campus automation software along with a dedicated mobile app
                  for students that can cater to multiple accreditation and
                  compliance requirements.
                </p>
                <button className="bg-[#30A981] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Accreditation & Compliance
                </button>
              </div>
            </div>
            {/* Right Image */}
            <div className=" p-4">
              <img
                src={frame3}
                alt={"frame1"}
                className="rounded-lg object-contain w-full h-full w-[660px] h-[492px]"
              />
            </div>
          </div>
          {/* slide 4 */}
          <div
            className="carouselMain w-full flex-shrink-0 flex flex-col md:flex-row items-center  p-4 bg-white rounded-lg "
            style={{ width: "100%" }}
          >
            {/* Left Content */}
            <div className="firstCarousel w-[50%] p-4">
              <div className="flex flex-col slide4">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  <span>Live reports</span> and{" "}
                  <span>comparative analysis</span> made available
                </h2>
                <p className="text-gray-600 mb-4">
                  Get live reports on data added for multiple accreditations,
                  AI-based alerts for tracking of tasks assigned and completed.
                </p>
                <button className="bg-[#30A981] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Exam Management System
                </button>
              </div>
            </div>
            {/* Right Image */}
            <div className=" p-4">
              <img
                src={frame4}
                alt={"frame1"}
                className="rounded-lg object-contain w-full h-full w-[660px] h-[492px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between items-center mt-4 px-4">
        {/* Pagination Indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        {/* Slide Controls */}
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Carousel;
