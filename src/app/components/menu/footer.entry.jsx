import React from "react";

function MenuFooterEntry({
  image: { src, alt } = { src: "#", alt: "" },
  title,
  href
}) {
  return (
    <div className="entry">
      <div className="image-container">
        {/* eslint-disable-next-line jsx-a11y/alt-text*/}
        <img {...{ src, alt }} />
      </div>
      <p className="title">{title}</p>
    </div>
  );
}

export default MenuFooterEntry;
