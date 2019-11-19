import React, { useState, useEffect } from "react";
import InputField from "../../../input/field";
import { connect } from "react-redux";
import List, { Category } from "../../../list";
import ConfirmButton from "../../../button/confirm";
import "./popup.scss";

const FUNCTION = 1;
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
function PurchasePopup({
  state,
  language,
  product,
  useWhoPurchasedState,
  usePriceState,
  useConfirmPurchaseState,
  ...others
}) {
  delete others.dispatch;
  const {
    user: { coleagues }
  } = state;
  const [priceText, setPriceText] = usePriceState;
  const setWhoPurchased = useWhoPurchasedState[FUNCTION];
  const [priceTextSepatatorIndex, setPriceSeparatorIndex] = useState(undefined);
  const [currentlySelectedColeague, setCurrentlySelectedColeague] = useState(
    coleagues[0]
  );
  const [confirmed, setConfirmed] = useConfirmPurchaseState;
  useEffect(() => {
    if (priceText.split("")[0] !== "$") {
      setPriceText("$".concat(priceText));
    }
    if (!priceTextSepatatorIndex && priceText.indexOf(",") >= 0) {
      setPriceSeparatorIndex(priceText.indexOf(","));
    }
    if (priceText.indexOf(",") !== priceText.lastIndexOf(",")) {
      let index = undefined;
      if (priceTextSepatatorIndex <= priceText.indexOf(",")) {
        index = priceText.indexOf(",");
        setPriceSeparatorIndex(priceText.lastIndexOf(","));
      } else {
        index = priceText.lastIndexOf(",");
        setPriceSeparatorIndex(priceText.indexOf(","));
      }
      setPriceText(
        `${priceText.slice(0, index)}${priceText.slice(
          index + 1,
          priceText.length
        )}`
      );
    } else if (priceText.indexOf(",") === 0) {
      setPriceText("0".concat(priceText));
    }
  }, [priceText, setPriceText, priceTextSepatatorIndex]);
  return (
    <div id="popup" className="purchase" {...others}>
      <div className="descriptor">{product}</div>
      <div className="price">{priceDescriptor[language]}</div>
      <InputField
        allowKeys={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ","]}
        useState={[priceText, setPriceText]}
      />
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
      <ConfirmButton
        onlySetConfirmTrueAllowed={true}
        onClick={() => setWhoPurchased(currentlySelectedColeague)}
        useState={[confirmed, setConfirmed]}
      />
    </div>
  );
}

export default connect(mapStateToProps)(PurchasePopup);
