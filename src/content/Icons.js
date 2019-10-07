import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faQuestion,
  faSignOutAlt,
  faUtensils,
  faBed,
  faBath,
  faHeartbeat
} from "@fortawesome/free-solid-svg-icons";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export function AngleLeft() {
  return <FontAwesomeIcon icon={faAngleLeft} color={"#000000"} size="3x" />;
}

export function AngleRight() {
  return <FontAwesomeIcon icon={faAngleRight} color={"#000000"} size="3x" />;
}

export function Question() {
  return <FontAwesomeIcon icon={faQuestion} color={"#000000"} size="1x" />;
}

export function SignOut() {
  return <FontAwesomeIcon icon={faSignOutAlt} color={"#000000"} size="1x" />;
}

export function Bed() {
  return <FontAwesomeIcon icon={faBed} color={"#000000"} size="1x" />;
}

export function Bath() {
  return <FontAwesomeIcon icon={faBath} color={"#000000"} size="1x" />;
}

export function Heartbeat() {
  return <FontAwesomeIcon icon={faHeartbeat} color={"#000000"} size="1x" />;
}

export function Utensils() {
  return <FontAwesomeIcon icon={faUtensils} color={"#000000"} size="1x" />;
}

export function Google() {
  return <FontAwesomeIcon icon={faGoogle} color={"#ffffff"} size="1x" />;
}
