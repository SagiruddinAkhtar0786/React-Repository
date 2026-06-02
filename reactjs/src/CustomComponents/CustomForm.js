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
// text = "new text"; //  wrong way to change the state
 //setText("new text"); // correct way to change the state 
    return (
        <div>
            <h1 className="props_heading" >{props.heading} </h1>
            <div >
              
                <textarea className="form-control" value = {text} id="myBox" rows="3" cols={"3"} onChange={handleOnChange}></textarea>
            </div>

            <button className=" btn btn-primary" onClick={handleUpClick}>Conver to UpperCase</button>

        </div>
    )
}

