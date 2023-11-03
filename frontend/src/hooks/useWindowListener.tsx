import { useEffect, useState } from "react";

export default function useWindowListener(
  eventType: string,
  listener: EventListener
) {
  // const [winWidth, setWinWidth] = useState(0)
  useEffect(() => {
    // the code in this block will run if everything has been rendered
    // const handleWinWidthChange = () => {
    //     setWinWidth(window.innerWidth)
    //     alert(window.innerWidth)
    // }
    window.addEventListener(eventType, listener);
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, []); // [] to run in the first renderings
}
