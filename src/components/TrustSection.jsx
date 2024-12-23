import React, { useEffect, useRef } from "react";
import img30 from "../assets/30.png";
import img13 from "../assets/13.png";
import img3000 from "../assets/3000.png";
import img90000 from "../assets/90000.png";
import jadavpur from "../assets/jadavpur.png";
import banglore from "../assets/banglore.png";
import nujs from "../assets/nujs.png";
import bennet from "../assets/bennet.png";
const TrustSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-[100%] mx-auto p-16 bg-white shadow-lg rounded-lg trustMain">
        {/* Heading Section */}
        <div className="flex flex-col items-start mb-8 gap-4 trust1">
          <h2 className="text-3xl font-semibold mb-4">
            The best in the country <span>trust us</span>
          </h2>

          {/* Static Small Images */}
          <div className="flex space-x-4 gap-20 trustImages ">
            {[img30, img13, img3000, img90000].map((ele, index) => (
              <img
                key={index}
                src={ele}
                alt={`Partner ${index}`}
                className={`Partner${index} object-contain`}
              />
            ))}
          </div>
        </div>

        {/* Auto-Scrolling Section */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6"
          style={{ height: "103px" }}
        >
          {/* {[
            jadavpur,
            banglore,
            nujs,
            bennet,
            jadavpur,
            banglore,
            nujs,
            bennet,
          ].map((ele, index) => (
            <img
              key={index}
              src={ele}
              alt={`Brand ${index}`}
              className={`h-[103px] object-contain img${index}`}
            />
          ))} */}
          <img
            src={jadavpur}
            alt={`Brand`}
            className={`h-[103px] object-contain img0`}
          />
          <img
            src={banglore}
            alt={`Brand`}
            className={`h-[103px] object-contain img1`}
          />
          <img
            src={nujs}
            alt={`Brand`}
            className={`h-[103px] object-contain img2`}
          />
          <img
            src={ bennet}
            alt={`Brand`}
            className={`h-[103px] object-contain img3`}
          />
          <img
            src={jadavpur}
            alt={`Brand`}
            className={`h-[103px] object-contain img0`}
          />
          <img
            src={banglore}
            alt={`Brand`}
            className={`h-[103px] object-contain img1`}
          />
          <img
            src={nujs}
            alt={`Brand`}
            className={`h-[103px] object-contain img2`}
          />
          <img
            src={ bennet}
            alt={`Brand`}
            className={`h-[103px] object-contain img3`}
          />
        </div>
      </div>
      <div className="flex justify-between bg-white">
        <div></div>
        <div className="line2"></div>
      </div>
    </>
  );
};

export default TrustSection;
