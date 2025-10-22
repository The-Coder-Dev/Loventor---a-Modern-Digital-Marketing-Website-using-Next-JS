import React from "react";

const Infotip = ({boxContent, text}) => {
  return (
    <div className="flex bg-white/10 backdrop-blur-3xl rounded-lg w-fit items-center border-[1px] border-white/20 gap-2 px-2 py-2 ">
      <div className="bg-primary outline-2 outline-accent text-white text-sm font-light py-1 px-2 rounded-sm">
        {boxContent}
      </div>
      <div className="text-white font-extralight">
        {text}
      </div>
    </div>
  );
};

export default Infotip;
