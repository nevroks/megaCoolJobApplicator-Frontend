import { useEffect, useState } from "react";

const useMediaQuery = (width: number): boolean => {
  const [isWidth, setIsWidth] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsWidth(window.innerWidth < width);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isWidth;
};

export default useMediaQuery;
