import React from "react";
import { connect } from "react-redux";

import List, { Category } from "../components/list";

const mapStateToProps = ({
  state: {
    user: { language },
    food: { "selected-category-key": selectedCategoryKey, categories }
  }
}) => ({ language, selectedCategoryKey, categories });

function ListRoute({ language, selectedCategoryKey, categories }) {
  return (
    <section id="list">
      <List initiallySelectedCategoryKey={selectedCategoryKey}>
        {[categories].flat(Infinity).map(({ key, title }) => (
          <Category {...{ key, id: key, title: title[language] }} />
        ))}
      </List>
    </section>
  );
}

export default connect(mapStateToProps)(ListRoute);
