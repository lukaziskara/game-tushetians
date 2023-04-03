import { useState } from "react"

export default function WordsAndMarks(props) {
    console.log(props)
    const [clickedWord, setClickedWord] = useState()
    const [clickedMark, setClickedMark] = useState()
    const cardsData = props.cardsData
    return (
        <div className="words_and_marks">
            <div className="words_wout_marks">
                {
                    cardsData.map((cardData,index)=>
                        <div className={clickedWord==index?"word_wout_mark clicked_word":"word_wout_mark"}
                            onClick={()=>{
                                setClickedWord(index)
                            }}
                        >{cardData.backText}</div>
                    )
                }
            </div>
            <div className="marks">
                {
                    cardsData.map((cardData, index)=>
                    cardData.bPunctMark?<div className={clickedMark==index?"mark clicked_mark":"mark"} 
                    onClick={()=>{
                        setClickedMark(index)
                    }}>{cardData.bPunctMark}</div>
                    :console.log()
                    )
                }
            </div>
        </div>
    )
}