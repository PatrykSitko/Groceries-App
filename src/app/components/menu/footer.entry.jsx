import React, { useRef } from "react";

function MenuFooterEntry({
  image: { src, alt } = { src: "#", alt: "" },
  title,
  href
}) {
  return (
    <div className="entry" ref={useRef()}>
      <div className="image-container">
        {typeof src === "string" ? (
          <img {...{ src, className: "image" }} alt={alt} />
        ) : typeof src === "object" ? (
          React.cloneElement(src, { className: "image" })
        ) : (
          ""
        )}
      </div>
      <p className="title">{title}</p>
    </div>
  );
}

export default MenuFooterEntry;
