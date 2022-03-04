import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = ({user, ...props}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    
    let selected = e.target.files[0]

    const types = ['image/png', 'image/jpeg'];

    if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError('');
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
  }

  const handelClick = (e) => {
    if(!user) {
      props.signInWithGoogle();
      e.preventDefault();
    }
  }

  return (
    <form>
      <label onClick={handelClick}>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar user={ user } file={file} setFile={setFile} /> }
      </div>
    </form>
  )
}

export default UploadForm