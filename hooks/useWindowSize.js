import { useEffect, useState } from "react";

export default function useWindowSize() {
  const isSSR = !process.browser;

  const [status, setStatus] = useState(() => ({
    sizes: {
      width: isSSR ? 1200 : window.innerWidth,
      height: isSSR ? 800 : window.innerHeight,
    }
  }));

  useEffect(() => {
    function changeWindowSize() {
      const isMobile = window.innerWidth <= 768;
      const isDesktop = !isMobile;

      setStatus({
        sizes: { width: window.innerWidth, height: window.innerHeight },
        isDesktop,
        isMobile,
      });
    }

    changeWindowSize();

    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return status;
}