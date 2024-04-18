import React from 'react'

const Result = ({UserAnswers,questions,resetQuiz=()=>{}}) => {
    const currectAnswer=UserAnswers.filter((answer)=>answer).length;
    console.log(currectAnswer);
  return (
    <div className='results'>
        <h2>Results</h2>
        <p>You Answered {currectAnswer} out of {questions.length} questions.
        <span onClick={resetQuiz}>Click here to retry</span>
        </p>
        <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={UserAnswers[index]}>
              Q{index + 1}. {question.question}
              <b>
                {UserAnswers[index]
                  ? ""
                  : `- ${
                      question.answerOptions.find((ans) => ans.isCorrect).text
                    }`}
              </b>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Result