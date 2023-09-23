import { useState } from "react";

export const Visibility = () => {
  const [isVisibleFirst, setIsVisibleFirst] = useState(true);
  const [isVisibleSecond, setIsVisibleSecond] = useState(true);

  return {
    isVisibleFirst,
    setIsVisibleFirst,
    isVisibleSecond,
    setIsVisibleSecond,
  };
};
