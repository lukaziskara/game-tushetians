import { useEffect, useMemo, useRef, useState } from "react";

export default function CreateSentences(props) {
  console.log(props);
  const { point, setPoint, tries, setTries, wordsForCards, setPartOfGame } =
    props;
  const sentences = props.sentences;
  const [clickedWordPlace, setClickedWordPlace] = useState("s0w0");
  const [clickedWord, setClickedWord] = useState(false);
  const [wordReturned, setWordReturned] = useState(false);
  const [clickedWordToReturnId, setClickedWordToReturnId] = useState();
  const [changed, setChanged] = useState(0);
  const [sentenceToFill, setSentenceToFill] = useState(0);

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

  const words = sentences[sentenceToFill].words.split("@");

  const withPictures = useMemo(() => {
    return sentences.filter((sentence) => sentence.picture);
  }, []);
  const shuffledSentences = useMemo(() => {
    // const tempSentences = sentences;
    return sentences
      .map((sentence) => sentence)
      .sort(() => 0.5 - Math.random());
  }, []);

  const wordsForCS = useMemo(() => {
    console.log("useMemo", sentences);
    return withPictures.map((sentence, index) => {
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
  console.log(
    "withPicture length",
    withPictures.length,
    withPictures,
    wordsForCS
  );
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
      {withPictures.length != 0 ? (
      <div className="">
        <div className="sentences">
          <div className="">
            <div className="to_translate">
              <img
                src={withPictures[0].pathOfPicture}
                alt=""
                // width="100px"
              />
            </div>
            <div className="build_here">
              {words.map((word, index) => (
                <div
                  className={
                    wordsForCS[sentenceToFill][index].isBack
                      ? "word_returned"
                      : // : clickedSentence === sentenceIndex &&
                        //   chosenPlaceHolderId.current[clickedSentence] ===
                        //     localIndex
                        // ? "word_for_sentence clicked_word_for_sentence"
                        "word_for_sentence"
                  }
                >
                  {wordsForCS[sentenceToFill][index].isBack ? word : "დოშ"}
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                console.log(
                  "fill",
                  sentenceToFill,
                  wordsForCS.length,
                  chosenPlaceHolderId.current[sentenceToFill]
                );
                if (
                  sentenceToFill < wordsForCS.length - 1 &&
                  words.length == chosenPlaceHolderId.current[sentenceToFill]
                ) {
                  console.log("მოიმატა");
                  setSentenceToFill(sentenceToFill + 1);
                  withPictures.splice(0, 1);
                } else if (
                  sentenceToFill === wordsForCS.length - 1 &&
                  wordsForCS.length ==
                    chosenPlaceHolderId.current[sentenceToFill]
                ) {
                  // setPartOfGame(6);
                }
              }}
            >
              {sentenceToFill < wordsForCS.length - 1
                ? "შემდეგი"
                : "შემდეგი ეტაპი  "}
            </button>
          </div>
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
                  sentenceToFill,
                  wordToReturn.current,
                  chosenPlaceHolder.current
                  // wordsForCS[clickedSentence][
                  //   chosenPlaceHolderId.current[clickedSentence]
                  // ].word
                );
                if (
                  chosenPlaceHolderId.current[sentenceToFill] <
                  wordsForCS[sentenceToFill].length
                ) {
                  chosenPlaceHolder.current =
                    wordsForCS[sentenceToFill][
                      chosenPlaceHolderId.current[sentenceToFill]
                    ].word;
                  if (wordToReturn.current === chosenPlaceHolder.current) {
                    isCorrect.current *= 1;
                    wordsForCS[sentenceToFill][
                      chosenPlaceHolderId.current[sentenceToFill]
                    ].isBack = true;
                    console.log(
                      "დაემთხვა",
                      isCorrect.current,
                      wordsForCS[sentenceToFill][
                        chosenPlaceHolderId.current[sentenceToFill]
                      ].isBack
                    );
                    console.log(
                      chosenPlaceHolder.current,
                      wordsForCS[sentenceToFill].length,
                      chosenPlaceHolderId.current[sentenceToFill],
                      "დაემატა"
                      // {[1, 2] == [1, 2]}
                    );
                    chosenPlaceHolderId.current[sentenceToFill]++;
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
                  console.log(sentenceToFill);
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
      </div>
      ):(
      <div className="next_game">
        <button onClick={() => setPartOfGame(6)}>შემდეგი ეტაპი</button>
      </div>
      )}
    </div>
  );
}
