import React from 'react'
import Mask from '../assets/Mask.png'
const Contact = () => {
  return (
    <div className="flex justify-between mt-16 bg-white contactMain">
      <div className="textMask w-[50%] p-16 flex  flex-col text-left gap-4">
        <h2>
          Ready to give your <span>institution <br /> an upgrade?</span>
        </h2>
        <button className='text-white'>Contact Us</button>
      </div>
      <div className="img w-[50%] flex justify-between">
        <div></div>
        <img src={Mask} alt="mask" className=" mask" />
      </div>
    </div>
  );
}

export default Contact
