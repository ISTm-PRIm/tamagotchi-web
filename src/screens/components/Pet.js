import React from "react";
import Lottie from "react-lottie";

const Pet = props => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.img,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
      isStopped={false}
      isPaused={false}
    />
  );
};

export default Pet;
