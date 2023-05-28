import { useRef, useState } from "react";

export default function CreateSentences(props) {
  console.log(props);
  const cardsData = props.cardsData;
  const sentences = props.sentences;
  console.log(props);
  const [clickedSentence, setClickedSentence] = useState(false);
  const [clickedWordCard, setClickedWordCard] = useState(false);
  const bWord = useRef(() => {
    return console.log("hello from useref");
  });

  return (
    <div className="words_and_sentences">
      <div className="sentences">
        {sentences.map((sentence, index) => {
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
                {cardsData.map((cardData, index) => (
                  <div
                    className={
                      clickedWordCard === index
                        ? "word_for_sentence clicked_word_for_sentence"
                        : "card"
                    }
                    onClick={() => {
                      console.log(cardData);
                      setClickedWordCard(index);
                    }}
                  >
                    <div
                      className={
                        props.isWonVisible ? "won_visible" : "won_invisible"
                      }
                    >
                      {cardData.frontText}
                    </div>
                    <div className="">{cardData.backText}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="words_for_sentence">
        {cardsData.map((cardData, index) => (
          <div
            className={
              clickedWordCard === index
                ? "word_for_sentence clicked_word_for_sentence"
                : "card"
            }
            onClick={() => {
              console.log(cardData);
              setClickedWordCard(index);
            }}
          >
            <div className="">{cardData.backText}</div>
            <div
              className={props.isWonVisible ? "won_visible" : "won_invisible"}
            >
              {cardData.frontText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
