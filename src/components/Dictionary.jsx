import {useState, useRef, useMemo} from "react";
import LeftCard from "./LeftCard"
import RightCard from "./RightCard"
import React from "react";



export default function Dictionary(props) { //[point,setPoint,tries,setTries,cardsData]
    console.log("შედეგები",props.point, props.tries,props)
    const leftBackId = useRef()
    const rightBackId = useRef()
    const cardsData = props.cardsData
    const [clickedRightCard, setClickedRightCard ] = useState();
    const [clickedLeftCard, setClickedLeftCard ] = useState();
    const [isVisibleBack, setIsVisibleBack ] = useState();
    const [visibleBackIndex, setVisibleBackIndex ] = useState();
    const shuffledDataForLeft = useMemo(()=>{
        console.log("Dictionary, useMemo",cardsData)
        return cardsData.map((cardData)=>{
            return {
                frontText: cardData.frontText,
                id:cardData.id
            }
        }).sort(() => 0.5 - Math.random())
    },[])
    const shuffledDataForRight = useMemo(()=>{
        console.log("Dictionary, useMemo",cardsData)
        return cardsData.map((cardData)=>{
            return {
                backText: cardData.backText,
                id:cardData.id
            }
        }).sort(() => 0.5 - Math.random())
    },[])
    console.log(shuffledDataForLeft,shuffledDataForRight)
    return (
        <>
            <div className="dictionary">
                <div className="t_words flex_wrap">
                    {shuffledDataForLeft.map((cardData, index) =>
                        <div className={
                            clickedLeftCard===index+1?'card clicked_left':
                            'card left_card'}
                            onClick={()=>{
                            leftBackId.current = cardData.id
                            console.log(leftBackId.current,"qudqolgebi",rightBackId.current)
                            if(leftBackId.current===rightBackId.current){
                                props.setPoint(props.point+1)
                                props.setTries(props.tries+1)
                            }else{
                                props.setTries(props.tries+1)
                            }
                            setClickedLeftCard(index+1)
                        }}>
                            <div>
                                <p>{cardData.frontText}</p>
                            </div>
                        </div>
                        // <LeftCard back={cardData.backText} front={cardData.frontText} key={index} />
                    )}
                </div>
                <div className="b_words flex_wrap">
                    {shuffledDataForRight.map((cardData, index) =>
                        <div className={clickedRightCard===index+1?'card clicked_right':'card right_card'} onClick={()=>{
                            setClickedRightCard(index+1)
                            rightBackId.current = cardData.id
                            }}>
                            <div>
                                <p>{cardData.backText}</p>
                            </div>
                        {/* <RightCard isVisible={visibleBackIndex} back={cardData.backText} index={index} onClick={whenBackCardClicked} key={index} /> */}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}