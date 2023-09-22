import { useState } from "react";

export const Toggle = () => {
  const [isVisible, setIsVisible] = useState({
    feeds: true,
    favorites: true,
  });

  return { isVisible, setIsVisible };
};
