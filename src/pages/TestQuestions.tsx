import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../types";

export function TestQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answers, setAnswers] = useState("null");
  const [percentageCorrectAnswers, setPercantageCorrectAnswers] = useState("null");


  console.log(questions);

  console.log(questions);

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:2222/tests/${params.testId}`)
      .then((resp) => resp.json())
      .then((questionsFromServer) => {
        console.log(questionsFromServer.questions);
        setQuestions(questionsFromServer.questions);
        setCurrentQuestion(questionsFromServer.questions[0]);
      });
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();
    setAnswers(...answers, event.target.value);
    const percantageCorrectAnswers = () => {
      return (correctAnswers.length / 40) * 100;
    };
  
  }
  console.log(answers);

  return (
    <div className="main">
      <div className="container-md px-md-0 px-4">
        <div className="row">
          {answers === "Gabim" && (
            <div className="col-12">
              <div className="alert-red">Ju nuk e kaloni testin</div>
            </div>
          )}
        </div>
      </div>
      <div
        className="container-md px-md-0 px-4"
        v-else-if="correctAnswers.length >= 36"
      ></div>
      <div className="container-md px-md-0 px-4">
        <div className="row gx-5">
          <div className="col-lg-3 col-12 d-flex flex-column"></div>
          <div className="col-lg-9 col-12 d-flex flex-column">
            <div className="test">
              <div className="numbers-holder">
                <ul>
                  {questions.map((question, index) => (
                    <li key={question.id}>
                      <span onClick={() => setCurrentQuestion(question)}>
                        <div className="d-lg-block d-none">{index + 1}</div>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <hr />
              <form onSubmit={() => handleSubmit}>
                <div className="question-holder">
                  <div className="row gx-5">
                    <div className="col-lg-4 col-12 text-center mb-4">
                      <img src={currentQuestion.imagePath} />
                    </div>
                    <div className="col-lg-8 col-12">
                      <h4>{currentQuestion.question}</h4>
                      <div className="row mt-5 mb-4">
                        <div className="col-lg-5 gx-5 offset-lg-6 col-12">
                          {questions.map((question, index) => (
                            <div key={question.id}>
                              {currentQuestion.id == index && (
                                <div>
                                  <div className="form-check-inline">
                                    <input
                                      type="radio"
                                      name={`pyetja_${question.questionNumber}`}
                                      id={`question_answer_${index + 1}_0`}
                                      value="1"
                                    />
                                    <label
                                      htmlFor={`question_answer_${index + 1}_0`}
                                    >
                                      <span className="inc"></span>
                                      <span className="check"></span>
                                      <span className="box"></span>
                                      Saktë
                                    </label>
                                  </div>
                                  <div className="form-check-inline">
                                    <input
                                      type="radio"
                                      name={`pyetja_${question.questionNumber}`}
                                      id={`question_answer_${index + 1}_1`}
                                      value="0"
                                    />
                                    <label
                                      htmlFor={`question_answer_${index + 1}_1`}
                                    >
                                      <span className="check"></span>
                                      <span className="box"></span>
                                      Gabim
                                    </label>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="buttons-holder">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                      <button type="submit" className="check-button">
                        <i className="fas fa-check"></i>
                        Përfundo Testin
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
