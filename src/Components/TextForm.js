import React, { useState } from 'react';

const TextForm = (props) => {

    const { heading, mode, showAlert } = props;
    const [text, setText] = useState('');
    // text = 'New Text'; //Wrong way of updating the text
    // setText("New Text"); // Correct way of updating the text

    const handleOnChange = (event) => {
        console.log('On Change')
        setText(event.target.value);
    }

    const handleUpClick = () => {
        if (text.length > 0) {
            let newText = text.toUpperCase();
            setText(newText);
            showAlert('Converted to Uppercase', 'success');
        } else {
            showAlert('There is no text to convert', 'warning');
        }
    }

    const handleLowClick = () => {
        if (text.length > 0) {
            let newText = text.toLowerCase();
            setText(newText);
            showAlert('Converted to Lowercase', 'success');
        } else {
            showAlert('There is no text to convert', 'warning');
        }

    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
        showAlert('Cleared the text', 'warning');
    }

    const handleCopy = () => {
        let newText = document.getElementById('textBox').value;
        // newText.select();
        // newText.setSelectionRange(0, newText.length);
        navigator.clipboard.writeText(newText);
        showAlert('Copied the content', 'success');
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        showAlert('Extra space removed', 'success');
    }

    return (
        <div style={{ color: mode === 'light' ? 'black' : 'white' }}>
            <h1 className={`text-${mode === 'light' ? 'dark' : 'light'}`} >{heading} </h1>
            <div className={`mb-3`}>
                <textarea className="form-control" style={{ backgroundColor: mode === 'dark' ? '#244a68' : '#f2f2f2', color: mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleClear}>Clear</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleExtraSpace}>Remove Extra space</button>
            <h2 style={{marginTop:'15px'}}>
                Your text summary
            </h2>
            <div style={{marginLeft:'10px'}} >
                <p>
                    {
                        (text.length > 0) ? text.split(' ').length : 0
                    } words </p>
                <p>{text.length} Characters</p>
                <p>On average it takes {(text.length > 0) ? text.split(' ').length * 0.008 : 0} minutes to reads</p>
            </div>
            <h2 style={{marginTop:'15px'}} >Preview</h2>
            <p style={{marginLeft:'10px'}}> {text.length > 0 ? text : 'Enter your text above in the textbox to preview it here'} </p>
        </div>
    );
}

export default TextForm;