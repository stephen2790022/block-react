/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Showdown from 'showdown';

const AllNotes = ( {handleLinks} ) => {
  const converter = new Showdown.Converter();
  const array = [];

  for (let i = 0; i < localStorage.length; i++) {
    let item = localStorage.getItem(localStorage.key(i))
    array.push(converter.makeHtml(localStorage.key(i)) + converter.makeHtml(item));
  }
  const markup = (item) => {
    return { __html: item }
  }

console.log(array)
  return (
    <ul className='savedNotesUl'>
      {array.map((notes, index) => (
        <a href="#" onClick={() => handleLinks(index)}>
          <li key={index} className="savedNotes">
            <div className="liP" dangerouslySetInnerHTML={markup(notes)} />
          </li>
        </a>
      ))}
        
    </ul>
  );
};

export default AllNotes;