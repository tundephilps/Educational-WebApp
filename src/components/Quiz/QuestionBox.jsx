import React, { useEffect, useState } from 'react'
//import ClassNames from 'classnames';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import classNames from "classnames";
import Result from './Result';

const reorderAnswers = question => {
    const answers = [question.correct, ...question.incorrect];

    for (let index = 0; index < answers.length; index++) {
        const j = Math.floor(Math.random() * index);
        const tmp = answers[index];
        answers[index] = answers[j];
        answers[j] = tmp;
    }

    return answers;

};

export default function QuestionBox ({questions}) {

    const [ currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [ answers, setAnswers ] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [IsSubmitting, setIsSubmitting] = useState(false);
    const [ isDone, setIsDone ] = useState(false);


    useEffect(() => {
        const question = questions[currentQuestionIndex];
        setCurrentQuestion(question);
        setAnswers(reorderAnswers(question));
    }, [currentQuestionIndex, questions]);

const selectAnswer = answer => {
    setIsSubmitting(true);
    setSelectedAnswer(answer);

    if (answer === currentQuestion.correct) {
        setCountCorrectAnswers(countCorrectAnswers + 1);
    }

    setTimeout(() => {
        const newQuestionIndex = currentQuestionIndex + 1;

        if (newQuestionIndex === questions.length) {
            setIsDone(true);
        } else {
            setCurrentQuestionIndex(newQuestionIndex);
            setIsSubmitting(false);
            setSelectedAnswer(null);
        }
    }, 750);
};

    if (isDone) {
        return <Result countCorrectAnswers={countCorrectAnswers} />;
    }

  return (
    <>
    <div>
        {currentQuestionIndex + 1}/{questions.length}
    </div>
    <div className='mb-4'>
        <strong dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
    </div>

    <div>
        <ListGroup className={classNames({ disabled: IsSubmitting })}>
        {answers.map((a, i) => {
            const isSelectedAndSubmitting = IsSubmitting && a === selectedAnswer;

            return (
                <ListGroupItem
                 key={i} 
                className={classNames({
                        correct: isSelectedAndSubmitting && a === currentQuestion.correct,
                        incorrect: isSelectedAndSubmitting && a !== currentQuestion.correct,
                })}
                onClick={() => selectAnswer(a)}>
                    <span dangerouslySetInnerHTML={{ __html: a }} />
                </ListGroupItem>
            )
        })}
    </ListGroup>
  
    </div>
    </>
    )
}
