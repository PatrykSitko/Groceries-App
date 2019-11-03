import React, { useState, useEffect } from "react";
import InputField from "../../../input/field";
import { connect } from "react-redux";
import List, { Category } from "../../../list";
import ConfirmButton from "../../../button/confirm";
// import { getElementRef, getElementRect } from "../../../tools/element";
import "./popup.scss";

const priceDescriptor = {
  pl: "Cena",
  en: "Price",
  fr: "Prix",
  nl: "Prijs"
};

const personDescriptor = {
  pl: "Kto",
  en: "Who",
  fr: "Qui",
  nl: "Wie"
};

const mapStateToProps = ({ state }) => ({
  state
});
function PurchasePopup({ state, language, product, usePriceState, ...others }) {
  delete others.dispatch;
  const {
    user: { coleagues }
  } = state;
  // const [popupStyle, setPopupStyle] = useState({ marginTop: 0 });
  const [inputText, setInputText] = useState("");
  const [currentlySelectedColeague, setCurrentlySelectedColeague] = useState(
    coleagues[0]
  );
  const [confirmed, setConfirmed] = useState(false);
  // useEffect(() => {
  //   let newInputText = inputText;
  //   newInputText = newInputText
  //     .split("")
  //     .filter(number => typeof number === "number")
  //     .join("");
  //   if (newInputText.split("")[0] !== "$") {
  //     newInputText = "$".concat(inputText);
  //   }
  //   if (inputText !== newInputText) {
  //     setInputText(newInputText);
  //   }
  // }, [inputText, setInputText]);
  // useEffect(() => {
  //   const popupRef = getElementRef(document.getElementById("popup"));
  //   const popupContainerRef = getElementRef(
  //     document.getElementById("popup-background")
  //   );
  //   const popupRect = getElementRect(popupRef);
  //   const popupContainerRect = getElementRect(popupContainerRef);
  //   if (!popupRect || !popupContainerRect) {
  //     return;
  //   }
  //   const { height: popupHeight } = popupRect;
  //   const { height: popupContainerHeight } = popupContainerRect;
  //   const newMarginTop = (popupContainerHeight - popupHeight) / 2;
  //   if (popupStyle.marginTop !== newMarginTop) {
  //     setPopupStyle({ marginTop: newMarginTop });
  //   }
  // }, [popupStyle, setPopupStyle]);
  return (
    <div id="popup" className="purchase" /*style={popupStyle}*/ {...others}>
      <div className="descriptor">{product}</div>
      <div className="price">{priceDescriptor[language]}</div>
      <InputField useState={[inputText, setInputText]} />
      <div className="who">{personDescriptor[language]}</div>
      <List
        hideAddClick={true}
        initiallySelectedCategoryKey={coleagues[0]}
        className="coleagues"
        getSelectedCategoryKey={coleague =>
          setCurrentlySelectedColeague(coleague)
        }
      >
        {[coleagues].flat(Infinity).map(coleague => (
          <Category {...{ key: coleague, id: coleague, title: coleague }} />
        ))}
      </List>
      <ConfirmButton useState={[confirmed, setConfirmed]} />
    </div>
  );
}

export default connect(mapStateToProps)(PurchasePopup);
