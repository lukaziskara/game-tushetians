import { useCallback, useMemo, useState } from 'react';
import './Components.css';
import Dictionary from './Dictionary';
import WordsAndMarks from './WordsAndMarks';

export default function Chapter(props) {
    const [point, setPoint] = useState(0)
    const [tries, setTries] = useState(0)
    console.log(props);
    const [openedGame, setOpenedGame] = useState(0);
    const sentences = props.value;

    const wordsForCards = useMemo(()=>{
        const words = [];
        const tWords = [];
        //
        for (let i = 0; i < sentences.length; i++) {
            const randomNumber = Math.floor(Math.random() * sentences.length);
            const sentence = sentences[randomNumber].sentence;
            const translation = sentences[randomNumber].translation;
            words.push(...sentence.split(' '));
            tWords.push(...translation.split(' '));
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
                    backText: words[index],
                    bPunctMark: (bPunctMark) ? bPunctMark:null,
                    frontText: tWords[index],
                    tPunctMark: (tPunctMark) ? tPunctMark : "",
                    id: Math.floor(Math.random()*10000)
                }
            } else {
                return console.log(index, "ალექსის აინტერესებს რატომ ეწერა აქ სიტყვა არ მოიძებნაო")
            }
        })
        
        // wordsForCards.sort(() => 0.5 - Math.random())
        console.log(wordsForCards);

        console.log("useMemo", point,tries)
        return wordsForCards
    },[])
    const takeSe = useMemo(()=>{
        // console.log("callBack", point,tries, wordsForCards)
    },[])
    // console.log(wordsForCards)
    return (
        <div className="chapter">
            <div className='topic-div'>
                <button onClick={() => {
                    setOpenedGame(!openedGame)
                }}>გ/დ</button>
                <h2 className='topic_header'>{props.topic}</h2>
                <div className='result'>
                    <div className="point">{point}
                    <div className="qula">ქულა</div>
                    </div>/
                    <div className="tries">{tries}
                    <div className="cda">ცდა</div>
                    </div>
                    
                </div>
                <div>
                    {openedGame===2?
                    <button onClick={() => {
                        setOpenedGame(1)
                        setPoint(0)
                        setTries(0)
                    }}>დაშნი</button>
                    :openedGame===1?
                    <button onClick={() => {
                        setOpenedGame(2)
                        setPoint(0)
                        setTries(0)
                    }}>გრამატიკა</button>
                    :<button onClick={() => {
                        setOpenedGame(1)
                    }}>დაშნი</button>

                    }
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
                        setOpenedGame={setOpenedGame}
                        />
                        : (openedGame === 2) ? <WordsAndMarks
                        point={point}
                        setPoint={setPoint}
                        tries={tries}
                        setTries={setTries}
                        cardsData={wordsForCards}
                        />
                            : console.log(openedGame)
                }
            </div>
        </div>
    );
}

