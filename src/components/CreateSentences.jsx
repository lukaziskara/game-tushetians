import { useRef, useState } from "react";

export default function CreateSentences(props) {
  console.log(props);
  const cardsData = props.cardsData;
  const sentences = props.sentences;
  // console.log(props);
  const [clickedSentence, setClickedSentence] = useState(false);
  const [clickedWordCard, setClickedWordCard] = useState(false);
  // const bWord = useRef(() => {
  //   return console.log("hello from useref");
  // });

  return (
    <div className="words_and_sentences">
      <div className="sentences">
        {sentences.map((sentence, index) => {
          const words = sentence.words.split("@");
          const tWords = sentence.tWords.split("@");
          const globalIndex = sentence.index;
          console.log(sentence, words, tWords);
          return (
            <div className="test">
              <div
                className={
                  clickedSentence === index
                    ? "full_sentence clicked_Sentence"
                    : "full_sentence"
                }
                onClick={() => {
                  console.log(sentence);
                  setClickedSentence(index);
                }}
              >
                {sentence.translation}
              </div>
              <div className="flex_wrap">
                {words.map((word, localIndex) => {
                  const fullIndex =
                    "s" + `${globalIndex}` + "w" + `${localIndex}`;
                  // console.log(globalIndex, localIndex, fullIndex);
                  return (
                    <div
                      className={
                        clickedWordCard === fullIndex
                          ? "word_for_sentence clicked_word_for_sentence"
                          : "card"
                      }
                      onClick={() => {
                        console.log(word);
                        setClickedWordCard(fullIndex);
                      }}
                    >
                      <div
                        className={
                          props.isWonVisible ? "won_visible" : "won_invisible"
                        }
                      >
                        {word}
                      </div>
                      <div className="">{word.backText}</div>
                      <div className="">{tWords[localIndex]}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="words_for_sentence">
        {cardsData.map((word, index) => (
          <div
            className={
              clickedWordCard === index
                ? "word_for_sentence clicked_word_for_sentence"
                : "card"
            }
            onClick={() => {
              console.log(word);
              setClickedWordCard(index);
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
