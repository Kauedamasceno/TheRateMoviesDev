import React, { Dispatch, useEffect } from "react";

import { useSizeScreen } from "./useSizeScreen";

type useSizeScreenDeckProps = {
  setClick: Dispatch<React.SetStateAction<number[]>>;
}

export const useSizeScreenDeck = ({
  setClick}:useSizeScreenDeckProps) => {
  const size = useSizeScreen();

  useEffect(() => {
    if (size === true) {
      setClick([0, 3]);
    } else {
      setClick([0, 6]);
    }
  }, [size,setClick]);
};
