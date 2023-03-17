import Card from "./Card";

export default function Dictionary(props) {
    const words = props.words;
    const translation = props.translation;
    // console.log(props)
    return (
        <>
            <div className="dictionary">
                <div className="t_words flex_wrap">
                    {translation.map((tWord, index) =>
                        // console.log(word,"სიტყვა")
                        <Card word={tWord} key={index} />
                        // <div className="word" key={index}>{tword}</div>
                    )}
                </div>
                <div className="b_words flex_wrap">
                    {words.map((bWord, index) =>
                        // console.log(word,"სიტყვა")
                        <Card word={bWord.toString()} key={index} />
                        // <div className="word" key={index}>{word}</div>
                    )}
                </div>
            </div>
        </>
    )
}