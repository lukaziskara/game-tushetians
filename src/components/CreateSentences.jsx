import { useEffect, useMemo, useRef, useState } from "react";

export default function CreateSentences(props) {
  const { point, setPoint, tries, setTries } = props;
  const cardsData = props.cardsData;
  const sentences = props.sentences;
  console.log(props, cardsData);
  const [clickedSentence, setClickedSentence] = useState(0);
  const [clickedWordPlace, setClickedWordPlace] = useState("s0w0");
  console.log(clickedWordPlace);
  const [clickedWord, setClickedWord] = useState(false);
  const [wordReturned, setWordReturned] = useState(false);
  const [clickedWordToReturnId, setClickedWordToReturnId] = useState();

  // const tWords = [];

  // const bWord = useRef(() => {
  //   return console.log("hello from useref");
  // });
  const wordsForCS = useMemo(() => {
    console.log("useMemo", sentences);
    return sentences.map((sentence, index) => {
      const words = sentence.words.split("@");
      return sentence.tWords.split("@").map((tWord, index) => ({
        word: words[index],
        tWord,
        isBack: false,
        sentenceIndex: index,
      }));
    });
  }, []);
  const shuffledDataForCS = useMemo(() => {
    return cardsData
      .map((cardData) => {
        // console.log(cardData)
        return {
          frontText: cardData.frontText,
          backText: cardData.backText,
          id: cardData.id,
        };
      })
      .sort(() => 0.5 - Math.random());
  }, []);
  const chosenPlaceHolder = useRef();
  const wordToReturn = useRef();
  const chosenPlaceHolderId = useRef([0, 0, 0, 0]);
  const wordToReturnId = useRef();
  console.log(clickedSentence, chosenPlaceHolderId.current);
  useEffect(() => {
    chosenPlaceHolder.current =
      wordsForCS[clickedSentence][
        chosenPlaceHolderId.current[clickedSentence]
      ].word;
    console.log(
      clickedSentence,
      "daechidaa"
      // chosenPlaceHolder.current
      // chosenPlaceHolderId.current
    );
  }, [clickedSentence]);
  return (
    <div className="words_and_sentences">
      <div className="sentences">
        {sentences.map((sentence, sentenceIndex) => {
          const words = sentence.words.split("@");
          // const tWords = sentence.tWords.split("@").map((tWord, index) => ({
          //   tWord,
          //   isBack: false,
          //   sentenceIndex,
          // }));
          const globalIndex = sentenceIndex;
          // console.log(sentence, words, tWords, "dwadwa");
          return (
            <div className="test">
              <div
                className={
                  clickedSentence === sentenceIndex
                    ? "full_sentence clicked_Sentence"
                    : "full_sentence"
                }
                onClick={() => {
                  // console.log(sentence);

                  setClickedSentence(sentenceIndex);
                }}
              >
                {sentence.translation}
              </div>
              <div className="flex_wrap">
                {words.map((word, localIndex) => {
                  const fullIndex =
                    "s" + `${globalIndex}` + "w" + `${localIndex}`;
                  // console.log(
                  //   globalIndex,
                  //   localIndex,
                  //   fullIndex,
                  //   clickedWordPlace,
                  //   wordsForCS[sentenceIndex][localIndex].isBack
                  // );
                  return (
                    <div
                      className={
                        wordsForCS[sentenceIndex][localIndex].isBack
                          ? "word_for_sentence word_returned"
                          : clickedSentence === sentenceIndex &&
                            chosenPlaceHolderId.current[clickedSentence] ===
                              localIndex
                          ? "word_for_sentence clicked_word_for_sentence"
                          : "card"
                      }
                    >
                      <div
                        className={
                          props.isWonVisible ? "won_visible" : "won_invisible"
                        }
                      >
                        {word}
                      </div>
                      {/* <div className="">{word.backText}</div> */}
                      <div className="">
                        {wordsForCS[sentenceIndex][localIndex].tWord}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="words_for_sentence">
        {shuffledDataForCS.map((word, index) => (
          <div
            className={
              clickedWord === word.id
                ? "word_for_sentence clicked_word_for_sentence"
                : "card"
            }
            // onClick={() => {
            //   console.log(
            //     "is back?",
            //     wordsForCS[sentenceIndex][localIndex].isBack
            //   );
            //   if (
            //     clickedSentence === "s" + sentenceIndex &&
            //     !wordsForCS[sentenceIndex][localIndex].isBack
            //   ) {
            //     console.log(
            //       "igive winadadeba",
            //       wordsForCS[sentenceIndex][localIndex].isBack
            //     );
            //     chosenPlaceHolder.current = word;
            //     // console.log(
            //     //   word,
            //     //   clickedWordPlace,
            //     //   chosenPlaceHolder.current,
            //     //   "dwadwa",
            //     //   wordToReturn.current
            //     // );
            //     if (
            //       wordToReturn.current === chosenPlaceHolder.current
            //     ) {
            //       setClickedWordPlace(null);
            //       wordsForCS[sentenceIndex][localIndex].isBack = true;
            //       console.log(
            //         wordToReturn.current,
            //         "დაემთხვა",
            //         wordsForCS
            //       );
            //       setPoint(point + 1);
            //       setTries(tries + 1);
            //       console.log(
            //         wordToReturnId.current,
            //         shuffledDataForCS[wordToReturnId.current]
            //       );
            //       // ქვედა რიგში წასაშლელია და ზემოთ გასაფერადებელი.
            //       chosenPlaceHolder.current = null;
            //       wordToReturn.current = null;
            //     } else {
            //       setClickedWordPlace(fullIndex);
            //     }
            //   } else {
            //     console.log("sxva winadadebaa");
            //   }
            // }}
            onClick={() => {
              wordToReturn.current = word.backText;
              console.log(word, word.id);
              setClickedWord(word.id);
              wordToReturnId.current = index;
              if (wordToReturn.current === chosenPlaceHolder.current) {
                wordsForCS[clickedSentence][
                  chosenPlaceHolderId.current[clickedSentence]
                ].isBack = true;
                console.log("daeklikaaa", clickedSentence);
                chosenPlaceHolderId.current[clickedSentence] =
                  chosenPlaceHolderId.current[clickedSentence] + 1;
                console.log(clickedSentence);

                chosenPlaceHolder.current =
                  wordsForCS[clickedSentence][
                    chosenPlaceHolderId.current[clickedSentence]
                  ].word;
                // console.log(wordToReturn.current, "დაემთხვა");
                setClickedWordToReturnId(word.id);
                setPoint(point + 1);
                setTries(tries + 1);
                // ქვედა რიგში წასაშლელია და ზემოთ გასაფერადებელი.
                cardsData.splice(index, 1);
                shuffledDataForCS.splice(wordToReturnId.current, 1);
              }
            }}
          >
            <div className="">{word.backText}</div>
            <div
              className={props.isWonVisible ? "won_visible" : "won_invisible"}
            >
              {word.frontText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
