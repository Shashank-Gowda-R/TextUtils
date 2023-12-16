import React, { useState, useEffect } from 'react';

const About = (props) => {
    const { mode } = props;
    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    });

    useEffect(() => {
        if (mode === 'light') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black'
            });
        } else {
            setMyStyle({
                color: 'white',
                backgroundColor: '#244a68',
                border: '1px solid black'
            });
        }
    }, [mode]);

    return (
        <div className='container'>
            <h1 className='my-4' style={{ color: mode === 'light' ? 'black' : 'white' }}>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Convert to Uppercase
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Easily convert your text to <code>uppercase</code> with a simple click. This feature is helpful when you want to capitalize all the letters in your text. Whether you have a block of text or just a single word, this function allows you to instantly transform your text into uppercase, saving you time and effort. It's particularly handy for formatting purposes or when you need your text to stand out with capitalization.                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Convert to Lowercase
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Easily convert your text to <code>uppercase</code> with a simple click. This feature is helpful when you want to capitalize all the letters in your text. Whether you have a block of text or just a single word, this function allows you to instantly transform your text into uppercase, saving you time and effort. It's particularly handy for formatting purposes or when you need your text to stand out with capitalization.                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Clear Text
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <code>Quickly clear the text area to start a fresh</code>. This feature allows you to wipe out the existing text with a single click. Whether you want to remove the previously entered content or start a new text input, this function provides a convenient way to reset the text area instantly. It's particularly useful when you need a clean slate for typing or pasting new content, saving you the hassle of manually deleting existing text. With just one click, your text area is ready for a fresh start.                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Copy Text
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Copy your processed <code>text to the clipboard</code> easily. Use this feature to quickly copy the transformed text for further use. Once you've applied your desired transformations, you can effortlessly copy the resulting text with just a click. This function streamlines the process of transferring your edited text to other applications or documents. Whether you're preparing content for emails, documents, or social media posts, the "Copy Text" feature simplifies the task of moving your text to the clipboard, ready for seamless pasting wherever you need it.                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Remove Extra Space
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <code>Eliminate extra spaces</code> from your text with a single click. This feature helps in cleaning up text with unnecessary spacing. Whether your text contains accidental double spaces or excessive gaps, this function provides a quick solution to tidy up your content. Removing extra spaces is essential for maintaining a neat and professional appearance in your text. The feature ensures that your text looks polished and well-formatted, making it easier to read and presentable for various purposes, such as document creation, web publishing, or communication.                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;
