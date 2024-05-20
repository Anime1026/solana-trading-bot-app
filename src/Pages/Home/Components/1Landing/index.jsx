import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import axios from "axios";

export default function LandingSection() {

  const [state, setState] = useState(false);

  const handleStart = async () => {
    if (!state) {
      const result = await axios.get("http://solanatradingbot.store/api/start-bot");
      if (result.data.state) setState(true);
      else setState(false);
    } else {
      const result = await axios.get("http://solanatradingbot.store/api/stop-bot");
      if (result.data.state) setState(false);
      else setState(true);
    }
  }
  return (
    <div className="">
      <div
        className="flex flex-col justify-center items-center w-full bg-cover bg-no-repeat bg-center h-[100vh]"
        style={{
          backgroundImage: `url('/assets/images/landing.png')`,
        }}
      >
        <div className="flex flex-col justify-center items-center gap-8 pb-10">
          <h1 className="font-bold text-[60px] text-white text-center">
            The Ultimate
            <span className="text-red-600">Solana Bot</span>
          </h1>
          <p className="text-xl font-medium text-white text-center">
            A cutting-edge Rust-based Frontrunner, Sniping, and Minter Bot for
            the Solana blockchain.
          </p>
          <Button
            variant="gradient"
            className="flex items-center gap-4 rounded-full w-40 justify-center"
            onClick={() => handleStart()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
            {state ? "Stop" : "Start"}
          </Button>
        </div>
      </div>
    </div>
  );
}
