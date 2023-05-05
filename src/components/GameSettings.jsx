import { useEffect, useState } from "react";

const gameDifficulties = [
  {
    isFirstVisible: "first_visible",
    isSecondVisible: "second_visible",
    isThirdVisible: "right_visible",
  },
  {
    isFirstVisible: "first_visible",
    isSecondVisible: "second_waiting",
    isThirdVisible: "third_visible",
  },
  {
    isFirstVisible: "first_visible",
    isSecondVisible: "second_visible",
    isThirdVisible: "third_waiting",
  },
  {
    isFirstVisible: "first_waiting",
    isSecondVisible: "second_waiting",
    isThirdVisible: "third_visible",
  },
  {
    isFirstVisible: "first_visible",
    isSecondVisible: "second_invisible",
    isThirdVisible: "third_visible",
  },
  {
    isFirstVisible: "first_waiting",
    isSecondVisible: "second_invisible",
    isThirdVisible: "third_visible",
  },
  {
    isFirstVisible: "first_visible",
    isSecondVisible: "second_invisible",
    isThirdVisible: "third_waiting",
  },
];

export default function Settings(props) {
  // const [firstState, setFirstPartState] = useState(
  //   gameDifficulties[0].isFirstVisible
  // );
  // const [secondState, setSecondState] = useState(
  //   gameDifficulties[0].isSecondVisible
  // );
  // const [thirdState, setThirdState] = useState(
  //   gameDifficulties[0].isThirdVisible
  // );
  const {
    setNewGame,
    setPoint,
    setTries,
    setOpenedGame,
    firstPartState,
    setFirstPartState,
    secondPartState,
    setSecondPartState,
    thirdPartState,
    setThirdPartState,
  } = props;
  console.log("rerender");
  // console.log(obj, m, n);
  // const [firstPartState, setFirstPartState] = useState("first_visible");
  // const [secondPartState, setSecondPartState] = useState("second_visible");
  // const [thirdPartState, setThirdPartState] = useState("third_visible");
  // useEffect(() => {
  //   // console.log(firstState, secondState, thirdState);
  // }, [firstState, secondState, thirdState]);
  return (
    <>
      <div className="flex_center select_difficulty">
        {gameDifficulties.map((gameDifficulty, index) => (
          // console.log(gameDifficulty);

          <div
            className="dItem"
            onClick={() => {
              // console.log(gameDifficulty, index);
              // setNewGame();
              setFirstPartState(gameDifficulty.isFirstVisible);
              setSecondPartState(gameDifficulty.isSecondVisible);
              setThirdPartState(gameDifficulty.isThirdVisible);
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="example">
        <div className="card left_card">
          <div className={firstPartState}>სიტყვა</div>
          <div className={secondPartState}>დოშ</div>
        </div>
        <div className="card right_card">
          <div className={thirdPartState}>დოშ</div>
        </div>
      </div>
      <button
        onClick={() => {
          setPoint(0);
          setTries(0);
          setOpenedGame(1);
        }}
      >
        დაწყება
      </button>
    </>
  );
}
