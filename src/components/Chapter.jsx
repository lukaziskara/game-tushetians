import { useMemo, useRef, useState } from "react";
import "./Components.css";
import Dictionary from "./Dictionary";
import WordsAndMarks from "./WordsAndMarks";
import CreateSentences from "./CreateSentences";
import Settings from "./Settings";
//კომპონენტს props-ებად მოეწოდება: value-შემთხვევითად არჩეული წინადადებები,
export default function Chapter(props) {
  const [point, setPoint] = useState(0);
  const [tries, setTries] = useState(0);
  // console.log(props);
  const [openedGame, setOpenedGame] = useState(false);
  const [isVisibleBack, setIsVisibleBack] = useState(false);
  const [isVisibleFront, setIsVisibleFront] = useState(false);
  const [isWonVisible, setIsWonVisible] = useState(isVisibleFront);
  const sentences = props.value;
  console.log(sentences);
  // შემთხვევითად ამოირჩევა წინადადებები ყოველი თავიდან და დაიშლება ობიექტებად, რომლებიც wordsForCards მასივში მიმდევრობით ჩალაგდება
  const marksAmount = useRef(0);
  const wordsForCards = useMemo(() => {
    const words = [];
    const tWords = [];
    //
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
      } else {
        return console.log(index, "tWords[index] არ არსებობს");
      }
    });

    // wordsForCards.sort(() => 0.5 - Math.random())
    // console.log(wordsForCards);

    // console.log("useMemo", point,tries)
    // return wordsForCards
  }, []);
  return (
    <div className="chapter">
      <div className="topic-div">
        <button
          onClick={() => {
            openedGame === false ? setOpenedGame(0) : setOpenedGame(false);
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
        <div className="flex">
          <div className="dict_button">
            {/* {openedGame===2? */}
            <button
              className={openedGame === 1 ? "opened_game" : ""}
              onClick={() => {
                setOpenedGame(1);
                setPoint(0);
                setTries(0);
              }}
            >
              I
            </button>
            {openedGame === 1 ? (
              <div className="dict_level_buttons">
                <button
                  className={isVisibleFront ? "clicked_button" : ""}
                  onClick={() => {
                    setIsVisibleFront(!isVisibleFront);
                    setIsWonVisible(!isVisibleFront);
                    console.log(isVisibleFront);
                  }}
                ></button>
                <button
                  className={isVisibleBack ? "clicked_button" : ""}
                  onClick={() => {
                    setIsVisibleBack(!isVisibleBack);
                    console.log(isVisibleBack);
                  }}
                ></button>
              </div>
            ) : (
              console.log()
            )}
          </div>
          {/* :openedGame===1? */}
          <button
            className={openedGame === 2 ? "opened_game" : "closed_game"}
            onClick={() => {
              setOpenedGame(2);
              setPoint(0);
              setTries(0);
            }}
          >
            II
          </button>
          <button
            className={openedGame === 3 ? "opened_game" : "closed_game"}
            onClick={() => {
              setOpenedGame(3);
              setPoint(0);
              setTries(0);
            }}
          >
            III
          </button>

          {/* } */}
        </div>
      </div>
      <div>
        {openedGame === 0 ? (
          <Settings
            // point={point}
            setPoint={setPoint}
            // tries={tries}
            setTries={setTries}
            // openedGame={openedGame}
            setOpenedGame={setOpenedGame}
          />
        ) : openedGame === 1 ? (
          <Dictionary
            point={point}
            setPoint={setPoint}
            tries={tries}
            setTries={setTries}
            cardsData={wordsForCards}
            setOpenedGame={setOpenedGame}
            isVisibleFront={isVisibleFront}
            isVisibleBack={isVisibleBack}
            sentences={sentences}
          />
        ) : openedGame === 2 ? (
          <CreateSentences
            point={point}
            setPoint={setPoint}
            tries={tries}
            setTries={setTries}
            cardsData={wordsForCards}
            isWonVisible={isWonVisible}
            sentences={sentences}
          />
        ) : openedGame === 3 ? (
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
        )}
      </div>
    </div>
  );
}
