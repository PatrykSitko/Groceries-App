import React, { useState } from "react";
import "./language.scss";

import { connect } from "react-redux";
import { setLanguage } from "../../../redux/actions/all";

const mapStateToProps = ({ state }) => ({
  state,
  language: state.user.language
});
function LanguageButton({ state, language, setLanguage }) {
  const [isSelected, setIsSelected] = useState(false);
  return [
    <div
      {...{
        id: "language-button",
        className: isSelected ? "selected" : undefined,
        key: "language-button",
        onClick: () => setIsSelected(!isSelected)
      }}
    >
      {language.toUpperCase()}
    </div>
  ];
}

export default connect(mapStateToProps)(LanguageButton);
