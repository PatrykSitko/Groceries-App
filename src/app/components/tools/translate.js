export default async function Translate(sourceLang, targetLang, sentence) {
  const checkedSentence = (() => {
    let sentenceToCheck = sentence;
    do {
      sentenceToCheck = sentenceToCheck.replace(" ", "%20");
    } while (sentenceToCheck.includes(" "));
    return sentenceToCheck;
  })();
  return await fetch(
    `https://api.mymemory.translated.net/get?q=${checkedSentence}&langpair=${sourceLang}|${targetLang}`
  ).then(res => res.json());
}
