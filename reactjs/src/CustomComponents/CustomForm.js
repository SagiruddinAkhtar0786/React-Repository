import React, {useState}from 'react'


export default function CustomForm(props) {

//const [text, setText] = useState("Enter text here"); // useState is a hook which is used to change the state of the component and also to re-render the component when the state changes.   
const [text, setText] = useState("");

const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
}
const handleOnChange = (event) => {
    console.log("On Change");
   setText(event.target.value);
}


const handleLoClick = () => {
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
}
const handleClearClick = () => {
    console.log("Clear Text was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
}   


// text = "new text"; //  wrong way to change the state
 //setText("new text"); // correct way to change the state 
    return (

        <>
        
        <div className='container' style={{color: props.mode === 'dark' ? 'blue' : '#0b0b36' }}>
            <h1 className="props_heading" >{props.heading} </h1>
            <div >
              
                <textarea className="form-control" value = {text} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : '#737381'    }} id="myBox" rows="3" onChange={handleOnChange}></textarea>
            </div>

            <button className=" btn btn-primary mx-2 my-2" onClick={handleUpClick}>Conver to UpperCase</button>
            <button className=" btn btn-primary mx-2 my-2" onClick={handleLoClick}>Conver to LowerCase</button>
            <button className=" btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

        </div>

        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#1f1f5b' }}>
            <h2>your text here</h2>
            <p>{text.split(" ").length}  words and  {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something to preview"}</p>
        </div>

        </>
    )
}

