import React from "react";
import "./App.css";


const Questioner = ({
  handleClick,
  Index,
  data: { correct_answer, incorrect_answers, question },
}) => {
  const ShuffledAns = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  //   console.log(handleClick);
  return (
    <div className="mainFlx">
      <div className="firstDiv">
        <h2>( {Index} ) {question}</h2>
      </div>

      <div className="secDiv">
        {ShuffledAns.map((ans, i) => {
          return (
            <div key={i} className="btn_div">
              <button  onClick={() => handleClick(ans)} key={i}
            //   dangerouslySetInnerHTML={{ __html: ans}}
              >
                {ans}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questioner;
