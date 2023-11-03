import { useEffect, useMemo, useRef, useState } from "react";
import { getShuffled } from "../getData";

export default function CreateSentences(props) {
  const {
    point,
    setPoint,
    tries,
    setTries,
    wordsFromSentences,
    sentencesData,
    setPartOfGame,
  } = props;

  const [clickedWord, setClickedWord] = useState(false);
  const [sentenceToFill, setSentenceToFill] = useState(0);
  const [wordToReturn, setWordToReturn] = useState(0);
  
  const [clickedWordPlace, setClickedWordPlace] = useState("s0w0");
  const [wordReturned, setWordReturned] = useState(false);
  const [clickedWordToReturnId, setClickedWordToReturnId] = useState();
  const [changed, setChanged] = useState(0);

  const chosenPlaceHolder = useRef();
  const chosenSentenceState = useRef([false, false, false, false]);
  const chosenPlaceHolderId = useRef([0, 0, 0, 0]);
  const wordToReturnId = useRef();
  const isCorrect = useRef(1);
  const fullOrFill = useRef([
    "to_fill_sentence",
    "to_fill_sentence",
    "to_fill_sentence",
    "to_fill_sentence",
  ]);
  const sentenceToGo = useRef(4);

  const wordsForCS = useMemo(() => {
    // console.log("useMemo", sentencesData, words);
    return sentencesData.map((sentence, index) => {
      const words = sentence.words;
      return sentence.tWords.split("@").map((tWord, index) => ({
        word: words[index],
        tWord,
        isBack: false,
        sentenceIndex: index,
      }));
    });
  }, []);

  const shuffledSentencesData = useMemo(() => getShuffled(sentencesData), []);
  const shuffledWords = useMemo(() => getShuffled(wordsFromSentences), []);
  const currentWords = shuffledSentencesData[sentenceToFill].words;
  // console.log(shuffledSentencesData, sentencesData);
  // console.log(shuffledWords, wordsFromSentences);
  function clickHandler(word, index) {
    setClickedWord(index);
    setTries(tries + 1);
    if (currentWords[wordToReturn].bWord == word.bWord) {
      currentWords[wordToReturn].isBack = true;
      // shuffledSentencesData[3].sentence = "ტესტი ტესტი ტესტი";
      setWordToReturn(wordToReturn + 1);
      setPoint(point + 1);
      setClickedWord(null);
      shuffledWords.splice(index, 1);
    }
  }

  function goToNext() {
    if (
      sentenceToFill < wordsForCS.length - 1 &&
      currentWords.length == chosenPlaceHolderId.current[sentenceToFill]
    ) {
      // console.log("მოიმატა");
      setSentenceToFill(sentenceToFill + 1);
    } else if (
      sentenceToFill === wordsForCS.length - 1 &&
      wordsForCS.length == chosenPlaceHolderId.current[sentenceToFill]
    ) {
      setPartOfGame(3);
    }
  }
  useEffect(() => {
    if (
      chosenPlaceHolderId.current[sentenceToFill] <
      wordsForCS[sentenceToFill].length
    ) {
      chosenPlaceHolder.current =
        wordsForCS[sentenceToFill][
          chosenPlaceHolderId.current[sentenceToFill]
        ].word;
    }
  }, [sentenceToFill]);
  return (
    <div className="words_and_sentences">
      <div className="sentences">
        <div className="">
          <div className="to_translate">
            {shuffledSentencesData[sentenceToFill].translation}
          </div>
          <div className="build_here">
            {currentWords.map((word, index) => (
              <div
                className={
                  currentWords[index].isBack
                    ? "word_returned"
                    : "word_for_sentence"
                }
              >
                {word.bWord}
                {/* {wordsForCS[sentenceToFill][index].isBack ? word : "დოშ"} */}
              </div>
            ))}
          </div>
          <button onClick={() => goToNext()}>
            {sentenceToFill < wordsForCS.length - 1
              ? "შემდეგი"
              : "შემდეგი ეტაპი  "}
          </button>
        </div>
      </div>
      <div className="words_for_sentence">
        {shuffledWords.map((word, index) => (
          <div
            className={
              clickedWord === index
                ? "card_to_choose clicked_card_to_choose"
                : "card_to_choose"
            }
            onClick={() => clickHandler(word, index)}
          >
            <div className="">{word.bWord}</div>
          </div>
        ))}
      </div>
      <div className="next_game">
        {sentenceToGo.current === 0 ? (
          <button onClick={() => setPartOfGame(3)}>შემდეგი ეტაპი</button>
        ) : (
          console.log("არ დასრულებულა")
        )}
      </div>
    </div>
  );
}

// console.log(
//   "daeklikaaa",
//   sentenceToFill,
//   wordToReturn.current,
//   chosenPlaceHolder.current
//   // wordsForCS[clickedSentence][
//   //   chosenPlaceHolderId.current[clickedSentence]
//   // ].word
// );
// if (
//   chosenPlaceHolderId.current[sentenceToFill] <
//   wordsForCS[sentenceToFill].length
// ) {
//   chosenPlaceHolder.current =
//     wordsForCS[sentenceToFill][
//       chosenPlaceHolderId.current[sentenceToFill]
//     ].word;
//   if (wordToReturn.current === chosenPlaceHolder.current) {
//     isCorrect.current *= 1;
//     wordsForCS[sentenceToFill][
//       chosenPlaceHolderId.current[sentenceToFill]
//     ].isBack = true;
//     // console.log(
//     //   "დაემთხვა",
//     //   isCorrect.current,
//     //   wordsForCS[sentenceToFill][
//     //     chosenPlaceHolderId.current[sentenceToFill]
//     //   ].isBack
//     // );
//     // console.log(
//     //   chosenPlaceHolder.current,
//     //   wordsForCS[sentenceToFill].length,
//     //   chosenPlaceHolderId.current[sentenceToFill],
//     //   "დაემატა"
//     // );
//     chosenPlaceHolderId.current[sentenceToFill]++;
//     // chosenPlaceHolderId.current[clickedSentence] + 1;
//     shuffledWords.splice(index, 1);
//     setPoint(point + 1);
//     setTries(tries + 1);
//   } else {
//     isCorrect.current *= 0;
//     // console.log("არ დაემთხვა", isCorrect.current);
//     setTries(tries + 1);
//   }
// } else {
//   chosenPlaceHolder.current = null;
//   // console.log(sentenceToFill);
// }
