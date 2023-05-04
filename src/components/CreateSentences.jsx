import { useRef, useState } from "react";

export default function CreateSentences(props) {
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
            <div className="">
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
              <div className="">ასაწყობი ადგილი</div>
            </div>
          );
        })}
      </div>
      <div className="words_for_sentence">
        {cardsData.map((cardData, index) => {
          return (
            <div
              className={
                clickedWordCard === index
                  ? "word_for_sentence clicked_word_for_sentence"
                  : "word_for_sentence"
              }
            >
              <div
                className=""
                onClick={() => {
                  console.log(cardData);
                  setClickedWordCard(index);
                }}
              >
                {cardData.backText}
              </div>
              <div
                className={props.isWonVisible ? "won_visible" : "won_invisible"}
              >
                {cardData.frontText}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
