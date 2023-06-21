export default function Results(props) {
  const { sentences, point, tries } = props;
  console.log(props);
  return (
    <div className="">
      <h1>შედეგი: {point / tries}</h1>
      <div className="result_sentences">
        {sentences.map((sentence, index) => (
          <div className="">
            <div className="">{sentence.translation}</div>
            <div className="">{sentence.sentence}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
