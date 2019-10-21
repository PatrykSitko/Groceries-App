import { setLanguage } from "../../../actions/all";
import { push } from "redux-first-routing";

const LANGUAGE = 0;
const PATH = 1;

export default ({ dispatch, getState }) => {
  setInterval(() => {
    let languageUpdated = false;
    const {
      state,
      router: { pathname }
    } = getState();
    let {
      user: { language },
      routes
    } = state;
    const requestedLanguage = pathname.split("/").filter(invalid)[LANGUAGE];
    if (!language.includes(requestedLanguage)) {
      languageUpdated = match(
        requestedLanguage,
        routes["language-descriptors"]
      );
      dispatch(
        setLanguage({
          state,
          language: languageUpdated
        })
      );
    }
    if (languageUpdated) {
      language = languageUpdated;
    }
    const requestedPath = pathname.split("/").filter(invalid)[PATH];
    if (requestedPath) {
      const availableRoutes = routes[language];
      const currentPath = Object.values(availableRoutes)[
        findCurrentPathIndex(requestedPath, routes, language)
      ];
      const suggestedPathname = `/${language}/${currentPath}`;
      if (!pathname.includes(suggestedPathname)) {
        const timeout = setTimeout(() => {
          dispatch(push(`${suggestedPathname}`));
          clearTimeout(timeout);
        }, 1300);
      }
    } else {
      const timeout = setTimeout(() => {
        dispatch(push(`/${language}/${routes[language].list}`));
        clearTimeout(timeout);
      }, 1300);
    }
  }, 100);
};

//x.filter(invalid)
function invalid(entry) {
  return typeof entry === "string" && entry !== "";
}

function match(requestedLanguage, languageDescriptors) {
  let currentLanguage = "en";
  let highestMatches = 0;
  for (let language in languageDescriptors) {
    const languageDescriptorSylabs = languageDescriptors[language].split("");
    let matches = 0;
    for (let sylab of languageDescriptorSylabs) {
      if (requestedLanguage.includes(sylab)) {
        ++matches;
      }
    }
    if (matches >= highestMatches) {
      highestMatches = matches;
      currentLanguage = language;
    }
  }
  return currentLanguage;
}

function findCurrentPathIndex(path, routes, language) {
  let currentPathIndex = undefined;
  for (let language in routes) {
    let index = 0;
    for (let route of Object.values(routes[language])) {
      if (route === path) {
        currentPathIndex = index;
        break;
      } else if (route.includes(path)) {
        currentPathIndex = index;
        break;
      }

      ++index;
    }
    if (currentPathIndex) {
      break;
    }
  }
  let highestMatches = 0;
  if (!currentPathIndex) {
    let index = 0;
    for (let route of Object.values(routes[language])) {
      const sylabs = path.split("");
      let matches = 0;
      for (let sylab of sylabs) {
        if (route.includes(sylab)) {
          matches += 1;
        }
      }
      if (matches >= highestMatches) {
        highestMatches = matches;
        currentPathIndex = index;
      }
      ++index;
    }
  }
  return currentPathIndex;
}
