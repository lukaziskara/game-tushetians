import { useState } from "react"

export default function CreateSentences(props) {
    const cardsData = props.cardsData
    const sentences = props.sentences
    console.log(props)
    const [clickedSentence, setClickedSentence] = useState(false)

    return (
        <div className="words_and_sentences">
            <div className="sentences">
                {
                    sentences.map((sentence,index)=>{
                        return <div className={clickedSentence===index?"full_sentence clicked_Sentence":"full_sentence"}
                         onClick={()=>{
                            console.log(sentence.translation)
                            setClickedSentence(index)
                         }}
                        >{sentence.translation}</div>
                    })
                }
            </div>
            <div className="words_on_cards">
                {
                    cardsData.map((cardData)=>{
                        return <div className="word_card">{cardData.backText}</div>
                    })
                }
            </div>
        </div>
        )
}