import React from 'react';

const List = (props) => {
  const person = props.person;
  return (
    <>
    <article className="person">
      <img src={person.image} alt="" />
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} years</p>
      </div>
    </article>
    </>
  );
};

export default List;
