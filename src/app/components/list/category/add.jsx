import React from "react";
import "./add.scss";

function AddListCategory({
  product,
  currentLanguage: language,
  supportedLanguages,
  ...other
}) {
  const translateLanguages = [supportedLanguages]
    .flat(Infinity)
    .filter(supportedLanguage => supportedLanguage !== language);
  return (
    <div {...other}>
      <div className="product-descriptor">{product}</div>
    </div>
  );
}

export default AddListCategory;
