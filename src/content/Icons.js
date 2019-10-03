import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faInstagram,
  faYoutube,
  faVk,
  faFacebookSquare,
  faGoogle,
  faTwitch
} from "@fortawesome/free-brands-svg-icons";

export function AngleLeft() {
  return <FontAwesomeIcon icon={faAngleLeft} color={"#000000"} size="1x" />;
}

export function AngleRight() {
  return <FontAwesomeIcon icon={faAngleRight} color={"#000000"} size="1x" />;
}

export function Question() {
  return <FontAwesomeIcon icon={faQuestion} color={"#000000"} size="1x" />;
}

// export function Instagram() {
//   return <FontAwesomeIcon icon={faInstagram} color={BLUE} size="1x" />;
// }

// export function Twiter() {
//   return <FontAwesomeIcon icon={faTwitter} color={BLUE} size="1x" />;
// }

// export function VK() {
//   return <FontAwesomeIcon icon={faVk} color={BLUE} size="1x" />;
// }

// export function Facebook() {
//   return <FontAwesomeIcon icon={faFacebookSquare} color={BLUE} size="1x" />;
// }

export function Google() {
  return <FontAwesomeIcon icon={faGoogle} color={"#ffffff"} size="1x" />;
}

// export function Twitch() {
//   return <FontAwesomeIcon icon={faTwitch} color={BLUE} size="1x" />;
// }
