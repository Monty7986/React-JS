import React, { useState } from 'react'




export default function TextForm(props) {
  const [text, settext] = useState('');

  let style = {
      color: 'black',
      backgroundColor: '#055160'   
     } 

const upperOnclick = () => {
  // console.log("uppercase has clicked" + text);
  let newtext = text.toUpperCase();
  settext(newtext);
  props.showAlert("Converted To Uppercase", "success")
}

const lowerOnclick = () => {
  // console.log("uppercase has clicked" + text);
  let newtext = text.toLowerCase();
  settext(newtext);
  props.showAlert("Converted To Lowercase", "success")
}

const clearOnclick = () => {
  let newtext = ''
  settext(newtext);
  props.showAlert("Cleard Text", "success");
}
const upperOnchange = (event) => {
  // console.log("message has changed");
  settext(event.target.value)
  
}

return (
  <>

    <div>
      <h1 style={{ color: props.mode === 'light' ? {style} : 'light' }}>{props.heading}</h1>
      <div className="container my-3" >

        <textarea className="form-control" value={text} id="myText" style={style} onChange={upperOnchange} rows="10"
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary mx-1" onClick={upperOnclick}>Click To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={lowerOnclick}>Click To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={clearOnclick}>Clear Text</button>
      </div >
      <div className="container" style={{ color: props.mode === 'light' ? 'dark' : 'light' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length}Minutes Takes To Read Paragraph</p>
        <h2>Text Preview</h2>
        <p>{text}</p>
      </div>

    </div>
  </>
)
}
