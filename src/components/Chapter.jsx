import { useMemo, useRef, useState } from "react";
import "./Components.css";
import Dictionary from "./Dictionary";
import WordsAndMarks from "./WordsAndMarks";
import CreateSentences from "./CreateSentences";
import Settings from "./GameSettings";
//კომპონენტს props-ებად მოეწოდება: value-შემთხვევითად არჩეული წინადადებები,
export default function Chapter(props) {
  const [point, setPoint] = useState(0);
  const [tries, setTries] = useState(0);
  // console.log(props);
  const [openedGame, setOpenedGame] = useState(false);
  const [partOfGame, setPartOfGame] = useState(0);
  const [newGame, setNewGame] = useState(0);
  const [isVisibleBack, setIsVisibleBack] = useState(false);
  const [isVisibleFront, setIsVisibleFront] = useState(false);
  const [isWonVisible, setIsWonVisible] = useState(isVisibleFront);
  const [dictionarySsettings, setDictionarySettings] = useState({
    firstPartState: "first_visible",
    secondPartState: "second_visible",
    thirdPartState: "third_visible",
  });

  // const [firstPartState, setFirstPartState] = useState("first_visible");
  // const [secondPartState, setSecondPartState] = useState("second_visible");
  // const [thirdPartState, setThirdPartState] = useState("third_visible");

  const sentences = props.value;
  console.log(sentences, dictionarySsettings);
  // შემთხვევითად ამოირჩევა წინადადებები ყოველი თავიდან და დაიშლება ობიექტებად, რომლებიც wordsForCards მასივში მიმდევრობით ჩალაგდება
  const marksAmount = useRef(0);
  // const dictionarySsettings = useRef(
  //   {
  //     firstPartState,
  //     secondPartState,
  //     thirdPartState,
  //   },
  //   [newGame]
  // );
  console.log(dictionarySsettings);
  const wordsForCards = useMemo(() => {
    const words = [];
    const tWords = [];
    //
    console.log(newGame);
    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i].sentence;
      const translation = sentences[i].translation;
      words.push(...sentence.split(" "));
      tWords.push(...translation.split(" "));
    }
    return words.map((value, index) => {
      let newWord;
      let newTrWord;
      let bPunctMark;
      let tPunctMark;
      const signsArray = words[index].split("");
      const marks = [",", ".", ":", ";", "!", "?"];
      if (marks.includes(signsArray[signsArray.length - 1])) {
        marksAmount.current += 1;
        bPunctMark = signsArray[signsArray.length - 1];
        newWord = words[index].substring(0, words[index].length - 1);
        if (tWords[index]) {
          // newTrWord = tWords[index];
          // newWord = words[index].substring(0, words[index].length - 1);
        }
        // words[index] = "dawfsef"
        // console.log(bPunctMark,words[index].length,words[index],"newTrWord",newTrWord)
      } else {
        newWord = words[index];
        if (tWords[index]) {
        }
      }
      newTrWord = tWords[index];
      // console.log(newWord,words[index],newTrWord, marksAmount, "marksAmount")
      // for (let i = 0; i < signsArray.length; i++) {
      //     // (signsArray[i] === "ࣿ") ?
      //     //     newWord.push(<span className="span_element">{signsArray[i]}</span>) :
      //         if(marks.includes(signsArray[i])) {
      //             bPunctMark = signsArray[i];

      //         }else {
      //             newWord.push(signsArray[i]);
      //         }

      // }
      if (tWords[index]) {
        // const trSignsArray = tWords[index].split("");
        // for (let i = 0; i < trSignsArray.length; i++) {
        //     // (trSignsArray[i] === "ࣿ") ?
        //     // newTrWord.push(<span className="span_element">{trSignsArray[i]}</span>) :
        //     (marks.includes(trSignsArray[i])) ?
        //         bPunctMark = trSignsArray[i] :
        //         newTrWord.push(trSignsArray[i]);

        // }
        return {
          backText: newWord,
          bPunctMark: bPunctMark ? bPunctMark : null,
          frontText: newTrWord,
          tPunctMark: tPunctMark ? tPunctMark : "",
          id: Math.floor(Math.random() * 10000),
        };
      }
    });
  }, [newGame]);
  return (
    <div className="chapter">
      <div className="topic-div">
        <button
          onClick={() => {
            openedGame === false ? setOpenedGame(true) : setOpenedGame(false);
          }}
        >
          ჩამოშლა
        </button>
        <h2 className="topic_header">{props.topic}</h2>
        <div className="result">
          <div className="point">
            {point}
            <div className="qula">ქულა</div>
          </div>
          /
          <div className="tries">
            {tries}
            <div className="cda">ცდა</div>
          </div>
        </div>
        <div className="game_part_buttons">
          <button
            className={partOfGame === 0 ? "opened_game" : ""}
            onClick={() => {
              setPartOfGame(0);
            }}
          >
            S
          </button>
          <button
            className={partOfGame === 1 ? "opened_game" : ""}
            onClick={() => {
              setPartOfGame(1);
              setPoint(0);
              setTries(0);
            }}
          >
            I
          </button>
          <button
            className={partOfGame === 2 ? "opened_game" : "closed_game"}
            onClick={() => {
              setPartOfGame(2);
              setPoint(0);
              setTries(0);
            }}
          >
            II
          </button>
          <button
            className={partOfGame === 3 ? "opened_game" : "closed_game"}
            onClick={() => {
              setPartOfGame(3);
              setPoint(0);
              setTries(0);
            }}
          >
            III
          </button>
          <button
            onClick={() => {
              setPartOfGame(0);
              setPoint(0);
              setTries(0);
            }}
          >
            R
          </button>
        </div>
      </div>
      <div>
        {openedGame ? (
          partOfGame === 0 ? (
            <Settings
              newGame={newGame}
              setNewGame={setNewGame}
              dictionarySsettings={dictionarySsettings}
              setDictionarySettings={setDictionarySettings}
              setPoint={setPoint}
              setTries={setTries}
              setPartOfGame={setPartOfGame}
            />
          ) : partOfGame === 1 ? (
            <Dictionary
              newGame={newGame}
              point={point}
              setPoint={setPoint}
              tries={tries}
              setTries={setTries}
              firstPartState={dictionarySsettings.firstPartState}
              secondPartState={dictionarySsettings.secondPartState}
              thirdPartState={dictionarySsettings.thirdPartState}
              cardsData={wordsForCards}
              setPartOfGame={setPartOfGame}
              isVisibleFront={isVisibleFront}
              isVisibleBack={isVisibleBack}
              sentences={sentences}
            />
          ) : partOfGame === 2 ? (
            <CreateSentences
              point={point}
              setPoint={setPoint}
              tries={tries}
              setTries={setTries}
              cardsData={wordsForCards}
              isWonVisible={isWonVisible}
              sentences={sentences}
            />
          ) : partOfGame === 3 ? (
            <WordsAndMarks
              point={point}
              setPoint={setPoint}
              tries={tries}
              setTries={setTries}
              cardsData={wordsForCards}
              marksAmount={marksAmount.current}
            />
          ) : (
            console.log(openedGame)
          )
        ) : null}
      </div>
    </div>
  );
}
