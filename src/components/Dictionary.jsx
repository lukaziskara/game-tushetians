import { useState, useRef, useMemo } from "react";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import React from "react";

export default function Dictionary(props) {
  // console.log(props);
  const {
    newGame,
    setPartOfGame,
    firstPartState,
    secondPartState,
    thirdPartState,
  } = props;
  const wonWords = useRef([], [newGame]);
  //[point,setPoint,tries,setTries,cardsData]
  // console.log("შედეგები",props.point, props.tries,props)
  const leftBack = useRef();
  const rightBack = useRef();
  const frontTextId = useRef();
  const backTextId = useRef();
  const sentences = props.sentences;
  const cardsData = props.cardsData;
  const startingWords = useRef(cardsData.length);
  // const wonWords = useRef([1,2,3]);
  console.log("cardsData", typeof cardsData, cardsData, cardsData.length);
  const [clickedRightCardId, setClickedRightCardId] = useState();
  const [clickedLeftCardId, setClickedLeftCardId] = useState();
  const [visibleBackIndex, setVisibleBackIndex] = useState();
  const [clickedSentence, setClickedSentence] = useState(false);
  const [isSecond, setIsSecond] = useState(false);

  const shuffledDataForLeft = useMemo(() => {
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
  const shuffledDataForRight = useMemo(() => {
    // console.log("dasfsnjkbnjjhbjhbjhbjh");
    return cardsData
      .map((cardData) => {
        return {
          frontText: cardData.frontText,
          backText: cardData.backText,
          id: cardData.id,
        };
      })
      .sort(() => 0.5 - Math.random());
  }, []);
  // console.log(shuffledDataForLeft, shuffledDataForRight);
  // console.log(wonWords)
  return (
    <>
      <div className="dictionary">
        <div className="t_words flex_wrap">
          {shuffledDataForLeft.map(
            (cardData, index) => (
              <div
                className={
                  clickedLeftCardId === cardData.id
                    ? "card clicked_left"
                    : "card left_card"
                }
                onClick={() => {
                  // leftBack.current = "dwafesdr"
                  leftBack.current = cardData.backText;
                  frontTextId.current = index;
                  // console.log(backTextId.current, shuffledDataForRight);
                  if (leftBack.current === rightBack.current) {
                    console.log(rightBack.current);
                  }
                  if (leftBack.current === rightBack.current) {
                    props.setPoint(props.point + 1);
                    props.setTries(props.tries + 1);
                    wonWords.current.push(cardData);
                    shuffledDataForLeft.splice(frontTextId.current, 1);
                    shuffledDataForRight.splice(backTextId.current, 1);
                    rightBack.current = null;
                    leftBack.current = null;
                    if (isSecond) {
                      setIsSecond(false);
                    }
                  } else {
                    if (isSecond) {
                      props.setTries(props.tries + 1);
                      console.log(isSecond);
                    } else {
                      setIsSecond(true);
                    }
                  }
                  setClickedLeftCardId(cardData.id);
                }}
              >
                <div className={firstPartState}>{cardData.frontText}</div>
                <div className={secondPartState}>{cardData.backText}</div>
              </div>
            )
            // <LeftCard back={cardData.backText} front={cardData.frontText} key={index} />
          )}
        </div>
        <div className="b_words flex_wrap">
          {shuffledDataForRight.map((cardData, index) => (
            <div
              className={
                clickedRightCardId === cardData.id
                  ? "card clicked_right"
                  : "card right_card"
              }
              id={cardData.id}
              onClick={() => {
                rightBack.current = cardData.backText;
                backTextId.current = index;
                console.log(rightBack.current, leftBack.current);
                setClickedRightCardId(cardData.id);
                if (leftBack.current === rightBack.current) {
                  props.setPoint(props.point + 1);
                  props.setTries(props.tries + 1);
                  wonWords.current.push(cardData);
                  shuffledDataForLeft.splice(frontTextId.current, 1);
                  shuffledDataForRight.splice(backTextId.current, 1);
                  rightBack.current = null;
                  leftBack.current = null;
                  if (isSecond) {
                    setIsSecond(false);
                  }
                } else {
                  if (isSecond) {
                    props.setTries(props.tries + 1);
                    console.log(isSecond);
                  } else {
                    setIsSecond(true);
                  }
                }
              }}
            >
              <div>
                <div className={thirdPartState}>{cardData.backText}</div>
              </div>
              {/* <RightCard isVisible={visibleBackIndex} back={cardData.backText} index={index} onClick={whenBackCardClicked} key={index} /> */}
            </div>
          ))}
        </div>
      </div>
      <div className="end_game">
        {/* <div className="sentences">
          {sentences.map((sentence, index) => {
            return (
              <div
                className={
                  clickedSentence === index
                    ? "full_sentence clicked_Sentence"
                    : "full_sentence"
                }
                onClick={() => {
                  console.log(sentence.translation);
                  setClickedSentence(index);
                }}
              >
                {sentence.translation}
              </div>
            );
          })}
        </div> */}
        <div className="won_words">
          {wonWords.current.map((wonWord, index) => (
            <div className="won_word">
              <div>{wonWord.frontText}</div>
              <div>{wonWord.backText}</div>
              {/* <div className="expl">განმარტება</div> */}
            </div>
          ))}
        </div>
        <div className="next_game">
          {shuffledDataForLeft.length === 0 ? (
            // <div className="next">შემდეგი თამაში</div>
            <button onClick={() => setPartOfGame(2)}>შემდეგი ეტაპი</button>
          ) : (
            // : <div className="">თამაში</div>}
            console.log(
              wonWords.length,
              wonWords.length === 2,
              startingWords.current
            )
          )}
        </div>
      </div>
    </>
  );
}
