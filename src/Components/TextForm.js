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

    const handleClear = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        let newText = document.getElementById('textBox').value;
        // newText.select();
        // newText.setSelectionRange(0, newText.length);
        navigator.clipboard.writeText(newText);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    const { heading, mode } = props;
    const [text, setText] = useState('');
    // text = 'New Text'; //Wrong way of updating the text
    // setText("New Text"); // Correct way of updating the text
    return (
        <div style={{ color: mode === 'light' ? 'black' : 'white' }}>
            <h1 className={`text-${mode === 'light' ? 'dark' : 'light'}`} >{heading} </h1>
            <div className={`mb-3`}>
                <textarea className="form-control" style={{ backgroundColor: mode === 'dark' ? '#666666' : '#f2f2f2', color: mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra space</button>
            <h2 className="container my-4">
                Your text summary
            </h2>
            <p  >{text.split(' ').length} Words</p>
            <p>{text.length} Characters</p>
            <p>On average it takes {text.split(' ').length * 0.008} minutes to reads</p>
            <h2 className='mx-4' >Preview</h2>
            <p> {text.length>0?text:'Enter your text above in the textbox to preview it here'} </p>
        </div>
    );
}

export default TextForm;
