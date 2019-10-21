import React from "react";
import "./language.scss";

import { connect } from "react-redux";
import { setLanguage } from "../../../redux/actions/all";

const mapStateToProps = ({ state }) => ({
  state,
  language: state.user.language
});
function LanguageButton({ state, language, setLanguage }) {
  return [
    <div {...{ id: "language-button", key: "language-button" }}>
      {language.toUpperCase()}
    </div>
  ];
}

export default connect(mapStateToProps)(LanguageButton);
