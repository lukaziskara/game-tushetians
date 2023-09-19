// import image from '../game_photos/სიტუაციები/1.jpg';

// import image1 from "../game_photos/სიტუაციები"
export default function GuessPicture(props) {
  const { sentences } = props;
  console.log(sentences);
  const imagePath = "game_photos/გაერთიანებული/";
  const image = `${imagePath}2 (1).jpg`;
  console.log("image");
  return (
    <div className="">
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="">
        {sentences.map((sentence) => {
          console.log(sentence)
          return (<div className="" onClick={()=>{
            console.log(sentence.picture?sentence.picture:"არაა")
          }}>{sentence.sentence}</div>)
        })}
      </div>
    </div>
  );
}
