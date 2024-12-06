"use client";

import {useState} from "react";

// go to link on button click
export default function CardLink({ link }) {
  const [startAnimation, setStartAnimation] = useState(false);
  
  const handleClick = () => {
    setStartAnimation(true);
    setTimeout(() => {
        window.open(link.link, "_blank");
    }, 1050);
    
  };

  return (
    <div
      onClick={handleClick}
      
    //   style buttons
      className="bg-white flex items-center mx-4 max-w-md w-full h-[5.5rem] rounded-full p-4 shadow-lg shadow-violet-500 cursor-pointer overflow-hidden relative hover:shadow-shmedium hover:shadow-violet-600 duration-[0.2s] CardLink"
    > 
    <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center CardLinkCircle1 ${startAnimation ? "CardLinkCircle1Animation" : ""}`}>

        <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-purple-500 z-10">

        </div>
        
    </div>
    <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center CardLinkCircle2 ${startAnimation ? "CardLinkCircle2Animation" : ""}`}>
        <div className="w-[1rem] h-[1rem] rounded-full bg-purple-300 z-10">

        </div>
        
    </div>
      <div className="flex items-center w-full bg-[transparent] absolute z-20 h-full p-4"> 
      {link.icon}

{/* style fonts */}

  <p className="font-bold m-auto">{link.text}</p>
      </div>
    </div>
  );
}