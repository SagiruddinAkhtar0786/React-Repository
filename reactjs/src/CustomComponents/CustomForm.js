import React, {useState}from 'react'


export default function CustomForm(props) {

const [text, setText] = useState("please write text here");


const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
}
const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
}


const handleLoClick = () => {
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
}
// text = "new text"; //  wrong way to change the state
 //setText("new text"); // correct way to change the state 
    return (

        <>
        
        <div>
            <h1 className="props_heading" >{props.heading} </h1>
            <div >
              
                <textarea className="form-control" value = {text} id="myBox" rows="3" cols={"3"} onChange={handleOnChange}></textarea>
            </div>

            <button className=" btn btn-primary mx-2 my-2" onClick={handleUpClick}>Conver to UpperCase</button>
            <button className=" btn btn-primary mx-2 my-2" onClick={handleLoClick}>Conver to LowerCase</button>

        </div>

        <div className="container">
            <h1>your text here</h1>
            <p>{text.split(" ").length}  words and  {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    )
}

