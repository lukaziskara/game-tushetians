import { useState, useMemo } from "react";
import Chapter from "../components/Chapter";
// import tushetians from "../tushetians.json";
import tushetians from "../tushetians_new.json";

export default function Game() {
  const [partOfApp, setPartOfApp] = useState("startingPage");
  console.log(tushetians);
  const [isNotChosen, setIsNotChosen] = useState(true);
  const randomSentences = useMemo(() => {
    const shuffledTushetians = tushetians.sort(() => 0.5 - Math.random());
    const randomSentences = [];
    let indexWithPic;
    randomSentences.push(
      shuffledTushetians.find((sentence, index) => {
        indexWithPic = index;
        return sentence.picture;
      })
    );
    shuffledTushetians.splice(indexWithPic, 1);
    console.log("dwadwa", randomSentences);
    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(
        Math.random() * shuffledTushetians.length
      );
      randomSentences.push(shuffledTushetians[randomNumber]);
      console.log(shuffledTushetians.length);
      shuffledTushetians.splice(randomNumber, 1);
    }
    return randomSentences
    // return shuffledTushetians.map((sentence) => {
    //   // console.log(sentence);
    //   if (isNotChosen) {
    //     // console.log("უკვე არჩეულია");
    //     setIsNotChosen(false);
    //   } else if (sentence.picture) {
    //     console.log(sentence.picture);
    //   }
    // }, []);
  });
  console.log(randomSentences)
  return (
    <div className="applc">
      <div className="chapters">
        {/* {tushetians.map((shuffledTushetians, index) => {
          const randomSentences = [];
          for (let i = 0; i < 4; i++) {
            const randomNumber = Math.floor(
              Math.random() * shuffledTushetians.length
            );
            randomSentences.push(shuffledTushetians[randomNumber]);
            console.log(shuffledTushetians.length);
            shuffledTushetians.splice(randomNumber, 1);
            // console.log(shuffledTushetians.sentences.length);
            // console.log(shuffledTushetians.sentences[randomNumber]);
          }
          // console.log(index,"shuffledTushetians", shuffledTushetians.topic,randomSentences)
          return ( */}
        <Chapter
          // key={index}
          // index={index}
          // topic={shuffledTushetians.topic}
          value={randomSentences}
        />
        {/* );
        })} */}
      </div>
    </div>
  );
}
