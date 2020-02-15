import React, { useState } from 'react';
import { RadioGroup } from '../components/radio';
import { InputField } from '../components/input';
import { Icon } from '../components/icon';
import { Table } from '../components/table';
import { Button } from '../components/button';

export const RadioPage = () => {
    const [cityUS, setCityUS] = useState('');
    const [city, setCity] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const cities = ['Nur-Sultan', 'Almaty', 'Shymkent'];
    const citiesUS = ['Washington, D.C.', 'New York City', 'Chicago'];

    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'onChange', 
            description: 'Handle radio change', 
            default: '', 
            type: 'function',
            value: 'return a radio value'
        },
        { 
            property: 'name', 
            description: 'Set radio group name', 
            default: '', 
            type: 'string',
            value: ''
        },
        { 
            property: 'value', 
            description: 'Chosen value', 
            default: '', 
            type: 'string',
            value: ''
        },
        { 
            property: 'disabled',
            description: 'Make button disabled', 
            default: 'false',
            type: 'boolean', 
            value: 'true | false'
        },
        { 
            property: 'vertical',
            description: 'Make position vertical', 
            default: 'false',
            type: 'boolean', 
            value: 'true | false'
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
            <div className="page-title">Radio Group</div>
            <h3>Horizontal position with label</h3>
            <RadioGroup 
                value={city}
                name="town" 
                onChange={(value) => setCity(value)}
                options={cities}/>
            <InputField 
                value={city} 
                placeholder="Choose a city" 
                readOnly
                color="info"
                prefix={<Icon name="city"/>}
                width={270}/>
            <h3>Vertical position with label</h3>
            <RadioGroup 
                value={cityUS} 
                vertical
                name="city"
                onChange={(value) => setCityUS(value)}
                options={citiesUS}/>
            <InputField 
                value={cityUS} 
                placeholder="Choose a city" 
                readOnly
                color="info"
                rounded
                prefix={<Icon name="city"/>}
                width={270}/>
            <div className="row align-center">
                <h3>Disabled</h3>
                <Button 
                    className="ml-15"
                    color="info"
                    name="Toggle disabling" 
                    onClick={() => setIsDisabled(!isDisabled)}/>
            </div>
            <RadioGroup 
                value={cityUS} 
                vertical
                name="city"
                disabled={isDisabled}
                onChange={(value) => setCityUS(value)}
                options={citiesUS}/>
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
