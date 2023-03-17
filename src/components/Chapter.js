import { useState } from 'react';
import './Components.css';
import Dictionary from './Dictionary';
import WordsAndMarks from './WordsAndMarks';

export default function Chapter(props) {
    const [openedGame, setOpenedGame] = useState(0);
    class Card {
        constructor(frontText, backText, punctMark) {
            this.backText = backText;
            this.frontText = frontText;
            this.punctMark = punctMark;
        }
    }
    // console.log(props.value.topic)
    const cardsData = [];
    const sentences = props.value.sentences;
    // console.log(props.value.sentences)
    // სიმბოლოების მასივს დაუვლის და სათითაოდ შეამოწმებს. შემდეგ newWord-ში ჩააწყობს
    const words = [];
    const tWords = [];
    for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * sentences.length);
        const sentence = sentences[randomNumber].sentence;
        const translation = sentences[randomNumber].translation;
        words.push(...sentence.split(' '));
        tWords.push(...translation.split(' '));
        console.log("dwadfegf");
    }
    for(let i=0;i<words.length;i++) {
        const word = words[i];
        const tWord = tWords[i];
        gaparsvaDaDatukva(word,"b");
        gaparsvaDaDatukva(tWord,"f");
    }
    // for (let i = 0; i < words.length; i++) {
        //     const cardData = {
            //         frontText: words[i],
            //         backText: tWords[i]
    //     }
    //     // console.log(cardData)
    //     cardsData.push(cardData);
    // }
    // console.log(words,sentences.length,"dwadwafegf", tWords)
    // console.log("words",words,wordsArray)        
    // console.log(cardsData)

    return (
        <div className="chapter">
            <div className='topic-div'>

                <button onClick={() => {
                    setOpenedGame(!openedGame)
                }}>გახსნა/დახურვა</button>
                <h2>{props.value.topic}</h2>
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
                        cardsData={cardsData}
                        words={words}
                        translation={tWords}
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
    function gaparsvaDaDatukva(dax,symbol) {
        const newWord = [];
        const newTrWord = [];
        let punctMark
        const marks = [",", ".", ":", ";", "!", "?"];
        const signsArray = dax.split("");
        for(let j = 0; j < signsArray.length; j++) {
            (signsArray[j] === "ࣿ") ?
            newWord.push(signsArray[j]): 
            // .push(<span className="span_element">{signsArray[j]}</span>):
            (marks.includes(signsArray[j])) ?
            punctMark = signsArray[j]:
            console.log("aaaaaaaaaaaaaaaaa",signsArray[j]);
            // card.punctMark=signsArray[j]:
            newWord.push(signsArray[j]);
        }
        const card = new Card(newWord,newWord,punctMark);
        card.backText = newWord;
        console.log("dwaasef adwa",card,newWord);
        // console.log(card,"dwaasef adwa");
        console.log(typeof(card.backText));
    }
}

