import "./App.css";
import { useEffect, useState } from "react";
import Questioner from "./Questioner";
import {FcAbout,FcApproval,FcCalendar} from "react-icons/fc"
import {BiTimer} from "react-icons/bi"

function Quizapp() {
  const [data, setData] = useState([]);
  const [Index, setIndex] = useState(0);
  const [Score, setScore] = useState(0);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    Api();
  }, []);

  const Api = () => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
    )
      .then((response) => response.json())
      .then((json) => setData(json.results));
  };

  const Next = (i) => {};

  const handleClick = (ans) => {
    let newIndex = Index + 1;
    setIndex(newIndex);

    if (ans === data[Index].correct_answer) {
      setScore(Score + 10);
    }

    if (newIndex >= data.length) {
      setEnd(true);
    }
  };

  let dat = new Date();
  let time = dat.toLocaleTimeString();

  let da = new Date();
  let date = da.toLocaleDateString()





  return end ? (
    <div>
      <h1>Your score is {Score}</h1>

       <div className="AnsDv">
           <h1><u>ALL CORRECT ANSWERS</u></h1>
           <h4>{data.map((E,i) => {
               return<div key={i}>
               <h3 >{E.question}</h3>
               <h5><FcApproval size={15} />  {E.correct_answer}</h5>
               
               </div> 
           })}</h4>
       </div>
    </div>
  ) : (
    <>
      <h1 className="heading">Quiz App</h1>

      <div className="Quiz">
        <div className="timeDiv">
          <p>
            <FcAbout size={30}/> : {Index}/{data.length}
          </p>
          <p>

             <FcCalendar size={30}/>   : {date}
          </p>
          <p><BiTimer color="red" size={30} /> : {time}</p>
        </div>

        {data.length > 0 ? (
          <>
            <div>
              <Questioner
                data={data[Index]}
                handleClick={handleClick}
                Index={Index}
              />
            </div>
          </>
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </>
  );
}

export default Quizapp;
