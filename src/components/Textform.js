import React, {useState} from 'react'


export default function Textform(props) {
  // Declaring a state variable 'text' and a function 'setText' to update it
  const [text, setText] = useState("");

  // Event handler for the button click to convert text to Uppercase
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");

    let newText = text.toUpperCase(); // Converting the current value of 'text' to uppercase
    setText(newText); // Updating the 'text' state with the uppercase value
    props.showAlert("Converted to Uppercase", "success");
  }

  // Event handler for the input field change
  const handleOnChange = (event) => { 
    
    // console.log("On Change"); // Logging a message indicating that there was a change in the input field
    
    setText(event.target.value); // Updating the 'text' state with the value entered in the input field
  };

  // Event handler for the button click to convert text to Lowercase
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  
  };

  // Clear the Text
  const handleClearClick = ()=>{
    let newText ="";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };


  //Copy text
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to Clipboard", "success");
    
  };

  // remove extra spaces
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+ /);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");

  };



  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1 className='mb-2'>{props.heading}</h1>

        <div className="mb-3">

        {/* Event listener that triggers the handleOnChange function when the input value changes */}
            <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor:props.mode==='dark'?'#161719':'white' }} value={text} onChange={handleOnChange} id="myBox" rows={10}/>
        </div>

        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} disabled={text.length===0}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick} disabled={text.length===0}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick} disabled={text.length===0}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy} disabled={text.length===0}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces} disabled={text.length===0}>Remove Extra Spaces</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleBoldClick}>B</button>  */}

      </div>

      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Your Text Summary</h2>

        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>

        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Preview!!"}</p>
      </div>
    </>
  )
}
