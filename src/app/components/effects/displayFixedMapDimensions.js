import { useEffect, useState } from "react";
import { getElementRef, getElementRect } from "../tools/element";

export function useDisplayFixedMapDimensions(
  windowInnerDimensions,
  element = document.getElementById("route")
) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    if (element) {
      const elementRef = getElementRef(element);
      const { top, bottom, width, height } = getElementRect(elementRef);
      if (
        typeof bottom === "number" &&
        Object.values([top, bottom, width, height]).join("") !==
          Object.values(style).join("")
      ) {
        setStyle({ top, bottom, width, height });
      }
    }
  }, [element, style, setStyle, windowInnerDimensions]);
  return style;
}
