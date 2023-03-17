export default function Card(props) {
    // console.log(props)
    // console.log(word,signsArray,signsArray.length,typeof(signsArray));
    // სიმბოლოების მასივს დაუვლის და სათითაოდ შეამოწმებს. შემდეგ newWord-ში ჩააწყობს
    const word = props.word;
    const marks = [",",".",":",";","!","?"];
    const newWord = [];
    const signsArray = word.split("");
    for(let i=0;i<signsArray.length;i++){
        (signsArray[i]==="ࣿ")?
            newWord.push(<span className="span_element">{signsArray[i]}</span>):
            (marks.includes(signsArray[i]))?
                newWord.push(signsArray[i]):
                newWord.push(signsArray[i]);
    }
    // console.log(newWord,typeof(newWord));
    return (
        <div className="word">{newWord}</div>
    )
}