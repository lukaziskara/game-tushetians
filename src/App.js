// import { useState } from 'react';
// import './App.css';
import Chapter from './components/Chapter'
import tushetians from './tushetians_new.json';
// console.log(tushetians);

function App() {
  return (
    <div className="App">
      {tushetians.map((chapter, index) => {
        const randomSentences = []
        for(let i = 0; i < 4; i++) {
          const randomNumber = Math.floor(Math.random() * chapter.sentences.length);
          randomSentences.push(chapter.sentences[randomNumber]);
          chapter.sentences.splice(randomNumber,1)
        }
        // console.log(index,"chapter", chapter.topic,randomSentences)
        return <Chapter key={index} index={index} topic={chapter.topic} value={randomSentences} />
      })}
    </div>
  );
}

export default App;
