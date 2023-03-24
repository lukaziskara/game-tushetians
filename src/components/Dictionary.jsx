import {useState} from "react";
import Card from "./Card";
import React from "react";

export default function Dictionary(props) {
    const cardsData = props.cardsData
    console.log(cardsData)
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
    const [isBackVisible, setIsBackVisible ] = useState('invisible_back');
    function whenBackCardClicked(){
        setIsBackVisible('visible_back')
        console.log("whenBackCardClicked", isBackVisible,cardsData)
    }
    // console.log(wordsForCards)
    // console.log(props)
    return (
        <>
            <div className="dictionary">
                <div className="t_words flex_wrap">
                    {cardsData.map((cardData, index) =>
                        <div className="card front_card">
                            <div>
                                <p>{cardData.frontText}</p>
                            </div>
                            <div className="invisible_front" >
                                <p>{cardData.backText}</p>
                            </div>
                        </div>
                        // console.log(tWord,"სიტყვა")
                        // <Card back={cardData.backText} front={cardData.frontText} key={index} />
                        // <div className="sword" key={index}>{tword}</div>
                    )}
                </div>
                <div className="b_words flex_wrap">
                    {props.cardsData.map((cardData, index) =>
                        <div className="card back_card">backText
                            {/* <div className={backTextClass} onClick={whenBackCardClicked}>
                                <p>{cardData.backText}</p>
                            </div> */}
                        {/* console.log(sword,"სიტყვა") */}
                        <Card isVisible={isBackVisible} back={cardData.backText} index={index} onClick={whenBackCardClicked} key={index} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}