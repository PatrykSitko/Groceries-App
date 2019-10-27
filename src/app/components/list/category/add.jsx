import React from "react";
import "./add.scss";

function AddListCategory({
  currentLanguage: language,
  supportedLanguages,
  ...other
}) {
  const translateLanguages = [supportedLanguages]
    .flat(Infinity)
    .filter(supportedLanguage => supportedLanguage !== language);
  return (
    <div {...other}>
      Current language:{language}
      <br />
      supported languages: {supportedLanguages.join(" | ")}
      <br />
      translate languages: {translateLanguages.join("|")}
    </div>
  );
}

export default AddListCategory;
