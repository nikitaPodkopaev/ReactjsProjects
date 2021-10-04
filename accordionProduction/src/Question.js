import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const {id, title, info}  = props.questionData;
  const [contentIsShown, setContentIsShown] = useState(false);
  return <>
  <article className="question">
  <header>
  <h4>{title}</h4>
  <button className="btn" onClick={() => setContentIsShown(!contentIsShown)}>
    {contentIsShown ? <AiOutlineMinus></AiOutlineMinus>: <AiOutlinePlus></AiOutlinePlus>}
  </button>
  </header>
  {contentIsShown ? <p>{info}</p>: ""}
  </article>
  </>
};

export default Question;
