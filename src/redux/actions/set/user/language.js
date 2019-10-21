import SET_LANGUAGE from "../../types";

export default (
  store = { user: { language: "en" }, routes: { "supported-languages": [] } },
  language
) => ({
  type: SET_LANGUAGE,
  payload: {
    ...store.user,
    language:
      typeof language === "string"
        ? checkIfLanguageIsSupported(
            store.routes["supported-languages"],
            language
          )
        : "en"
  }
});

function checkIfLanguageIsSupported(supportedLanguages, language) {
  return supportedLanguages.includes(language) ? language : "en";
}
