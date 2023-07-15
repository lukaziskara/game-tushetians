import { useState, useMemo } from "react";
import Chapter from "../components/Chapter";
import tushetians from "../tushetians.json";

function Game() {
  const [partOfApp, setPartOfApp] = useState("startingPage");
  console.log(tushetians);
  // const allSentences = useMemo(() =>{

  // })
  return (
    <div className="applc">
      <div className="chapters">
        {tushetians.map((chapter, index) => {
          const randomSentences = [];
          for (let i = 0; i < 4; i++) {
            const randomNumber = Math.floor(
              Math.random() * chapter.sentences.length
            );
            randomSentences.push(chapter.sentences[randomNumber]);
            // console.log(chapter.sentences.length);
            chapter.sentences.splice(randomNumber, 1);
            // console.log(chapter.sentences.length);
            // console.log(chapter.sentences[randomNumber]);
          }
          // console.log(index,"chapter", chapter.topic,randomSentences)
          return (
            <Chapter
              key={index}
              index={index}
              topic={chapter.topic}
              value={randomSentences}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Game;
