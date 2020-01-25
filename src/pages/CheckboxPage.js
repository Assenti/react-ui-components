import React, { useState } from 'react';
import { Checkbox } from '../components/Checkbox';

export const CheckboxPage = () => {
    const [check, setCheck] = useState(true);
    const [checkLabel, setCheckLabel] = useState(true);

    return (
        <div className="page">
            <div className="page-title">Checkboxes</div>
            <h3>Simple checkboxes</h3>
            <div className="row">
                <Checkbox
                    className="mr-20" 
                    checked={check} 
                    onChange={() => setCheck(!check)}/>
                <Checkbox
                    className="mr-20" 
                    checked={check} 
                    color="primary" 
                    onChange={() => setCheck(!check)}/>
                <Checkbox 
                    className="mr-20"
                    checked={check} 
                    color="info" 
                    onChange={() => setCheck(!check)}/>
                <Checkbox 
                    className="mr-20"
                    checked={check} 
                    color="error" 
                    onChange={() => setCheck(!check)}/>
                <Checkbox 
                    className="mr-20"
                    checked={check} 
                    disabled
                    onChange={() => setCheck(!check)}/>
            </div>
            <h3>Checkboxes with label</h3>
            <div className="row">
                <Checkbox
                    className="mr-20"
                    label="Checkbox"
                    color="primary" 
                    checked={checkLabel} 
                    onChange={() => setCheckLabel(!checkLabel)}/>
                <Checkbox
                    label="Checkbox"
                    color="info" 
                    checked={checkLabel} 
                    onChange={() => setCheckLabel(!checkLabel)}/>
            </div>
        </div>
    )
}
