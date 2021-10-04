import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
   const peopleArr = data;
   const [people, setPeopleArr] = useState(peopleArr);
   const [btnText, setBtnText] = useState("Clear All");
  return <>
  <main>
  <section className="container">
    <h3>{people.length} birthdays today</h3>
    {people.map((element) => {
    return <List person = {element}></List>
    })}
    <button onClick={() => {
      console.log(people.length)
      if(people.length > 0){
         setPeopleArr([]);
      setBtnText("Add All");
      }
      else{
      setPeopleArr(peopleArr);
        setBtnText("Clear All");
      }
      }}>{btnText}</button>
  </section>
  </main>
  </>
}

export default App;
