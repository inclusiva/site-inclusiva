// Button.js

import React from 'react';
import './index.css';

const Button = ({ text }) => {

    return (
        <div className="Button">
            <a href="https://forms.gle/ZBr5XdpSZ4JHMpy67" rel="noreferrer" target='_blank'>
                <button>{text}</button>
            </a>
        </div>
    );
};

export default Button;
