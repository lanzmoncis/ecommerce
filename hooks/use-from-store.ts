"use client";

import { useEffect, useState } from "react";

export const useFromStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  storeCallback: (state: T) => F
) => {
  const [state, setState] = useState<F>();

  const stateOfStore = store(storeCallback) as F;

  useEffect(() => {
    setState(stateOfStore);
  }, [stateOfStore]);

  return state;
};
