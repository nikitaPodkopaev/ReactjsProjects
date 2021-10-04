import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [colorArr, setColorArr] = useState(new Values("#ffffff").all(10));
const [isError, setIsError] = useState(false);
const [inputValue, setInputValue] = useState("");
const [sliderValue, setSliderValue] = useState(10);
const handleSubmit = (e) => {
  e.preventDefault();
  try{
const color = new Values(inputValue).all(parseInt(sliderValue));
console.log(color)
setColorArr(color);
setIsError(false)
  }
  catch(error){
    console.log(error);
    setIsError(true);
  }
}
  return <>
  <main>
  <section className="container" onSubmit={handleSubmit}>
    <h3>color generator</h3>
    <form>
      <input type="text" placeholder="#ffffff" className={isError ? "error":""} value={inputValue} onChange={(e) => {
        setInputValue(e.target.value);
      }}/>
      <div className="sliderContainer">
      <div className="sliderValue">
        <span>{sliderValue}</span>
      </div>
      <input type="range" min="1" max="100" value={sliderValue} onChange={(e) => {
        setSliderValue(e.target.value);
      }} className="slider"/>
      </div>
      <button type="submit" className="btn">Get color</button>
    </form>
  </section>
  <section className="colors">
    {colorArr.map((color, index ) => {
      return <SingleColor key={index} color={color} index={index}></SingleColor>
    })}
  </section>
  </main>
  </>
}

export default App
