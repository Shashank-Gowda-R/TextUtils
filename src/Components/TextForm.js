import React, { useState } from 'react';

const TextForm = (props) => {
    const handleOnChange = (event) => {
        console.log('On Change')
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log('Convert to Uppercase Button Clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () =>{
        setText('')
    }

    const { heading } = props;
    const [text, setText] = useState('Enter text here');
    // text = 'New Text'; //Wrong way of updating the text
    // setText("New Text"); // Correct way of updating the text
    return (
        <>
            <h1>{heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>
            <h2 className="container my-4">
                Your text summary
            </h2>
            <p>{text.split(' ').length} Words</p>
            <p>{text.length} Characters</p>
            <p>On average it takes {text.split(' ').length * 0.008} minutes to reads</p>
            <h2 className='mx-4' >Preview</h2>
            <p> {text} </p>
        </>
    );
}

export default TextForm;
