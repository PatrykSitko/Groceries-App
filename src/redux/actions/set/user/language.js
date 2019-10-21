// import SET_LANGUAGE from "../../types"; not working with (required) const string 🤪

export default ({
  state: { user, routes } = {
    user: { language: "en" },
    routes: { "supported-languages": [] }
  },
  language
}) => ({
  type: "SET_LANGUAGE",
  payload: {
    user: {
      ...user,
      language: checkIfLanguageIsSupported(
        routes["supported-languages"],
        language
      )
    }
  }
});

function checkIfLanguageIsSupported(supportedLanguages, language) {
  return supportedLanguages.includes(language) ? language : "en";
}
