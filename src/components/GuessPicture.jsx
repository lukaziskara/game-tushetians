import { useMemo, useState } from "react";
// import image from '../game_photos/სიტუაციები/1.jpg';

// import image1 from "../game_photos/სიტუაციები"
export default function GuessPicture(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { sentences, point, setPoint, tries, setTries, setPartOfGame } = props;
  console.log("sentences", sentences);
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
    "shuffledSentences",
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
          <div>
            {shuffledSentences.map((sentence, index) => {
              // console.log(sentence);
              return (
                <div
                  className="sentence_card"
                  onClick={() => {
                    console.log(
                      sentence.picture ? sentence.picture : "არაა",
                      withPictures.length
                    );
                    if (
                      withPictures.length != 0 &&
                      sentence.index === withPictures[currentIndex].index
                    ) {
                      console.log("დეემთხვა");
                      setPoint(point + 1);
                      setTries(tries + 1);
                      withPictures.splice(0, 1);
                      shuffledSentences.splice(index, 1);
                    } else {
                      setTries(tries + 1);
                    }
                  }}
                >
                  {sentence.sentence}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <button className="" onClick={() => setPartOfGame(5)}>
          შემდეგი ეტაპი
        </button>
      )}
    </div>
  );
}
