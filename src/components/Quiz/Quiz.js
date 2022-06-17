
import { useState } from 'react';
import React from 'react'
import "./Quiz.scss";
import { Row, Col } from 'react-bootstrap';
import CATEGORIES from './Categories';
import Category from './Category';
import questionsArt from "./data/art.json";
import questionsEntertainment from "./data/entertainment.json";
import questionsHistory from "./data/history.json";
import QuestionBox  from "../Quiz/QuestionBox";



const Quiz = () => {

const [category, setCategory] = useState(null);
const [questions, setQuestions] = useState([]);

const setCurrentCategory = category => {
  setCategory(category);

  switch (category.name) {
    case CATEGORIES.art.name:
      setQuestions(questionsArt);
      break;
      case CATEGORIES.entertainment.name:
        setQuestions(questionsEntertainment);
        break;
        case CATEGORIES.history.name:
          setQuestions(questionsHistory);
          break;
            
  }

}


  return (
    <section className='quiz'>
<Row className='my-5'>
    <Col className='text-center' id="quiz-center">
        <h1 onClick={() => setCategory(null)}>React Quiz</h1>
    </Col>
</Row>

{category ? (
  <>
  <Row className='d-flex justify-content-center mb-4'>
    <Col md={7} className="text-center">
      <Category category={category} size="lg" onSelect={setCurrentCategory} />
    </Col>
  </Row>
  <Row className='d-flex justify-content-center mb-4'>
    <Col md={7} className="text-center">
     <QuestionBox questions={questions} />
      </Col>
  </Row>
  
  </>
) : (
  <>

{Object.values(CATEGORIES).map((c, i) => (
  <Row key={i} className="d-flex justify-content-center mb-5">
    <Col md={7}>
      <Category category={c} onSelect={setCurrentCategory} />
    </Col>

  </Row>
))}
</>
)}
    </section>
  );
}

export default Quiz