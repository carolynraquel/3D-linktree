"use client";

// go to link on button click
export default function CardLink({ link }) {
  const handleClick = () => {
    window.open(link.link, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      
    //   style buttons
      className="bg-white flex items-center mx-4 max-w-md w-full rounded-full p-4 shadow-lg shadow-violet-500 cursor-pointer"
    >
      {link.icon}

    {/* style fonts */}

      <p className="font-bold m-auto">{link.text}</p>
    </div>
  );
}