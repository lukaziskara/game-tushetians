
export default function CreateSentences(props) {
    const cardsData = props.cardsData
    const sentences = props.sentences
    console.log(props)

    return (
        <div className="words_and_sentences">
            <div className="sentences">
                {
                    sentences.map((sentence)=>{
                        return <div className="full_sentence">{sentence.translation}</div>
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