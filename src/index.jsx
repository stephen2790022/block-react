/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from 'components/MarkdownInput';
import NoteDisplay from 'components/NoteDisplay';
import AllNotes from 'components/AllNotes';
import 'components/assets/style.scss'

const App = () => {
  const [value, setValue] = React.useState('');
  const [title, setTitle] = React.useState('');


  const onChange = (event) => {
    setValue(event.target.value);
  }
  const handleSave = () => {
    localStorage.setItem(title, value);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  }
  const handleLinks = (index) => {
    setValue(localStorage.getItem(localStorage.key(index)))
    setTitle(localStorage.key(index))
  }
  
  return (
    <div className="container">
      <div className="allNotes">
        <AllNotes handleLinks={handleLinks}/>
      </div>
      <div className="inputs">
        <NoteDisplay value={value} tileValue={title} />
        <MarkdownInput onChange={onChange} contentValue={value} titleValue={title} handleTitle={handleTitle} handleSave={handleSave} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))