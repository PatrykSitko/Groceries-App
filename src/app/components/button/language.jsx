import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./language.scss";

import { connect } from "react-redux";
import LanguageButtonEntry from "./language.entry";

const mapStateToProps = ({ state }) => ({
  windowInnerDimensions: state.window.inner,
  language: state.user.language,
  languageDescriptors: state.routes["language-descriptors"]
});
function LanguageButton({
  windowInnerDimensions,
  language,
  languageDescriptors
}) {
  const ref = useRef();
  const [isSelected, setIsSelected] = useState(false);
  const [languageSelectionStyle, setLanguageSelectionStyle] = useState(
    undefined
  );
  useEffect(() => {
    if (ref && ref.current) {
      const { width } = ReactDOM.findDOMNode(
        ref.current
      ).getBoundingClientRect();
      if (!languageSelectionStyle || languageSelectionStyle.width !== width) {
        setLanguageSelectionStyle({ width });
      }
    }
  }, [
    ref,
    languageSelectionStyle,
    setLanguageSelectionStyle,
    windowInnerDimensions
  ]);
  return [
    <div
      {...{
        ref,
        id: "language-button",
        className: isSelected ? "selected" : undefined,
        key: "language-button",
        onClick: () => setIsSelected(!isSelected)
      }}
    >
      {language.toUpperCase()}
    </div>,
    <div
      {...{
        id: "language-selection",
        key: "language-selection",
        className: isSelected ? undefined : "hidden",
        style: languageSelectionStyle
      }}
    >
      {Object.keys(languageDescriptors).map(entry => (
        <LanguageButtonEntry
          key={entry}
          title={entry}
          isCurrent={entry === language}
          onClick={() => setIsSelected(false)}
        />
      ))}
    </div>
  ];
}

export default connect(mapStateToProps)(LanguageButton);
