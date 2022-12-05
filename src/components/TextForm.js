import React, {useState} from 'react'
export default function textform(props) {

  
 
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    // setText("you have clicked on handlwUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!" , "success")
  }
  
 
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!" , "success")
  }

  const handleOnChange = (event)=>{
   // console.log("On change ");
    setText(event.target.value);
  }
  
  
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!" , "success")
  }

  const handleCopyText = ()=>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!" , "success")
  }

  const handleExtraSpaces = ()=>{
    let spaceText = text.split(/[ ]+/)
    setText(spaceText.join(" "));
    props.showAlert("Extra spaces removed!" , "success")
  }
  

  const [text, setText] = useState('');

  return (
   <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1 style={{Color: props.mode==='dark'?'white':'white'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} name="text area" id="mybox"  rows="7" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#0d0d0d':'white' , color: props.mode==='dark'?'white':'black'}} ></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1  my-2" onClick={handleUpClick}>Convert to UpperCase</button>

        <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert to LowerCase</button>

        <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear</button>

        <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleCopyText}>Copy</button>

        <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text   summary</h2>
      {text.split(" ").length} words and {text.length} characters
      <p>It will take {0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  ) 
}
