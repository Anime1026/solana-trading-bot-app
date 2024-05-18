import React from "react";

export default function PlatformStatItem({ imageSource, count, title }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full md:w-1/4">
      <img src={imageSource}></img>
      <p className="text-base text-homeButton text-center">{count}+</p>
      <p className="text-xl text-black text-center">{title}</p>
    </div>
  );
}
