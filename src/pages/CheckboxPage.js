import React, { useState } from 'react';
import { Checkbox, Table } from '../components';

export const CheckboxPage = () => {
    const [check, setCheck] = useState(true);
    const [checkLabel, setCheckLabel] = useState(true);

    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'checked', 
            description: 'define the checkbox state', 
            default: '', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'onChange', 
            description: 'handle checkbox change', 
            default: '', 
            type: 'function',
            value: ''
        },
        { 
            property: 'disable', 
            description: 'Make checkbox disabled', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'color', 
            description: 'Set color of checkbox from list', 
            default: '', 
            type: 'string',
            value: 'primary | info | success | error'
        },
        { 
            property: 'label', 
            description: 'Set checkbox label', 
            default: '', 
            type: 'string',
            value: ''
        },
        { 
            property: 'className', 
            description: 'Set a custom css class to component', 
            default: '', 
            type: 'string',
            value: ''
        }
    ]

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
            <h2>API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
