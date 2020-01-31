import React, { useState } from 'react';
import { Switch } from '../components/Switch';
import { Table } from '../components/Table';

export const SwitchPage = () => {
    const [check, setCheck] = useState(true);
    const [check2, setCheck2] = useState(true);
    const [check1, setCheck1] = useState(true);

    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'check', 
            description: 'define the switch state', 
            default: '', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'onChange', 
            description: 'handle switch change', 
            default: '', 
            type: 'function',
            value: ''
        },
        { 
            property: 'disable', 
            description: 'Make switch disabled', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'color', 
            description: 'Set color of switch from list', 
            default: '', 
            type: 'string',
            value: 'primary | info | success | error'
        },
        { 
            property: 'leftLabel', 
            description: 'Set left side label', 
            default: '', 
            type: 'string',
            value: ''
        },
        { 
            property: 'rightLabel', 
            description: 'Set right side label', 
            default: '', 
            type: 'string',
            value: ''
        },
        { 
            property: 'leftIcon', 
            description: 'Set left side icon', 
            default: '', 
            type: 'string',
            value: 'moon | home | etc. (see icons list)'
        },
        { 
            property: 'rightIcon', 
            description: 'Set right side icon', 
            default: '', 
            type: 'string',
            value: 'moon | home | etc. (see icons list)'
        },
        { 
            property: 'leftIconColor', 
            description: 'Set left side icon color', 
            default: '', 
            type: 'string',
            value: 'hex | rgba | css standard preset'
        },
        { 
            property: 'rightIconColor', 
            description: 'Set right side icon color', 
            default: '', 
            type: 'string',
            value: 'hex | rgba | css standard preset'
        }
    ]

    return (
        <div className="page">
            <div className="page-title">Switches</div>
            <h3>Simple switches</h3>
            <div className="row">
                <Switch check={check} onChange={() => setCheck(!check)}/>
                <Switch check={check} color="primary" onChange={() => setCheck(!check)}/>
                <Switch check={check} color="info" onChange={() => setCheck(!check)}/>
                <Switch check={check} color="success" onChange={() => setCheck(!check)}/>
                <Switch check={check} color="error" onChange={() => setCheck(!check)}/>
                <Switch check={check2} color="error" disabled onChange={() => setCheck2(!check2)}/>

            </div>
            <h3>Switches with icons and labels</h3>
            <Switch color="info" 
                check={check1}
                leftLabel="Off"
                rightLabel="On" 
                onChange={() => setCheck1(!check1)}/>
            <br/>
            <Switch color="primary" 
                check={check1}
                leftIcon="moon"
                leftIconColor="darkblue"
                rightIcon="sun" 
                rightIconColor="#feda24"
                onChange={() => setCheck1(!check1)}/>
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
