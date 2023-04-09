import { useState, useRef, useMemo } from "react";
import LeftCard from "./LeftCard"
import RightCard from "./RightCard"
import React from "react";

const wonWords = []

export default function Dictionary(props) { //[point,setPoint,tries,setTries,cardsData]
    // console.log("შედეგები",props.point, props.tries,props)
    const leftBack = useRef()
    const rightBack = useRef()
    const backTextId = useRef()
    const cardsData = props.cardsData
    const startingWords = useRef(cardsData.length)
    // const wonWords = useRef([1,2,3]);
    // console.log("cardsData",typeof(cardsData),cardsData, cardsData.length)
    const [clickedRightCardId, setClickedRightCardId] = useState();
    const [clickedLeftCard, setClickedLeftCard] = useState();
    const [isVisibleBack, setIsVisibleBack] = useState();
    const [visibleBackIndex, setVisibleBackIndex] = useState();
    const shuffledDataForLeft = useMemo(() => {
        return cardsData.map((cardData) => {
            // console.log(cardData)
            return {
                frontText: cardData.frontText,
                backText: cardData.backText,
                id: cardData.id
            }
        }).sort(() => 0.5 - Math.random())
    }, [])
    const shuffledDataForRight = useMemo(() => {
        return cardsData.map((cardData) => {
            return {
                backText: cardData.backText,
                id: cardData.id
            }
        }).sort(() => 0.5 - Math.random())
    }, [])
    // console.log(shuffledDataForLeft,shuffledDataForRight)
    // console.log(wonWords)
    return (
        <>
            <div className="dictionary">
                <div className="t_words flex_wrap">
                    {shuffledDataForLeft.map((cardData, index) =>
                        <div className={clickedLeftCard === cardData.id ? 'card clicked_left' : 'card left_card'}

                            onClick={() => {
                                // leftBack.current = "dwafesdr"
                                leftBack.current = cardData.backText
                                console.log(backTextId.current, shuffledDataForRight)
                                // if(leftBack.current==rightBack.current){
                                if (leftBack.current == rightBack.current) {
                                    props.setPoint(props.point + 1)
                                    props.setTries(props.tries + 1)
                                    wonWords.push(cardData)
                                    shuffledDataForLeft.splice(index, 1)
                                    shuffledDataForRight.splice(backTextId.current, 1)
                                } else {
                                    props.setTries(props.tries + 1)
                                }
                                setClickedLeftCard(cardData.id)
                            }}>
                            <div>
                                <p>{cardData.frontText}</p>
                                <p className="left_invisible">{cardData.backText}</p>
                            </div>
                        </div>
                        // <LeftCard back={cardData.backText} front={cardData.frontText} key={index} />
                    )}
                </div>
                <div className="b_words flex_wrap">
                    {shuffledDataForRight.map((cardData, index) =>
                        <div className={clickedRightCardId === cardData.id ? 'card clicked_right' : 'card right_card'}
                            onClick={() => {
                                rightBack.current = cardData.backText
                                backTextId.current = index
                                setClickedRightCardId(cardData.id)
                            }}>
                            <div>
                                <p className="right_invisible">{cardData.backText}</p>
                            </div>
                            {/* <RightCard isVisible={visibleBackIndex} back={cardData.backText} index={index} onClick={whenBackCardClicked} key={index} /> */}
                        </div>
                    )}
                </div>
            </div>
            <div className="end_game">
                <div className="won_words">
                    {
                        wonWords.map((wonWord, index) =>
                            <div className="won_word">{wonWord.frontText}-{wonWord.backText}
                                <div className="expl">განმარტება</div>
                            </div>
                        )}
                </div>
                <div className="next_game">
                    {shuffledDataForLeft.length === 0 ?
                        // <div className="next">შემდეგი თამაში</div>
                        <button onClick={() => props.setOpenedGame(2)}>შემდეგი თამაში</button>
                        // : <div className="">თამაში</div>}
                        : console.log(wonWords.length, wonWords.length === 2, startingWords.current)}
                </div>
            </div>
        </>
    )
}