import {useState, useRef} from "react";
import LeftCard from "./LeftCard"
import RightCard from "./RightCard"
import React from "react";



export default function Dictionary(props) { //[point,setPoint,tries,setTries,cardsData]
    // console.log(props.setPoint)
    // let Points = 0;
    // let tries = 0;
    const leftBack = useRef()
    const rightBack = useRef()
    // let rightBack;
    // leftBack="DWAJFKEH"
    const cardsData = props.cardsData
    // const words = words;
    // const tWords =;
    // const wordsForCards = cardsData.map((cardData,index) => {
        
        //     // console.log(props.words[index], "words", "translation", props.translation[index])
        //     console.log(cardData)
        
        //     return {
            //         backText: cardData.backText,
            //         frontText: cardData.frontText,
            //         id: Math.random()*Math.random
            //     }
            // })
    // const [leftBack, setLeftBack ] = useState();
    // const [rightBack, setRightBack ] = useState();
    const [clickedRightCard, setClickedRightCard ] = useState();
    const [clickedLeftCard, setClickedLeftCard ] = useState();
    const [isVisibleBack, setIsVisibleBack ] = useState();
    const [visibleBackIndex, setVisibleBackIndex ] = useState();
    // console.log(leftBack,rightBack,cardsData)
    // console.log(clickedRightCard)
    // function whenBackCardClicked(){
        //     setClickedCard(index)
    //     setVisibleBackIndex('visible_back')
    //     console.log("whenBackCardClicked", visibleBackIndex)
    // }
    // console.log(wordsForCards)
    // console.log(props)
    return (
        <>
            <div className="dictionary">
                <div className="t_words flex_wrap">
                    {cardsData.map((cardData, index) =>
                        <div className={
                            clickedLeftCard===index+1?'card clickedleft':
                            'card left_card'}
                            onClick={()=>{
                            leftBack.current = cardData.backText
                            // console.log("შედარება L",leftBack,rightBack,"refs")
                            if(leftBack.current===rightBack.current){
                                props.setPoint(props.point+1)
                                props.setTries(props.tries+1)
                                // refPoints.current += 1;
                                // refTries.current += 1;
                                // console.log("daemtxva","point",leftBack,"/",rightBack);
                                // props.setPoint(props.point+1);
                            }else{
                                // console.log("ar daemtxva")
                                props.setTries(props.tries+1)
                            }
                            setClickedLeftCard(index+1)
                        }}>
                            <div>
                                <p>{cardData.frontText}</p>
                            </div>
                            <div className="invisible_left" >
                                <p>{cardData.backText}</p>
                            </div>
                        </div>
                        // <LeftCard back={cardData.backText} front={cardData.frontText} key={index} />
                    )}
                </div>
                <div className="b_words flex_wrap">
                    {cardsData.map((cardData, index) =>
                        <div className={clickedRightCard===index+1?'card clickedRight':'card right_card'} onClick={()=>{
                            setClickedRightCard(index+1)
                            rightBack.current = cardData.backText
                            // console.log(index+1,"rightBack",rightBack)
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