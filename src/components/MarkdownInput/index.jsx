/* eslint-disable no-undef */
import React from 'react';

const MarkdownInput = ( {onChange, handleSave, handleTitle, contentValue, titleValue }) => {

  return (
      <div className='displayInputs'>
        <input  type="text" onChange={handleTitle} value={titleValue} />
        <textarea name="area" value={contentValue} onChange={onChange} id="" cols="100" rows="10" />
        <button onClick={handleSave}>Save</button>
      </div>
  );
};

export default MarkdownInput;