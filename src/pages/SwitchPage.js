import React, { useState } from 'react';
import { Switch, Table, Card, Collapse } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const simpleUsage =
`// Usage examples
import React, { useState } from 'react';
import { Switch } from '@assenti/rui-components';

function Example() {
    const [check, setCheck] = useState(true);
    const [check2, setCheck2] = useState(true);

    return (
        <div className="row">
            <Switch check={check} onChange={() => setCheck(!check)}/>
            <Switch check={check} color="primary" onChange={() => setCheck(!check)}/>
            <Switch check={check} color="info" onChange={() => setCheck(!check)}/>
            <Switch check={check} color="success" onChange={() => setCheck(!check)}/>
            <Switch check={check} color="error" onChange={() => setCheck(!check)}/>
            <Switch check={check2} color="error" disabled onChange={() => setCheck2(!check2)}/>
        </div>
    )
}`

const withIcons =
`// Usage examples
import React, { useState } from 'react';
import { Switch } from '@assenti/rui-components';

function Example() {
    const [check2, setCheck2] = useState(true);

    return (
        <div className="row">
            <Switch color="info" 
                check={check1}
                leftLabel="Off"
                rightLabel="On" 
                onChange={() => setCheck1(!check1)}/>
            <Switch color="primary" 
                check={check1}
                leftIcon="moon"
                leftIconColor="darkblue"
                rightIcon="sun" 
                rightIconColor="#feda24"
                onChange={() => setCheck1(!check1)}/>
        </div>
    )
}
`

const withLabels =
`// Usage examples
import React, { useState } from 'react';
import { Switch } from '@assenti/rui-components';

function Example() {
    const [check3, setCheck3] = useState(true);
    const [check4, setCheck4] = useState(false);

    return (
        <div className="row align-center">
            <Switch color="primary" 
                check={check3}
                position="vertical"
                onChange={() => setCheck3(!check3)}/>
            <Switch color="error" 
                check={check4}
                position="vertical"
                leftLabel="Off"
                rightLabel="On" 
                onChange={() => setCheck4(!check4)}/>
            <Switch color="info" 
                check={check3}
                position="vertical"
                leftIcon="moon"
                rightIcon="sun" 
                onChange={() => setCheck3(!check3)}/>
        </div>
    )
}`

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
        property: 'position', 
        description: 'Change switch position', 
        default: 'horizontal', 
        type: 'string',
        value: 'vertical'
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
    },
    { 
        property: 'className', 
        description: 'Set css custom class', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const SwitchPage = () => {
    const [check, setCheck] = useState(true);
    const [check1, setCheck1] = useState(true);
    const [check2, setCheck2] = useState(true);
    const [check3, setCheck3] = useState(true);
    const [check4, setCheck4] = useState(false);

    return (
        <div className="rui-page">
            <div className="rui-page-title">Switch Component</div>
            <Card outlined title="Simple switches">
                <div className="row">
                    <Switch check={check} onChange={() => setCheck(!check)}/>
                    <Switch check={check} color="primary" onChange={() => setCheck(!check)}/>
                    <Switch check={check} color="info" onChange={() => setCheck(!check)}/>
                    <Switch check={check} color="success" onChange={() => setCheck(!check)}/>
                    <Switch check={check} color="error" onChange={() => setCheck(!check)}/>
                    <Switch check={check2} color="error" disabled onChange={() => setCheck2(!check2)}/>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {simpleUsage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined title="Switches with icons and labels">
                <div className="row">
                    <Switch color="info" 
                        check={check1}
                        leftLabel="Off"
                        rightLabel="On" 
                        onChange={() => setCheck1(!check1)}/>
                    <Switch color="primary" 
                        check={check1}
                        leftIcon="moon"
                        leftIconColor="darkblue"
                        rightIcon="sun" 
                        rightIconColor="#feda24"
                        onChange={() => setCheck1(!check1)}/>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {withIcons}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined title="Switches positions">
                <div className="row align-center">
                    <Switch color="primary" 
                        check={check3}
                        position="vertical"
                        onChange={() => setCheck3(!check3)}/>
                    <Switch color="error" 
                        check={check4}
                        position="vertical"
                        leftLabel="Off"
                        rightLabel="On" 
                        onChange={() => setCheck4(!check4)}/>
                    <Switch color="info" 
                        check={check3}
                        position="vertical"
                        leftIcon="moon"
                        rightIcon="sun" 
                        onChange={() => setCheck3(!check3)}/>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {withLabels}
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

export default SwitchPage;
