import { useMemo, useState } from "react";

export default function GuessPicture(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    sentences,
    point,
    setPoint,
    tries,
    setTries,
    cardsData,
    setPartOfGame,
  } = props;
  console.log(sentences, cardsData);
  const withPictures = useMemo(() => {
    return sentences.filter((sentence) => sentence.picture);
  }, []);
  const shuffledSentences = useMemo(() => {
    return sentences.sort(() => 0.5 - Math.random());
  }, []);
  // const pictureData = sentences[0].picture.split("/");
  // const imagePath = "game_photos/გაერთიანებული/";
  // const image = `${imagePath}1 (1).jpg`;
  // const image = `${imagePath}${pictureData[1]}  (${pictureData[2]}).jpg`;
  console.log(
    "image",
    shuffledSentences
    // image,
    // pictureData[1],
    // withPictures,
    // withPictures[0].pathOfPicture
  );
  return (
    <div className="">
      {withPictures.length != 0 ? (
        <div className="">
          <div className="">
            <div className="">
              <img
                src={withPictures[currentIndex].pathOfPicture}
                alt=""
                // width="100px"
              />
            </div>
            {/* ))} */}
          </div>
          <div className="flex_wrap">
            {cardsData.map((word) => ( 
              <div className="card" onClick={()=>{
                console.log("დაეჭირა")
              }}>{word.backText}</div>
            ))}
          </div>
        </div>
      ) : (
        <button className="" onClick={() => setPartOfGame(6)}>
          შემდეგი ეტაპი
        </button>
      )}
    </div>
  );
}
