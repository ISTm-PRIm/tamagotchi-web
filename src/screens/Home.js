import React from "react";
import Lottie from "react-lottie";

import hello from "../images/Walk.tgs.json";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hello,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <div>Welcome To Home</div>

      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};

export default Home;
