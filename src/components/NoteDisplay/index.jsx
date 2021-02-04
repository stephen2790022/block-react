import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = ({ value, tileValue }) => {
  const converter = new Showdown.Converter();
  const content = converter.makeHtml(value);
  const titleContent = converter.makeHtml(tileValue);
  const creatMarkup = () => {
    return { __html: content }
  };
  const titleMarkup = () => {
    return { __html: titleContent }
  };

  return (
    <div className='markup'>
      <div className='title' dangerouslySetInnerHTML={titleMarkup()} />
      <div dangerouslySetInnerHTML={creatMarkup()} />
    </div>
  );
};

export default NoteDisplay;