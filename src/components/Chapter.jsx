import { useState } from 'react';
import './Components.css';
import Dictionary from './Dictionary';
import WordsAndMarks from './WordsAndMarks';

export default function Chapter(props) {
    const [point, setPoint] = useState(0)
    const [tries, setTries] = useState(0)
    const sentences = props.value;
    // const chapterIndex = props.index;
    // console.log(sentences,chapterIndex);
    const [openedGame, setOpenedGame] = useState(0);
    // console.log(openedGame)
    // console.log(props)
    // const cardsData = [];
    const words = [];
    const tWords = [];
    //
    for (let i = 0; i < sentences.length; i++) {
        // console.log(i, "i");
        const randomNumber = Math.floor(Math.random() * sentences.length);
        const sentence = sentences[randomNumber].sentence;
        const translation = sentences[randomNumber].translation;
        words.push(...sentence.split(' '));
        tWords.push(...translation.split(' '));
        // console.log("dwadfegf",sentences[i].sentence.length,sentences[i].translation.length,sentences);
    }
    const marks = [",", ".", ":", ";", "!", "?"];
    const wordsForCards = words.map((value, index) => {
        const newWord = [];
        const newTrWord = [];
        let bPunctMark;
        let tPunctMark;
        const signsArray = words[index].split("");
        for (let i = 0; i < signsArray.length; i++) {
            (signsArray[i] === "ࣿ") ?
                newWord.push(<span className="span_element">{signsArray[i]}</span>) :
                (marks.includes(signsArray[i])) ?
                    bPunctMark = signsArray[i] :
                    newWord.push(signsArray[i]);

        }
        // console.log(tWords)
        if (tWords[index]) {
            const trSignsArray = tWords[index].split("");
            for (let i = 0; i < trSignsArray.length; i++) {
                // (trSignsArray[i] === "ࣿ") ?
                // newTrWord.push(<span className="span_element">{trSignsArray[i]}</span>) :
                (marks.includes(trSignsArray[i])) ?
                    bPunctMark = trSignsArray[i] :
                    newTrWord.push(trSignsArray[i]);
                    
            }
            return {
                backText: newWord,
                bPunctMark: (bPunctMark) ? bPunctMark : "",
                frontText: newTrWord,
                tPunctMark: (tPunctMark) ? tPunctMark : "",
                id: Math.random() * Math.random
            }
        } else {
            return console.log(index, "სიტყვა არ მოიძებნა")
        }
    })
    // console.log(wordsForCards);

    //     const tSignsArray = tWords[index].split("");
    //     for (let i = 0; i < tSignsArray.length; i++) {
    //         (tSignsArray[i] === "ࣿ") ?
    //             newTrWord.push(<span className="span_element">{signsArray[i]}</span>) :
    //             (marks.includes(tSignsArray[i])) ?
    //                 tPunctMark = tSignsArray[i]:
    //                 newTrWord.push(tSignsArray[i]);
    //     }
    //     // console.log(newWord, "newword",newTrWord)
    // })
    // // for(let i=0;i<words.length;i++) {

    // //     // const word = words[i];
    // //     // const tWord = tWords[i];
    // //     // gaparsvaDaDatukva(word,"b");
    // //     // gaparsvaDaDatukva(tWord,"f");
    // // }
    // // for (let i = 0; i < words.length; i++) {
    // //     const cardData = {
    // //         frontText: words[i],
    // //         backText: tWords[i]
    // //     }
    // //     // console.log(cardData)
    // //     cardsData.push(cardData);
    // // }
    // // console.log(words,sentences.length,"dwadwafegf", tWords)
    // // console.log("words",words,tWords)        
    // // console.log(wordsForCards)
    return (
        <div className="chapter">
            <div className='topic-div'>
                <button onClick={() => {
                    setOpenedGame(!openedGame)
                }}>გახსნა/დახურვა</button>
                <h2>{props.topic}</h2>
                <div>{point}/{tries}</div>
                <div>
                    <button onClick={() => {
                        setOpenedGame(1)
                    }}>
                        ლექსიკონი</button>
                    <button onClick={() => {
                        setOpenedGame(2)
                    }}>გრამატიკა</button>
                </div>
            </div>
            <div>
                {
                    (openedGame === 1) ? <Dictionary
                        point={point}
                        setPoint={setPoint}
                        tries={tries}
                        setTries={setTries}
                        cardsData={wordsForCards}
                    />
                        : (openedGame === 2) ? <WordsAndMarks
                            name="luka"
                            age='31'
                        />
                            : console.log(openedGame)
                }
            </div>
        </div>
    );
}

