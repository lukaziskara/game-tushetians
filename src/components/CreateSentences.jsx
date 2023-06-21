import { useEffect, useMemo, useRef, useState } from "react";

export default function CreateSentences(props) {
  const { point, setPoint, tries, setTries, wordsForCards, setPartOfGame } =
    props;
  // const cardsData = props.cardsData;
  const sentences = props.sentences;
  // console.log(props, cardsData);
  const [clickedSentence, setClickedSentence] = useState(0);
  const [clickedWordPlace, setClickedWordPlace] = useState("s0w0");
  const [clickedWord, setClickedWord] = useState(false);
  const [wordReturned, setWordReturned] = useState(false);
  const [clickedWordToReturnId, setClickedWordToReturnId] = useState();
  const [changed, setChanged] = useState(0);

  const chosenPlaceHolder = useRef();
  const wordToReturn = useRef();
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
  console.log(
    clickedWordPlace,
    wordsForCS[clickedSentence],
    chosenPlaceHolderId.current[clickedSentence]
  );

  console.log(
    wordsForCards,
    clickedSentence,
    chosenPlaceHolderId.current,
    chosenPlaceHolder.current,
    wordsForCS[clickedSentence]
  );
  const shuffledDataForCS = useMemo(() => {
    return wordsForCards
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

  // function tryHandler() {
  // }
  useEffect(() => {
    if (
      chosenPlaceHolderId.current[clickedSentence] <
      wordsForCS[clickedSentence].length
    ) {
      console.log(
        wordsForCS[clickedSentence][
          chosenPlaceHolderId.current[clickedSentence]
        ].word
      );
      chosenPlaceHolder.current =
        wordsForCS[clickedSentence][
          chosenPlaceHolderId.current[clickedSentence]
        ].word;
    }
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
          console.log(
            sentence,
            words,
            "dwadwa",
            chosenPlaceHolderId.current[clickedSentence]
          );
          return (
            <div
              className={
                clickedSentence === sentenceIndex
                  ? `${fullOrFill.current[clickedSentence]}` +
                    " clicked_sentence"
                  : `${fullOrFill.current[sentenceIndex]}` + " cursor_pointer"
              }
            >
              <div
                className="to_translate"
                onClick={() => {
                  // console.log(sentence);
                  setClickedSentence(sentenceIndex);
                }}
              >
                {sentence.translation}
              </div>
              <div
                className={
                  clickedSentence === sentenceIndex
                    ? "flex_between"
                    : "display_none"
                }
              >
                <div className="build_here">
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
                            ? "word_returned"
                            : clickedSentence === sentenceIndex &&
                              chosenPlaceHolderId.current[clickedSentence] ===
                                localIndex
                            ? "word_for_sentence clicked_word_for_sentence"
                            : "word_for_sentence"
                        }
                      >
                        <div className="">
                          {wordsForCS[sentenceIndex][localIndex].tWord}
                        </div>
                        <div
                          className={
                            wordsForCS[sentenceIndex][localIndex].isBack
                              ? "back_visible"
                              : "back_invisible"
                          }
                        >
                          {word}
                        </div>
                        {/* <div className="">{word.backText}</div> */}
                      </div>
                    );
                  })}
                </div>
                <button
                  className={
                    chosenSentenceState.current[clickedSentence]
                      ? ".full_sentence_button"
                      : ""
                  }
                  onClick={() => {
                    console.log(
                      sentence.sentence.split(" ").length,
                      chosenPlaceHolderId.current[clickedSentence],
                      isCorrect.current,
                      !chosenSentenceState.current[clickedSentence]
                    );
                    if (
                      sentence.sentence.split(" ").length ===
                        chosenPlaceHolderId.current[clickedSentence] &&
                      // isCorrect.current &&
                      !chosenSentenceState.current[clickedSentence]
                    ) {
                      // setPoint(
                      //   point + chosenPlaceHolderId.current[clickedSentence]
                      // );
                      chosenSentenceState.current[clickedSentence] = true;
                      // setTries(
                      //   tries + chosenPlaceHolderId.current[clickedSentence]
                      // );
                      console.log(
                        sentenceIndex,
                        chosenPlaceHolderId.current[clickedSentence],
                        sentence.sentence,
                        fullOrFill.current
                      );
                      fullOrFill.current[clickedSentence] = "full_sentence";
                      sentenceToGo.current--;
                      setChanged(!changed);
                    } else {
                      console.log("წინადადება სრული არაა ან უკვე გათამაშდა.");
                    }
                  }}
                >
                  {chosenSentenceState.current[clickedSentence]
                    ? "შევსებულია"
                    : "ცდა"}
                </button>
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
                ? "card_to_choose clicked_card_to_choose"
                : "card_to_choose"
            }
            onClick={() => {
              wordToReturn.current = word.backText;
              // console.log(word, word.id);
              setClickedWord(word.id);
              wordToReturnId.current = index;
              console.log(
                "daeklikaaa",
                clickedSentence,
                wordToReturn.current,
                chosenPlaceHolder.current
                // wordsForCS[clickedSentence][
                //   chosenPlaceHolderId.current[clickedSentence]
                // ].word
              );
              if (
                chosenPlaceHolderId.current[clickedSentence] <
                wordsForCS[clickedSentence].length
              ) {
                chosenPlaceHolder.current =
                  wordsForCS[clickedSentence][
                    chosenPlaceHolderId.current[clickedSentence]
                  ].word;
                if (wordToReturn.current === chosenPlaceHolder.current) {
                  isCorrect.current *= 1;
                  wordsForCS[clickedSentence][
                    chosenPlaceHolderId.current[clickedSentence]
                  ].isBack = true;
                  console.log(
                    "დაემთხვა",
                    isCorrect.current,
                    wordsForCS[clickedSentence][
                      chosenPlaceHolderId.current[clickedSentence]
                    ].isBack
                  );
                  console.log(
                    chosenPlaceHolder.current,
                    wordsForCS[clickedSentence].length,
                    chosenPlaceHolderId.current[clickedSentence],
                    "დაემატა",
                    [1, 2] === [1, 2]
                  );
                  chosenPlaceHolderId.current[clickedSentence]++;
                  // chosenPlaceHolderId.current[clickedSentence] + 1;
                  shuffledDataForCS.splice(index, 1);
                  setPoint(point + 1);
                  setTries(tries + 1);
                } else {
                  isCorrect.current *= 0;
                  console.log("არ დაემთხვა", isCorrect.current);
                  setTries(tries + 1);
                }
              } else {
                chosenPlaceHolder.current = null;
                console.log(clickedSentence);
              }
              // console.log(clickedSentence);
              // console.log(wordToReturn.current, "დაემთხვა");
              // setClickedWordToReturnId(word.id);
              // setPoint(point + 1);
              // setTries(tries + 1);
              // ქვედა რიგში წასაშლელია და ზემოთ გასაფერადებელი.
              // shuffledDataForCS.splice(wordToReturnId.current, 1);
            }}
          >
            <div className="">{word.backText}</div>
            {/* <div
              className={propBack ? "won_visible" : "won_invisible"}
            >
              {word.frontText}
            </div> */}
          </div>
        ))}
      </div>
      <div className="next_game">
        {sentenceToGo.current === 0 ? (
          // <div className="next">შემდეგი თამაში</div>
          <button onClick={() => setPartOfGame(3)}>შემდეგი ეტაპი</button>
        ) : (
          // : <div className="">თამაში</div>}
          console.log(
            "არ დასრულებულა"
            // wonWords.length,
            // wonWords.length === 2,
            // startingWords.current
          )
        )}
      </div>
    </div>
  );
}
