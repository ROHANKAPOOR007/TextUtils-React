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
    let newtext = document.getElementById('myBox');
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
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
        <h1>{props.heading}</h1>

        <div className="mb-3">

        {/* Event listener that triggers the handleOnChange function when the input value changes */}
            <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor:props.mode==='dark'?'#161719':'white' }} value={text} onChange={handleOnChange} id="myBox" rows={10}/>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleBoldClick}>B</button>  */}

      </div>

      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length-0.008 } Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here!!"}</p>
      </div>
    </>
  )
}
