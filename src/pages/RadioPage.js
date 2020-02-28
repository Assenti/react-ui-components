import React, { useState } from 'react';
import { RadioGroup, InputField, Icon, Table, Button, Card, Collapse } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

const horizontalUsage =
`// Usage examples
import React, { useState } from 'react';
import { InputField, RadioGroup } from '@assenti/rui-components';
const cities = ['Nur-Sultan', 'Almaty', 'Shymkent'];

function Example() {
    const [city, setCity] = useState('');

    return (
        <div>
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
        </div>
    )
}`

const verticalUsage =
`// Usage examples
import React, { useState } from 'react';
import { InputField, RadioGroup } from '@assenti/rui-components';
const citiesUS = ['Washington, D.C.', 'New York City', 'Chicago'];

function Example() {
    const [cityUS, setCityUS] = useState('');

    return (
        <div>
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
        </div>
    )
}`

const disabledUsage =
`// Usage examples
import React, { useState } from 'react';
import { InputField, RadioGroup } from '@assenti/rui-components';
const citiesUS = ['Washington, D.C.', 'New York City', 'Chicago'];

function Example() {
    const [cityUS, setCityUS] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <div>
            <div className="row align-center">
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
        </div>
    )
}`

const RadioPage = () => {
    const [cityUS, setCityUS] = useState('');
    const [city, setCity] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <div className="rui-page">
            <div className="rui-page-title">Radio Group</div>
            <Card outlined title="Horizontal position with label">
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
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {horizontalUsage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined title="Vertical position with label">
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
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {verticalUsage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined title="Disabled">
                <div className="row align-center">
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
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {disabledUsage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
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

export default RadioPage;
