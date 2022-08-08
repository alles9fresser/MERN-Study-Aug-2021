import React, {useState} from "react";
import Dropdown from "./Dropdown";
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import Convert from "./Convert";


const options = [
    {
        label: 'AfriKaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
]

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form" >
                <div className="field">
                    <label> enter text </label>
                    <input value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>

            <Dropdown 
                label='Select a Language'
                selected={language} 
                options={options} 
                onSelectedChange={setLanguage}  
            />
            <hr/>
            <h3 className="ui header">output </h3>
            <Convert text={text} language={language}/>
        </div>
    )
};

export default Translate;