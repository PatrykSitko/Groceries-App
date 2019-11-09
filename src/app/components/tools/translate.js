export async function translate(sourceLang, targetLang, sentence) {
  const checkedSentence = (() => {
    let sentenceToCheck = sentence;
    do {
      sentenceToCheck = sentenceToCheck.replace(" ", "%20");
    } while (sentenceToCheck.includes(" "));
    return sentenceToCheck;
  })();
  return await fetch(
    `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?q=${checkedSentence}&langpair=${sourceLang}|${targetLang}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "translated-mymemory---translation-memory.p.rapidapi.com",
        "x-rapidapi-key": "159ba56b3bmsha72dcac3340e2fap1aff02jsn53571ca7511a"
      }
    }
  )
    .then(res => res.json())
    .then(json => json.responseData.translatedText);
}
